const express = require('express');
const fs = require('fs');
const path = require('path');
const Game = require('../models/Game'); // Import the Game model

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

// Function to save updated games data
const saveGamesData = (gamesData) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.join(__dirname, filePath), JSON.stringify(gamesData, null, 2), (err) => {
      if (err) {
        console.error('Error saving games JSON file:', err);
        return reject({ error: 'Error saving games data' });
      }
      resolve();
    });
  });
};
// Fetch Both JSON and MongoDB Data
router.get('/games', async (req, res) => {
  try {
    // Get the date from the query parameters
    const date = req.query.date;
    console.log("Query date:", date);

    let query = {};
    if (date) {
      query.date = date;
    }

    // Fetch games from MongoDB
    const mongoGames = await Game.find(query);

    // Fetch games from JSON file
    const jsonGamesData = await readGamesData();

    let jsonGames = [];
    if (jsonGamesData.seasons && jsonGamesData.seasons.length > 0) {
      jsonGamesData.seasons.forEach(season => {
        season.weeks.forEach(weekData => {
          weekData.dates.forEach(dateData => {
            if (!date || dateData.date === date) {
              jsonGames.push({
                date: dateData.date,
                games: dateData.games
              });
            }
          });
        });
      });
    }

    // Combine MongoDB and JSON games
    const combinedGames = [...mongoGames, ...jsonGames];

    res.json(combinedGames.length > 0 ? combinedGames : []);
  } catch (error) {
    console.error("Error fetching games:", error);
    res.status(500).json({ error: 'Unable to fetch games' });
  }
});




// POST route to add a new game
router.post('/games', async (req, res) => {
  try {
    const newGameData = req.body; // Get game data from request body
    const newGame = new Game(newGameData); // Create a new game instance

    await newGame.save(); // Save the new game to the database
    res.status(201).json(newGame); // Respond with the created game
  } catch (error) {
    console.error("Error adding new game:", error);
    res.status(400).json({ error: 'Unable to add game' }); // Handle errors
  }
});

// DELETE route to delete a game
router.delete('/games', async (req, res) => {
  const { date, homeTeam, awayTeam } = req.body; // Extract date and teams from request body

  try {
    const gamesData = await readGamesData();

    // Find the correct date entry
    let gameFound = false;

    if (gamesData.seasons && gamesData.seasons.length > 0) {
      gamesData.seasons.forEach(season => {
        season.weeks.forEach(week => {
          week.dates.forEach(dateData => {
            if (dateData.date === date) {
              // Filter out the game to delete
              const initialLength = dateData.games.length;
              dateData.games = dateData.games.filter(g =>
                g.homeTeam !== homeTeam || g.awayTeam !== awayTeam
              );

              // Check if a game was actually removed
              if (dateData.games.length < initialLength) {
                gameFound = true; // Mark that a game was found and removed
              }
            }
          });
        });
      });
    }

    if (gameFound) {
      await saveGamesData(gamesData); // Save updated data
      return res.status(200).json({ message: 'Game deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Game not found' });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
