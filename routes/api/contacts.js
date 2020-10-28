const express = require('express');
const router = express.Router();
var contacts = require('../../Contacts');

// Hello message
router.get('/whos-there', (req,res) => {

    res.send('Hi Trax! This is Shir Moalem.');
});

// Gets all contacts
router.get('/get-all-contacts', (req,res) => res.json(contacts));

// Gets contact by name
router.get('/get-contact-by-name/:id', (req,res) => {

    let reqName = req.params.id;
    const found = contacts.some(contact => contact.fullName === reqName);// tests whether at least one element in the array passes the test

    if(found)
    {
        res.json(contacts.filter(contact => contact.fullName === reqName));
    }
    else
    {
        res.status(400).json({message: `Contact ${reqName} not found`});// Error message
    }
});

//Add a new contact
router.post('/add-new-contact' ,(req, res) => {
    const newContact = {
        fullName: req.body.fullName,
        email:    req.body.email,
        phone:    req.body.phone
    }

    if(!newContact.fullName || !newContact.email || !newContact.phone)//check if all the detailes are sent in the req
    {
        return res.status(400).json({message: 'Please include fullName, email and phone number'});// Error message
    }

    contacts.push(newContact);
    res.json(contacts);
});

module.exports = router;