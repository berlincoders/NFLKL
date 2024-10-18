const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const userRoutes = require('./routes/user'); // User routes
const gameRoutes = require("./routes/games"); // Game routes
const teamRoutes = require('./routes/team');  // Team routes

const app = express();
const PORT = process.env.PORT || 5000; // Express will run on port 5000

// Middleware to parse JSON
app.use(express.json());
app.use(cors()); // Use CORS middleware

// Connect to MongoDB
mongoose.connect('mongodb://localhost/NFLKL')
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log(err));

// Use routes
app.use('/api', userRoutes); // Mount user routes under /api
app.use("/api", gameRoutes); // Mount game routes under /api
app.use('/api/teams', teamRoutes); // Mount team routes under /api/teams

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
