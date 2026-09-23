const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const statsController = require('../controllers/statsController');

// Route login & tracking progress
router.post('/login', statsController.loginOrCreateUser);
router.post('/progress', statsController.saveProgress);
router.get('/stats', statsController.getUserStats);

// Route quiz
router.post('/quiz/score', quizController.saveScore);
router.get('/quiz/leaderboard', quizController.getLeaderboard);

// Route troubleshooting
router.post('/troubleshooting/log', statsController.saveTroubleshootingLog);

// Route khusus Guru / Admin
router.get('/admin/students', statsController.getAllStudentsStats);
router.post('/admin/reset', statsController.resetStudentData);

module.exports = router;
