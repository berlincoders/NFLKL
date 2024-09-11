import React from 'react';
import GameCard from './GameCard';
import MiniCard from './MiniCard';
import './DateBlock.css';

const DateBlock = ({ date, games }) => {
  console.log(`DateBlock for ${date} with games:`, games);

  return (
    <div className="day-container">
      <div className="date-block">{date}</div>
      <div className="games-container">
        {games.map((game, index) => (
          <div key={index} className="game-card-wrapper">
            {game.available ? (
              <GameCard game={game} />
            ) : (
              <MiniCard game={game} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateBlock;

