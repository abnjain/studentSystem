const Leaderboard = require('../models/Leaderboard');

// Get Leaderboard
exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Leaderboard.findAll({
      order: [['score', 'DESC']]
    });
    res.status(200).json(leaderboard);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
