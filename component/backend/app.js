// Integrating routes into Express app (app.js)
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./user.routes'); // Import the user routes

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/UserDataDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware to parse JSON requests
app.use(express.json());

// Use the user routes
app.use('/api/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
