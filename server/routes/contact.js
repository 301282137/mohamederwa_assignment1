let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { create } = require('../models/contact');

// Connect to contact model
let contact = require('../models/contact');

// Get Route for the contact list (READ)
router.get('/', (req, res, next) => {
    contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        } else {
            console.log(contactList);

            res.render('contact/list', { title: 'Contact List', ContactList: contactList });
        }
    });
});

// Get Route for displaying add page (CREATE)
router.get('/add', (req, res, next) => {
    res.render('contact/add', { title: 'Add Contact' });
});

// Post Route for processing add page (UPDATE)
router.post('/add', (req, res, next) => {
    let newContact = Contact({
        "contactName": req.body.name,
        "contactNumber": req.body.number,
        "email": req.body.email
    });

    Contact.create(newContact, (err, Contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // Refresh contact list
            res.redirect('contact-list');
        }
    });
});

// Get Route for displaying Edit page (CREATE)
router.get('/edit/', (req, res, next) => {
    let id = req.params.id;

    contact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('contact/edit', { title: 'Edit Contact', contact: contactToEdit });
        }
    })
});

// Post Route for processing Edit page (UPDATE)
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedContact = new contact({
        "_id": id,
        "contactName": req.body.name,
        "contactNumber": req.body.number,
        "email": req.body.email
    });

    Contact.updateOne({ _id: id }, updatedContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // Refresh contact list
            res.redirect('contact-list');
        }
    })
});

// Get to perform Contact deletion (DELETE)
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            // Refresh contact list
            res.redirect('contact-list');
        }
    })
});

module.exports = router;