// Import the database configuration from an external file
const dbConfig = require('../config/dbConfig');

// Import Sequelize and DataTypes from the sequelize package
const { Sequelize, DataTypes } = require('sequelize');

// Initialize a Sequelize instance (connection to the database)
const sequelize = new Sequelize(
    dbConfig.DB,        // Database name
    dbConfig.USER,      // Database username
    dbConfig.PASSWORD,  // Database password
    {
        host: dbConfig.HOST,       // Database host (e.g., localhost)
        dialect: dbConfig.dialect, // Type of database (e.g., MySQL, PostgreSQL, etc.)
        operatorsAliases: false    // Disables aliasing for security reasons (not needed in modern Sequelize)
    }
);

// Test the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Database connection successful...'); // If connection is successful
    })
    .catch(err => {
        console.log('Error: ' + err); // If an error occurs, log the error message
    });

// Create an object to store Sequelize-related properties and models
const db = {};

// Store Sequelize constructor and instance in the `db` object
db.Sequelize = Sequelize;  // Storing the Sequelize class itself
db.sequelize = sequelize;  // Storing the actual database connection instance

// Import the 'students' model and initialize it with Sequelize
db.students = require('./studentModel')(sequelize, DataTypes);
// db.courses = require('./courseModel')(sequelize, DataTypes);
// db.users = require('./authModel')(sequelize, DataTypes);

// Sync the database (create tables if they don't exist)
db.sequelize.sync({ force: false })  // `force: false` prevents re-creating tables and losing data
    .then(() => {
        console.log('re-sync done'); // Logs when sync is successful
    });

//db.courses.hasOne(db.students)
db.students.belongsTo(db.courses, { foreignKey: "course_id"})
// Export the db object so other parts of the app can use it
module.exports = db;
