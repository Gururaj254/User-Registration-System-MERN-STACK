const express = require('express');
const { authUser, registerUser } = require('../controllers/userController');
const router = express.Router();

router.post('/', registerUser); // POST /api/users
router.post('/login', authUser); // POST /api/users/login

module.exports = router;