const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dashboardRouter = require('./src/routes/dashboard');
const { setupKinde, jwtVerify, protectRoute } = require("@kinde-oss/kinde-node-express");
const axios = require('axios');
dotenv.config();

const config = {
    clientId: process.env.KINDE_CLIENT_ID,
    issuerBaseUrl: process.env.KINDE_ISSUER_BASE_URL,
    siteUrl: process.env.SITE_URL,
    secret: process.env.SECRET,
    redirectUrl: process.env.REDIRECT_URI,
    postLogoutRedirectUrl: process.env.POST_LOGOUT_REDIRECT_URL,
    unAuthorisedUrl: "http://localhost:3000/unauthorised",
    scope: process.env.SCOPE,
    grantType: "AUTHORIZATION_CODE",
}



// Load environment variables
dotenv.config();

require('./src/config/db');
const app = express();
setupKinde(config, app);





// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(protectRoute);

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the backend API' });
});

// Add a simple health check endpoint
app.get('/health', (req, res) => res.status(200).send('OK'));
app.get('/ping', (req, res) => res.status(200).send('pong'));

app.use(require('./src/utils/response/responseHandler'));
app.use('/dashboard', dashboardRouter);

// Start server



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Keep-alive mechanism with multiple endpoints and randomization
const keepServerAlive = () => {
    // Array of endpoints to ping
    const endpoints = ['/', '/health', '/ping'];

    // Random interval between 4-5 minutes (avoiding exact 5-minute intervals)
    const getRandomInterval = () => (4 * 60 * 1000) + Math.random() * (60 * 1000);

    // Ping random endpoint
    const pingServer = () => {
        const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
        const serverUrl = process.env.SERVER_URL || 'http://localhost:5000';

        axios.get(`${serverUrl}${endpoint}`)
            .catch(error => {
                console.log(`Keep-alive request to ${endpoint} failed:`, error.message);
            });

        // Schedule next ping with random interval
        setTimeout(pingServer, getRandomInterval());
    };

    // Start the first ping
    pingServer();
};


keepServerAlive();