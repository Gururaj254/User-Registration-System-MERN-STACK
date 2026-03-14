const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/userController');

// The Register.jsx 'POST /' hits this:
router.post('/', registerUser); 
// The Login.jsx 'POST /login' hits this:
router.post('/login', authUser);

module.exports = router;