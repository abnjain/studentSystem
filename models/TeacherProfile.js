const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TeacherProfile = sequelize.define('TeacherProfile', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  subjects: {
    type: DataTypes.JSON,   // List of subject IDs
    allowNull: false
  },
  plan_cost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  availability: {
    type: DataTypes.JSON,
    allowNull: true
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  photo_url: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = TeacherProfile;
