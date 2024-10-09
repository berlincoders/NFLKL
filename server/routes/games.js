const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Adjust the path based on your project structure
const filePath = '../../src/api/nfl_2024.json'; // Correct path to the JSON file

// Function to read games data
const readGamesData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, filePath), 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading games JSON file:', err);
        return reject({ error: 'Error reading games data' });
      }
      try {
        const gamesData = JSON.parse(data);
        console.log("Parsed games data:", gamesData);
        resolve(gamesData);
      } catch (parseError) {
        console.error('Error parsing games data:', parseError);
        reject({ error: 'Error parsing games data' });
      }
    });
  });
};

// Route to get games with optional filtering
router.get('/games', async (req, res) => {
  try {
    const gamesData = await readGamesData();

    // Get the date from the query parameters
    const date = req.query.date;

    let filteredGames = [];

    // Check if the data contains weeks
    if (gamesData.seasons && gamesData.seasons.length > 0) {
      // Iterate over seasons and weeks to find games
      gamesData.seasons.forEach(season => {
        season.weeks.forEach(weekData => {
          weekData.dates.forEach(dateData => {
            // Filter by date if specified
            if (!date || dateData.date === date) {
              filteredGames.push({
                date: dateData.date,
                games: dateData.games
              });
            }
          });
        });
      });
    }

    // Send filtered games or an empty array if no games found for the date
    res.json(filteredGames.length > 0 ? filteredGames : []);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
