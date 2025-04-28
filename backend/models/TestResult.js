const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TestResult = sequelize.define('TestResult', {
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
  feedback: {
    type: DataTypes.TEXT,
    allowNull: true
  }
});

module.exports = TestResult;
