import React from 'react';
import GameCard from './GameCard';
import seasonData from './nfl_season_2024.json';
import ReactPlayer from 'react-player';
import './App.css';

const App = () => {
  console.log('seasonData:', seasonData); // Log seasonData

  return (
    <div className="App">
      <h1>Hello NFLKL</h1>

      <div className ="container">
        <ReactPlayer url="https://www.youtube.com/watch?v=icMWlRCt5qo" />
      </div>
      <div className="container">
        {Object.entries(seasonData.games).map(([week, games]) => (
          <div key={week}>
            <h2>Week {week}</h2>
            <div className="row">
              {games.map((game, index) => (
                <div key={index} className="col-md-4">
                  <GameCard
                    key={index} // Add key to GameCard component
                    game={game} // Pass entire game object as prop
                  />
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
