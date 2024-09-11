import React from 'react';
import './MiniCard.css'; // Import the CSS file

const MiniCard = ({ game }) => {
  if (!game) {
    return null;
  }

  const defaultImage = "/images/404_home.png"; // Fallback image if URLs are invalid

  return (
    <div className="mini-card">
      <p>{game.timeUS}</p>
      <div className="images-container">
        <img
          src={game.imageLogoHome || defaultImage}
          alt={`${game.homeTeam} Home`}
        />
        <img
          src={game.imageLogoAway || defaultImage}
          alt={`${game.awayTeam} Away`}
        />
      </div>
      <p>{game.homeTeam} vs {game.awayTeam}</p>
    </div>
  );
};

export default MiniCard;
