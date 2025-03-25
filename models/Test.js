const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Test = sequelize.define('Test', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  subject_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  teacher_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  questions: {
    type: DataTypes.JSON,    // Array of questions
    allowNull: false
  }
});

module.exports = Test;
