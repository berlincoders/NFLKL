import React, { useEffect, useState, useCallback } from 'react';
import DateBlock from './components/DateBlock';
import ReactPlayer from 'react-player';
import Footer from './components/Footer'; // Adjust the path if necessary
import './App.css';

export const App = () => {
  const [gamesForNextDays, setGamesForNextDays] = useState([]);

  // Function to get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
  };

  // Function to fetch all games from the API
  const fetchGamesData = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:5000/api/games');
      const data = await response.json();
      console.log("Fetched games data:", data); // Debugging line

      const today = getTodayDate();

      // Filter games starting from today's date
      const futureGames = data.filter(game => game.date >= today);

      // Get unique available dates starting from today
      const uniqueDates = [...new Set(futureGames.map(game => game.date))].slice(0, 3); // Get today + next 2 days

      // Filter the games based on the available unique dates
      const filteredGames = futureGames.filter(game => uniqueDates.includes(game.date));

      setGamesForNextDays(filteredGames);
    } catch (error) {
      console.error('Error fetching games data:', error);
    }
  }, []);

  useEffect(() => {
    fetchGamesData();
  }, [fetchGamesData]);

  return (
    <div className="App">
      {/* Video Hype */}
      <div className="container">
        <ReactPlayer url="https://www.youtube.com/watch?v=C10Pe5XWjpY&t=41s" />
      </div>

      {/* Display the games for the next 3 available days */}
      <div className="container">
        {gamesForNextDays.length === 0 ? (
          <div className="empty">
            <h2>No games scheduled for the next three available days.</h2>
          </div>
        ) : (
          <DateBlock dates={gamesForNextDays} />
        )}
      </div>
      <div>
        {/* Other components and content */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
