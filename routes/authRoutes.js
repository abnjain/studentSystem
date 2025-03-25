const express = require('express');
const { register, login, refreshToken, logout } = require('../controllers/authController');
const { body } = require('express-validator');

const router = express.Router();

// Register Route
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
  ],
  register
);

// Login Route
router.post('/login', login);

// Refresh Token Route
router.post('/refresh', refreshToken);

// Logout Route
router.post('/logout', logout);

module.exports = router;
