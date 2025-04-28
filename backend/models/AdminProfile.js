const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const AdminProfile = sequelize.define('AdminProfile', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  full_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = AdminProfile;
