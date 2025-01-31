require('dotenv').config();
const express = require('express');

const router = express.Router();
const dashboardController = require('../controller/dashboard');
const { setupKinde, protectRoute, getUser } = require("@kinde-oss/kinde-node-express");





router.get('/', getUser, dashboardController.getVideos);



module.exports = router;