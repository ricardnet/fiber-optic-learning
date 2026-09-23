const db = require('../config/database');

const statsController = {
  // Ambil atau daftarkan pengguna baru / login
  loginOrCreateUser: async (req, res) => {
    try {
      const { username, class_name } = req.body;
      if (!username) {
        return res.status(400).json({ error: 'Username diperlukan.' });
      }

      // Check if user exists
      let user = await db.get('SELECT * FROM users WHERE username = ?', [username]);
      if (!user) {
        // Create new user
        const result = await db.run(
          'INSERT INTO users (username, class_name) VALUES (?, ?)',
          [username, class_name || 'Umum']
        );
        user = { id: result.id, username, class_name: class_name || 'Umum' };
      } else if (class_name && user.class_name !== class_name) {
        // Update class name if changed
        await db.run('UPDATE users SET class_name = ? WHERE username = ?', [class_name, username]);
        user.class_name = class_name;
      }

      res.json({ message: 'Login sukses', user });
    } catch (err) {
      console.error('Error logging in:', err.message);
      res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
    }
  },

  // Simpan progres pembelajaran material
  saveProgress: async (req, res) => {
    try {
      const { username, material_id } = req.body;
      if (!username || !material_id) {
        return res.status(400).json({ error: 'Username dan material_id diperlukan.' });
      }

      // Insert progress, ignore duplicate
      await db.run(
        'INSERT OR IGNORE INTO learning_progress (username, material_id) VALUES (?, ?)',
        [username, material_id]
      );

      res.status(201).json({ message: 'Progres belajar disimpan!' });
    } catch (err) {
      console.error('Error saving progress:', err.message);
      res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
    }
  },

  // Simpan log troubleshooting
  saveTroubleshootingLog: async (req, res) => {
    try {
      const { username, case_id, is_success } = req.body;
      if (!username || !case_id || is_success === undefined) {
        return res.status(400).json({ error: 'Data input tidak lengkap.' });
      }

      await db.run(
        'INSERT INTO troubleshooting_logs (username, case_id, is_success) VALUES (?, ?, ?)',
        [username, case_id, is_success ? 1 : 0]
      );

      res.status(201).json({ message: 'Log troubleshooting berhasil disimpan!' });
    } catch (err) {
      console.error('Error saving troubleshooting log:', err.message);
      res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
    }
  },

  // Ambil seluruh statistik pembelajaran untuk user tertentu
  getUserStats: async (req, res) => {
    try {
      const { username } = req.query;
      if (!username) {
        return res.status(400).json({ error: 'Username diperlukan.' });
      }

      // 1. Ambil info materi yang selesai
      const completedMaterialsRows = await db.query(
        'SELECT material_id FROM learning_progress WHERE username = ?',
        [username]
      );
      const completedMaterials = completedMaterialsRows.map(r => r.material_id);

      // 2. Ambil statistik quiz
      const quizStats = await db.get(
        `SELECT COUNT(id) as total_attempts, AVG(score) as avg_score, SUM(correct_answers) as total_correct
         FROM quiz_scores WHERE username = ?`,
        [username]
      );

      // 3. Ambil statistik troubleshooting
      const troubleshootingStats = await db.get(
        `SELECT COUNT(id) as total_attempts, SUM(is_success) as total_success
         FROM troubleshooting_logs WHERE username = ?`,
        [username]
      );

      // 4. Ambil 5 quiz terbaru
      const recentQuizzes = await db.query(
        `SELECT category, score, correct_answers, total_questions, completed_at
         FROM quiz_scores WHERE username = ? ORDER BY completed_at DESC LIMIT 5`,
        [username]
      );

      res.json({
        username,
        completedMaterials,
        quiz: {
          attempts: quizStats.total_attempts || 0,
          averageScore: Math.round(quizStats.avg_score || 0),
          totalCorrect: quizStats.total_correct || 0
        },
        troubleshooting: {
          attempts: troubleshootingStats.total_attempts || 0,
          success: troubleshootingStats.total_success || 0,
          successRate: troubleshootingStats.total_attempts > 0 
            ? Math.round((troubleshootingStats.total_success / troubleshootingStats.total_attempts) * 100)
            : 0
        },
        recentQuizzes
      });
    } catch (err) {
      console.error('Error fetching user stats:', err.message);
      res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
    }
  },

  // ================= ADMIN CONTROLLERS =================
  
  // Ambil semua progres dan nilai seluruh siswa untuk Guru/Admin
  getAllStudentsStats: async (req, res) => {
    try {
      const users = await db.query('SELECT * FROM users ORDER BY username ASC');
      const statsList = [];

      for (const user of users) {
        // Jumlah materi selesai
        const progressCountResult = await db.get(
          'SELECT COUNT(id) as count FROM learning_progress WHERE username = ?',
          [user.username]
        );

        // Nilai rata-rata & jumlah percobaan kuis
        const quizStats = await db.get(
          `SELECT COUNT(id) as attempts, AVG(score) as avg_score
           FROM quiz_scores WHERE username = ?`,
          [user.username]
        );

        // Statistik Troubleshooting
        const troubleshootStats = await db.get(
          `SELECT COUNT(id) as attempts, SUM(is_success) as success
           FROM troubleshooting_logs WHERE username = ?`,
          [user.username]
        );

        statsList.push({
          username: user.username,
          class_name: user.class_name,
          created_at: user.created_at,
          completedMaterialsCount: progressCountResult.count || 0,
          quizAttempts: quizStats.attempts || 0,
          quizAverageScore: Math.round(quizStats.avg_score || 0),
          troubleshootAttempts: troubleshootStats.attempts || 0,
          troubleshootSuccess: troubleshootStats.success || 0
        });
      }

      res.json(statsList);
    } catch (err) {
      console.error('Error fetching all students stats:', err.message);
      res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
    }
  },

  // Reset / Hapus permanen data siswa
  resetStudentData: async (req, res) => {
    try {
      const { username } = req.body;
      if (!username) {
        return res.status(400).json({ error: 'Username diperlukan untuk reset data.' });
      }

      // Hapus data berelasi di tabel lainnya
      await db.run('DELETE FROM learning_progress WHERE username = ?', [username]);
      await db.run('DELETE FROM quiz_scores WHERE username = ?', [username]);
      await db.run('DELETE FROM troubleshooting_logs WHERE username = ?', [username]);
      await db.run('DELETE FROM users WHERE username = ?', [username]);

      res.json({ message: `Data belajar siswa '${username}' berhasil di-reset!` });
    } catch (err) {
      console.error('Error resetting student data:', err.message);
      res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
    }
  }
};

module.exports = statsController;
