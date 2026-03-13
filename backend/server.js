const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes'); // 1. Import Routes

dotenv.config();
connectDB(); 

const app = express();

app.use(cors());
app.use(express.json()); 

// 2. Define API Routes
app.use('/api/users', userRoutes);

// Test Route
app.get('/', (req, res) => {
    res.send('API is running safely...');
});

// 3. Global Error Handling Middleware (The "Scalable" touch)
app.use((req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
});

app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));