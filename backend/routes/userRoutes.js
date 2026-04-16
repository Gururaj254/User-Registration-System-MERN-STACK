const express = require('express');
const router = express.Router();

// 1. Import all controller functions at once
const { 
    registerUser, 
    authUser, 
    getAllUsers, 
    deleteUser,
    forgotPassword, // Add these for your new feature
    resetPassword 
} = require('../controllers/userController');

// 2. Import middleware
const { protect, admin } = require('../middleware/authMiddleware');

// --- PUBLIC ROUTES ---
router.post('/', registerUser);
router.post('/login', authUser);
router.post('/forgotpassword', forgotPassword); // NEW
router.put('/resetpassword', resetPassword);   // NEW

// --- ADMIN ONLY ROUTES ---
// Only logged-in Admins can get all users or delete a user
router.get('/', protect, admin, getAllUsers);
router.delete('/:id', protect, admin, deleteUser);

module.exports = router;