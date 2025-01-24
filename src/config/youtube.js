require('dotenv').config();
const { YOUTUBE_KEY } = process.env;

const { google } = require('googleapis');
const youtube = google.youtube({
    version: 'v3',
    auth: YOUTUBE_KEY
});

module.exports = youtube;