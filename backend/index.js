// Import the Express framework for building web applications
const express = require('express');

// Import CORS middleware to handle cross-origin requests
const cors = require('cors');


const studentRoute = require("./routes/studentRoutes");
const courseRoute = require("./routes/courseRoutes");
// const authRoute = require("./routes/authRoute");


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

app.use('/Student', studentRoutes);
app.use('/Course', courseRoutes);
// app.use('/auth', authRoute);

// Set the server port from an environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// handling 404 error
// app.use(async(req, res, next) => {
//     next(createError.NotFound())
// })

// Error handler
// app.use((err, req, res, next) => {
//     res.status(err.status || 500)
//     res.send({
//         error:{
//             status: err.status || 500,
//             message: err.message
//         }
//     })
// }) 

//ERROR HANDLING MIDDLEWARE
app.use((err, req, res, next) => {
    if(err.status === 401) {
        res.status(401).send({
            error: {
                status: 401,
                message: "Unauthorized: Invalid username/password"
            }
        })
    } else {
        //HANDLE OTHER ERRORS
        res.status(err.status || 500).send({
            error: {
                status: err.status || 500,
                message: err.message || "Internal Server Error"
            }
        });
    }
})


// Start the Express server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
