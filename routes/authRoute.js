const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();
const {User} = require('../models');

router.post('signup', signup);
router.post('/login', login);

module.exports = router;
