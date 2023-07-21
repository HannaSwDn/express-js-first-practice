const express = require('express');

// Here, we are creating a router object
const router = express.Router();

// Creating a user route
router.get('/', (req, res) => {
    console.log('Users route');
    res.send('User list');

});

router.get('/new', (req, res) => {
    console.log('New user route');
    res.send('New user form');
});

module.exports = router;