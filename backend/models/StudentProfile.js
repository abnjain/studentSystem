module.exports = (sequelize, DataTypes) => {
const StudentProfile = sequelize.define('StudentProfile', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  membership: {
    type: DataTypes.ENUM('Free', 'Basic', 'Premium'),
    allowNull: true,
  },
  billing_info: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  notification_preferences: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'StudentProfile',
  timestamps: false, // Disable Sequelize's automatic timestamps
});
return StudentProfile;
};
