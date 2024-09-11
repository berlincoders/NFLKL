import React from 'react';
import DateBlock from './components/DateBlock';
import seasonData from './api/nfl_season_2024.json';
import ReactPlayer from 'react-player';
import './App.css';

export const App = () => {
  // Get current date
  const today = new Date();

  // Function to get the next three days of games
  const getNextThreeDaysGames = () => {
    const nextThreeDays = [];
    const allGames = [];

    // Collect all games from all weeks
    seasonData.weeks.forEach(week => {
      week.days.forEach(day => {
        allGames.push({
          date: day.date,
          games: day.games
        });
      });
    });

    console.log("All games data:", allGames); // Debugging line

    for (let i = 0; i < 3; i++) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + i); // Increment the date by i days
      const formattedDate = nextDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD

      // Find games for this date
      const gamesForDate = allGames.find(gameDay => gameDay.date === formattedDate);

      // Log the date and games for debugging
      console.log(`Checking date: ${formattedDate}, Games found:`, gamesForDate);

      // If games exist for this date, push the date and games to the result array
      if (gamesForDate) {
        nextThreeDays.push(gamesForDate);
      }
    }

    return nextThreeDays;
  };

  // Get the next three days' games
  const nextThreeDaysGames = getNextThreeDaysGames();

  // Debugging line to check the final result
  console.log("Next three days games:", nextThreeDaysGames);

  return (
    <div className="App">
      {/* Video Hype */}
      <div className="container">
        <ReactPlayer url="https://www.youtube.com/watch?v=icMWlRCt5qo" />
      </div>

      {/* Display the next three days of games */}
      <div className="container">
        {nextThreeDaysGames.length === 0 ? (
          <div className="empty">
            <h2>No games scheduled for the next three days.</h2>
          </div>
        ) : (
          nextThreeDaysGames.map(({ date, games }, index) => (
            <div key={index} className="day-container">
              {/* DateBlock for the date */}
              <DateBlock date={date} games={games} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
