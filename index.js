const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dashboardRouter = require('./src/routes/dashboard');


// Load environment variables
dotenv.config();

const app = express();



// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the backend API' });
});

app.use(require('./src/utils/response/responseHandler'));
app.use('/dashboard', dashboardRouter);

// Start server

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
