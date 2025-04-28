const express = require('express');
const { register, login, refreshToken, logout } = require('../controllers/authController');
const { body, validationResult } = require('express-validator');

const router = express.Router();

// Middleware to handle validation errors
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

// Register Route
router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    validate, // <-- Important to validate before reaching controller
  ],
  register
);

// Login Route
router.post(
  '/login',
  [
    body('email', 'Email is required').isEmail(),
    body('password', 'Password is required').notEmpty(),
    validate, // <-- Important here too
  ],
  login
);

// Refresh Token Route
router.post('/refresh', refreshToken);

// Logout Route
router.post('/logout', logout);

module.exports = router;
