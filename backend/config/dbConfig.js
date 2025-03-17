// Export an object containing database configuration settings
module.exports = {
    // The database host (e.g., 'localhost' or a remote server address)
    HOST: process.env.HOST,

    // The username to connect to the database
    USER: process.env.USER,

    // The password for the database user
    PASSWORD: process.env.PASSWORD,

    // The name of the database
    DB: process.env.DATABASE,

    // Specifies the type of database being used (MySQL in this case)
    dialect: 'mysql'
};
