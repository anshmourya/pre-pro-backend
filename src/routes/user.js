const express = require('express');
const router = express.Router();
const { registerUser, checkUser, getMe, updateMe } = require('../controller/user');
const { getUser, } = require("@kinde-oss/kinde-node-express");
router.post('/register', registerUser);
router.post('/check', checkUser);
router.get('/get/me', getUser, getMe);
router.patch('/update/me', getUser, updateMe);
module.exports = router;