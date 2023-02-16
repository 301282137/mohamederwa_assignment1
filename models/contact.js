let mongoose = require('mongoose');

// Create a model class
let contactModel = mongoose.Schema({
    contactName: String,
    contactNumber: String,
    email: String
}, {
    collection: "contactList"
});

module.exports = mongoose.model('Contact', contactModel);