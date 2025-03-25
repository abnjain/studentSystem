const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const StudentProfile = sequelize.define('StudentProfile', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  membership: {
    type: DataTypes.ENUM('Free', 'Basic', 'Premium'),
    allowNull: false
  },
  billing_info: {
    type: DataTypes.JSON,
    allowNull: true
  },
  notification_preferences: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  freezeTableName: true   // Ensures table name matches the model name
});

module.exports = StudentProfile;
