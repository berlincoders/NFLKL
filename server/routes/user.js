const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Register a new user
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    user = new User({
      username,
      email,
      password: hashedPassword, // Store the hashed password
    });

    await user.save();

    // Generate a JWT token for the user
    const payload = { userId: user.id };
    const token = jwt.sign(payload, "yourSecretKey", { expiresIn: "1h" });

    res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (error) {
    console.error("Registration error:", error); // Log the error for debugging
    res.status(500).json({ message: "Server error", error: error.message }); // Send back the error message
  }
});

// Get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.status(200).json(users); // Return users as a JSON response
  } catch (error) {
    console.error("Fetching users error:", error); // Log the error for debugging
    res.status(500).json({ message: "Server error", error: error.message }); // Send back the error message
  }
});

// Get a user by ID
router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Fetching user by ID error:", error); // Log the error for debugging
    res.status(500).json({ message: "Server error", error: error.message }); // Send back the error message
  }
});

// Export the router
module.exports = router;
