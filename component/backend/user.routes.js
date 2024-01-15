// Routes handling user data (user.routes.js)
const express = require('express');
const router = express.Router();
const User = require('./user.model'); // Import the User model

// Route to handle form data submission
router.post('/signup', async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    // Create a new user instance using the User model
    const newUser = new User({
      name,
      email,
      phone,
      password,
    });

    // Save the user data to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;