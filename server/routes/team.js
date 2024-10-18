const express = require('express');
const Team = require('../models/Team'); // Import the Team model
const router = express.Router();

// POST route to add a new team
router.post('/', async (req, res) => {
  try {
    const newTeamData = req.body; // Get team data from request body
    const newTeam = new Team(newTeamData); // Create a new team instance

    await newTeam.save(); // Save the new team to the database
    res.status(201).json(newTeam); // Respond with the created team
  } catch (error) {
    console.error("Error adding new team:", error);
    res.status(400).json({ error: 'Unable to add team' }); // Handle errors
  }
});

// GET route to fetch all teams
router.get('/', async (req, res) => {
  try {
    const teams = await Team.find(); // Fetch all teams from MongoDB
    res.status(200).json(teams);
  } catch (error) {
    console.error("Error fetching teams:", error);
    res.status(500).json({ error: 'Unable to fetch teams' });
  }
});

module.exports = router;
