const mongoose = require('mongoose');// Import the mongoose library

// Define the User schema with email and password fields
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    firstName: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Apply the uniqueValidator plugin to userSchema
module.exports = mongoose.model('User', userSchema);
