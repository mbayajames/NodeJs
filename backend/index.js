// Import the Express framework for building web applications
const express = require('express');

// Import CORS middleware to handle cross-origin requests
const cors = require('cors');

// Load environment variables from a .env file (if available)
require('dotenv').config();

// Create an Express application instance
const app = express();

// CORS options - allows requests from 'http://localhost:3000' (React frontend)
var corOptions = {
    origin: 'http://localhost:3000'
};

// Use CORS middleware with the specified options
app.use(cors(corOptions));

// Middleware to parse incoming JSON requests
app.use(express.json());

// Middleware to parse URL-encoded data (from HTML forms)
app.use(express.urlencoded({ extended: true }));

// Set the server port from an environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
