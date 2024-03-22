import React from 'react';

const GameCard = ({ game }) => {
  // Check if the game object exists and contains the necessary properties
  if (!game || !game.homeTeam || !game.awayTeam || !game.date || !game.imageURL) {
    return null; // Return null if the game object is undefined or missing properties
  }

  return (
    <div className="game">
      <div>
        <p>{game.date}</p>
      </div>
      <div>
        <img src={game.imageURL !== "N/A" ? game.imageURL : "https://via.placeholder.com/400"}  alt={`${game.homeTeam} vs ${game.awayTeam}`} />
      </div>
      <div>
        <span>{game.Type}</span>
        <h3>{game.homeTeam} vs {game.awayTeam}</h3>
      </div>
    </div>
  );
};

export default GameCard;
