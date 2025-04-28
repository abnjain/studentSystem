const express = require('express');
const router = express.Router();
const leaderboardController = require('../controllers/leaderboardController');
const { verifyToken } = require('../middlewares/authMiddlewares');

router.get('/', verifyToken, leaderboardController.getLeaderboard);

module.exports = router;
