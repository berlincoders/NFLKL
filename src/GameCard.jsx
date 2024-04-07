import React from 'react';

const GameCard = ({ game }) => {
  // Check if the game object exists and contains the necessary properties
  if (!game || !game.homeTeam || !game.awayTeam || !game.date) {
    return null; // Return null if the game object is undefined or missing properties
  }

  return (
    <div className="game">
      <div>
        <p>{game.date}</p>
      </div>
      <div className="images-container">
        <img src={game.imageURLHome} alt={`${game.homeTeam} Home`} />
        <img src={game.imageURLAway} alt={`${game.awayTeam} Away`} />
      </div>
      <div>
        <span>{game.Type}</span>
        <h3>{game.homeTeam} vs {game.awayTeam}</h3>
      </div>
    </div>
  );
};

export default GameCard;

