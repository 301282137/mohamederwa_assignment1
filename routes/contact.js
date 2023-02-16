let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect to contact model
let contact = require('../models/contact');

// Get Route for the contact list 
router.get('/', (req, res, next) => {
    contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        } else {
            console.log(contactList);

            res.render('contact_info', { title: 'Contact List', ContactList: contactList});
        }
    });
});

module.exports = router;