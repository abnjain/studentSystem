module.exports = (sequelize, DataTypes) => {
const Token = sequelize.define('Token', {
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  token: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  expires_at: {
    type: DataTypes.DATE,
    allowNull: false
  }
});
return Token;
}