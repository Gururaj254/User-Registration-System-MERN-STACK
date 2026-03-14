const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // No username or password is required for local MongoDB by default
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`✅ Local MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Local Connection Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;