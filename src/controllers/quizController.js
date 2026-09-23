const db = require('../config/database');

const quizController = {
  // Simpan skor quiz baru
  saveScore: async (req, res) => {
    try {
      const { username, category, score, correct_answers, total_questions } = req.body;
      if (!username || !category || score === undefined || correct_answers === undefined || !total_questions) {
        return res.status(400).json({ error: 'Data input tidak lengkap.' });
      }

      // Pastikan user ada di db, jika tidak buat baru
      await db.run('INSERT OR IGNORE INTO users (username) VALUES (?)', [username]);

      const result = await db.run(
        `INSERT INTO quiz_scores (username, category, score, correct_answers, total_questions)
         VALUES (?, ?, ?, ?, ?)`,
        [username, category, score, correct_answers, total_questions]
      );

      res.status(201).json({ message: 'Skor quiz berhasil disimpan!', id: result.id });
    } catch (err) {
      console.error('Error saving score:', err.message);
      res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
    }
  },

  // Ambil leaderboard berdasarkan kategori atau secara global
  getLeaderboard: async (req, res) => {
    try {
      const { category } = req.query;
      let sql = '';
      let params = [];

      if (category) {
        sql = `
          SELECT username, MAX(score) as max_score, SUM(correct_answers) as total_correct, SUM(total_questions) as total_questions, COUNT(id) as attempts
          FROM quiz_scores
          WHERE category = ?
          GROUP BY username
          ORDER BY max_score DESC, total_correct DESC
          LIMIT 10
        `;
        params = [category];
      } else {
        sql = `
          SELECT username, AVG(score) as average_score, SUM(correct_answers) as total_correct, SUM(total_questions) as total_questions, COUNT(id) as total_attempts
          FROM quiz_scores
          GROUP BY username
          ORDER BY average_score DESC, total_correct DESC
          LIMIT 10
        `;
      }

      const leaderboard = await db.query(sql, params);
      res.json(leaderboard);
    } catch (err) {
      console.error('Error fetching leaderboard:', err.message);
      res.status(500).json({ error: 'Terjadi kesalahan pada server.' });
    }
  }
};

module.exports = quizController;
