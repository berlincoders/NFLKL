// GameCard.jsx
import React from 'react';

const GameCard = ({ game }) => {
  console.log("Rendering game in GameCard:", game); // Debugging line

  return (
    <div className="game-card">
      <div className="team-info">
        <h3>{game.homeTeam} vs {game.awayTeam}</h3>
        <p>{game.timeUS}</p>
      </div>
      <div className="team-logos">
        {/* Use imageURLHome and imageURLAway from the game data */}
        <img src={game.imageURLHome} alt={`${game.homeTeam} logo`} />
        <img src={game.imageURLAway} alt={`${game.awayTeam} logo`} />
      </div>
    </div>
  );
};

export default GameCard;

