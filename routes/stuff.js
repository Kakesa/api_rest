 const express = require('express'); // Import the express module to create an Express application
 const router = express.Router(); // Create a router instance
 const auth = require('../middleware/auth'); // Import the authentication middleware
 const multer = require('../middleware/multer-config'); // Import the multer middleware for handling file uploads

 const staffController = require('../controllers/stuff'); // Import the stuff controller


 // Define a simple route for the root path
router.post('/', auth, multer, staffController.createThing);
// Define a route to get a single thing by its ID
router.get('/:id', auth, staffController.getOneThing);

// Define a route to update a thing by its ID
router.put('/:id', auth, multer, staffController.modifyThing);
// Define a route to delete a thing by its ID
router.delete('/:id', auth, staffController.deleteThing);
// Define a route to get all things from the database
router.get('/', auth, staffController.getAllThings);
// Define a route to get all things created by the authenticated user
router.get('/mythings', auth, staffController.getMyThings);

module.exports = router; // Export the router instance for use in other files