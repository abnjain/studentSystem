const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const StudyMaterial = sequelize.define('StudyMaterial', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  category: {
    type: DataTypes.ENUM('Notes', 'Exam Questions', 'Flashcards', 'Past Papers'),
    allowNull: false
  },
  level: {
    type: DataTypes.ENUM('GCSE', 'IGCSE'),
    allowNull: false
  },
  file_url: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = StudyMaterial;
