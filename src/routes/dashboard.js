require('dotenv').config();
const express = require('express');

const router = express.Router();
const dashboardController = require('../controller/dashboard');
const { getUser } = require("@kinde-oss/kinde-node-express");





router.get('/', getUser, dashboardController.getVideos);
router.get('/video-details', dashboardController.getVideoDetails);


module.exports = router;