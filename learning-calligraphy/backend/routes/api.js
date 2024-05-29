const express = require('express');
const router = express.Router();
const User = require('../models/User');
const auth = require('../controllers/auth');
const authMiddleware = require('../middleware/authMiddleware');

// Protected route
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

// Register User
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).send('User registered');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Login User
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).send('Invalid credentials');
    }
    res.send('Login successful');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
