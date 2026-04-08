const express = require('express');

const contact = require('./contact.routes');




const router = express.Router();

// API routes
router.use('/contact', contact);



module.exports = router;