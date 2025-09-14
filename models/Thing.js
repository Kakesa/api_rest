const mongoose = require('mongoose'); // Import mongoose for MongoDB interactions

const thingSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    userId: { type: String, required: true }
});

module.exports = mongoose.model('Thing', thingSchema);