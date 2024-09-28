const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user'); // Adjust the path if necessary
const gameRoutes = require("./routes/games");

const app = express();
const PORT = process.env.PORT || 5000; // Now express should run in port 5000

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/NFLKL', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log(err));

// Use user routes
app.use('/api', userRoutes); // This mounts the routes under /api
app.use("/api", gameRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
