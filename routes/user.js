const express = require('express'); // Import the express module to create an Express application
const router = express.Router(); // Create a router instance
const userController = require('../controllers/user'); // Import the user controller

// Define a route for user signup
router.post('/signup', userController.signup);
// Define a route for user login
router.post('/login', userController.login);





module.exports = router; // Export the router instance for use in other filesconst userController = require('../controllers/user'); // Import the user controller