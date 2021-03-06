const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController.js');

//Authorization related routes
router.post('/signup', usersController.create);

router.post('/signin', usersController.start);

module.exports = router;