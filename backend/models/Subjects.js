module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    difficulty_level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    tableName: 'subjects',
    timestamps: true, // Adds createdAt and updatedAt fields
  });

  return Subject;
};