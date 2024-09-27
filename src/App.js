import React from 'react';
import DateBlock from './components/DateBlock';
import seasonData from './api/nfl_season_2024.json';
import ReactPlayer from 'react-player';
import Footer from './components/Footer'; // Adjust the path if necessary
import './App.css';

export const App = () => {
  // Get current date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Function to get the next three days of games that exist in the JSON
  const getNextThreeDaysGames = () => {
    const allGameDays = [];

    // Collect all game days from all weeks
    seasonData.weeks.forEach(week => {
      week.days.forEach(day => {
        allGameDays.push({
          date: day.date,
          games: day.games
        });
      });
    });

    console.log("All game days:", allGameDays); // Debugging line

    // Filter only future game days, starting from today

    const futureGameDays = allGameDays.filter(day => day.date >= today);

    // Get the next 3 game days from the filtered future days
    const nextThreeDays = futureGameDays.slice(0, 3);

    return nextThreeDays;
  };

  // Get the next three days' games
  const nextThreeDaysGames = getNextThreeDaysGames();

  // Debugging line to check the final result
  console.log("Next three game days with games:", nextThreeDaysGames);

  return (
    <div className="App">
      {/* Video Hype */}
      <div className="container">
        <ReactPlayer url="https://www.youtube.com/watch?v=C10Pe5XWjpY&t=41s" />
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
      <div>
      {/* Other components and content */}
      <Footer />
    </div>
    </div>
  );
};

export default App;
