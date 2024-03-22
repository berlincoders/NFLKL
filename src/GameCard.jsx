import React from 'react';

const GameCard = ({ game }) => {
  // Check if the game object exists and contains the necessary properties
  if (!game || !game.homeTeam || !game.awayTeam || !game.date || !game.imageURL) {
    return null; // Return null if the game object is undefined or missing properties
  }

  return (
    <div className="game-card">
      <img src={game.imageURL} alt={`${game.homeTeam} vs ${game.awayTeam}`} />
      <div className="game-details">
        <h2>{game.homeTeam} vs {game.awayTeam}</h2>
        <p>Date: {game.date}</p>
      </div>
    </div>
  );
};

export default GameCard;
