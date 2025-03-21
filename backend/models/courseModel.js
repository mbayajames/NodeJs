module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define("course", {
        course_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        instructor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Course;
};