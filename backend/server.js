const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./config/db'); // Destructured for MySQL/Sequelize object
const userRoutes = require('./routes/userRoutes');

dotenv.config();

// Initialize MySQL Connection
connectDB(); 

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); 

// Routes
app.use('/api/users', userRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('API is running safely on MySQL...');
});

// 404 Error Handler
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

// Global Error Handler
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

// Use Port 5002 as per your new .env setting
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});