const express = require('express');
const router = express.Router();
const { registerUser, checkUser } = require('../controller/user');

router.post('/register', registerUser);
router.post('/check', checkUser);

module.exports = router;