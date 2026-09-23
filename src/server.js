require('dotenv').config();
const express = require('express');
const path = require('path');
const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware parsing JSON & form-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sajikan file statis dari folder public
app.use(express.static(path.join(__dirname, '../public')));

// Gunakan API routes
app.use('/api', apiRouter);

// Fallback route ke index.html untuk Single Page Application routing (jika user merefresh path lain)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(` FIBER OPTIC LEARNING & CALCULATOR SERVER`);
  console.log(` Dijalankan pada: http://localhost:${PORT}`);
  console.log(` Lingkungan: ${process.env.NODE_ENV || 'development'}`);
  console.log(`==================================================`);
});
