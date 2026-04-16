const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Crucial: Load dotenv again here to be 100% sure the variables are ready
dotenv.config();

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE, // identity_manager_db
  process.env.MYSQL_USER,     // root
  process.env.MYSQL_PASSWORD, // Gururaj@581
  {
    host: process.env.MYSQL_HOST || '127.0.0.1',
    dialect: 'mysql',
    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ MySQL Connected successfully.');
    
    await sequelize.sync({ alter: true }); 
    console.log('✅ Database tables synced.');
  } catch (error) {
    // This will now show us exactly what user it's trying to use
    console.error(`❌ MySQL Connection Error: ${error.message}`);
    console.log(`Debug Info: User is "${process.env.MYSQL_USER}" on DB "${process.env.MYSQL_DATABASE}"`);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };