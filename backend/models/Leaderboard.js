const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Leaderboard = sequelize.define('Leaderboard', {
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  test_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  score: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  rank: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Leaderboard;
