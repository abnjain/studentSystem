module.exports = (sequelize, DataTypes) => {
const TeacherProfile = sequelize.define('TeacherProfile', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    subjectSpecialization: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hireDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
}, {
    tableName: 'teacher_profiles',
    timestamps: true, // Adds createdAt and updatedAt fields
});
return TeacherProfile;
}