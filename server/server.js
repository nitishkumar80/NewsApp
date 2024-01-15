const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Connect to MongoDB (Make sure MongoDB is running locally or hosted)


// MongoDB connection URI
const mongoURI = "mongodb://localhost:27017/loginAppDB"; // Your MongoDB connection URI

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Event listeners for database connection
db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB!");
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Close the MongoDB connection when the Node.js app is terminated
process.on("SIGINT", () => {
  db.close(() => {
    console.log("MongoDB connection closed");
    process.exit(0);
  });
});


// Create a schema for users
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to handle user signup
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Received data:");
  console.log("Email:", email);
  console.log("Password:", password);
  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).json({ message: "User signed up successfully" });
  } catch (err) {
    res.status(500).json({ error: "Could not sign up user" });
  }
});

const newUser = new User({
    email: "example@example.com", // Replace with actual email
    password: "password123", // Replace with actual password (ideally hashed)
  });

  newUser.save()
  .then((result) => {
    console.log("User saved:", result);
  })
  .catch((error) => {
    console.error("Error saving user:", error);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
