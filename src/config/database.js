const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = process.env.DB_PATH || './database.sqlite';
const absoluteDbPath = path.isAbsolute(dbPath) ? dbPath : path.resolve(process.cwd(), dbPath);

const db = new sqlite3.Database(absoluteDbPath, (err) => {
  if (err) {
    console.error('Gagal menghubungkan ke database SQLite:', err.message);
  } else {
    console.log('Terhubung ke database SQLite di:', absoluteDbPath);
    initializeTables();
  }
});

function initializeTables() {
  db.serialize(() => {
    // Tabel Pengguna
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE NOT NULL,
      class_name TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
      if (err) console.error('Gagal membuat tabel users:', err.message);
    });

    // Tabel Skor Quiz
    db.run(`CREATE TABLE IF NOT EXISTS quiz_scores (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      category TEXT NOT NULL,
      score INTEGER NOT NULL,
      correct_answers INTEGER NOT NULL,
      total_questions INTEGER NOT NULL,
      completed_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
      if (err) console.error('Gagal membuat tabel quiz_scores:', err.message);
    });

    // Tabel Progress Pembelajaran
    db.run(`CREATE TABLE IF NOT EXISTS learning_progress (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      material_id TEXT NOT NULL,
      completed INTEGER DEFAULT 1,
      completed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(username, material_id)
    )`, (err) => {
      if (err) console.error('Gagal membuat tabel learning_progress:', err.message);
    });

    // Tabel Log Troubleshooting
    db.run(`CREATE TABLE IF NOT EXISTS troubleshooting_logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL,
      case_id TEXT NOT NULL,
      is_success INTEGER NOT NULL,
      completed_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`, (err) => {
      if (err) console.error('Gagal membuat tabel troubleshooting_logs:', err.message);
    });
  });
}

// Helper query untuk database dengan Promise
const dbHelper = {
  query: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.all(sql, params, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  },

  get: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.get(sql, params, (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  },

  run: (sql, params = []) => {
    return new Promise((resolve, reject) => {
      db.run(sql, params, function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, changes: this.changes });
      });
    });
  },
  
  dbInstance: db
};

module.exports = dbHelper;
