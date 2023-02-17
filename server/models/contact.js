// Mohamed Erwa
// 301282137
// COMP229 Sec004
// 17/2/2023

let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
    {
        collection: "contact_list"
    });

module.exports = mongoose.model('Contact', contactModel);