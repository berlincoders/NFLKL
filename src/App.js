import React, { useState } from 'react';
import GameCard from './components/GameCard';
import SearchBox from './components/SearchBox';
import seasonData from './api/nfl_season_2024.json';
import ReactPlayer from 'react-player';
import MiniCard from './components/MiniCard';
import './App.css';

export const App = () => {
  const [searchWeek, setSearchWeek] = useState(''); // State to store the search week

  // Get current date
  const today = new Date();

  // Function to filter games based on the search week and current date
  const filterGames = (games) => {
    return Object.entries(games)
      .filter(([week, games]) => week.toLowerCase().includes(searchWeek.toLowerCase()))
      .reduce((acc, [week, games]) => {
        // Filter out past games
        const upcomingGames = games.filter(game => {
          const gameDate = new Date(game.date); // Make sure your `game` object has a date property
          return gameDate >= today;
        });
        if (upcomingGames.length > 0) {
          acc[week] = upcomingGames;
        }
        return acc;
      }, {});
  };

  // Filter games based on the search week and current date
  const filteredGames = filterGames(seasonData.games);

  const currentWeek = 1; // Placeholder for current week logic

  // State variable to hold the week to display by default
  const [defaultWeek, setDefaultWeek] = useState(currentWeek);

  // Define handleSearch function
  const handleSearch = (query) => {
    setSearchWeek(query); // Update the searchWeek state with the query
  };

  console.log('seasonData:', seasonData); // Log seasonData

  return (
    <div className="App">
      {/* Video Hype */}
      <div className="container">
        <ReactPlayer url="https://www.youtube.com/watch?v=icMWlRCt5qo" />
        {/* Other video URLs */}
      </div>

      {/* Search box */}
      <div>
        <div className="container">
          <SearchBox onSearch={handleSearch} />
        </div>
      </div>

      <div className="container">
        {/* Map filtered games */}
        {Object.entries(filteredGames).map(([week, games]) => (
          <div key={week}>
            <h2>Week {week}</h2>
            <div className="row">
              {games.map((game, index) => (
                <div key={index} className="col-md-4">
                  {game.available ? (
                    <GameCard key={index} game={game} />
                  ) : (
                    <MiniCard key={index} game={game} />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
