import React from 'react';

const MiniCard = ({ game }) => {
  if (!game) {
    return null;
  }

  const defaultImage = "/images/404_home.png"; // Fallback image if URLs are invalid

  return (
    <div className="mini-card">
      <p>{game.date} - {game.timeUS}</p>
      <div className="images-container">
        <img
          src={game.imageLogoHome || defaultImage}
          alt={`${game.homeTeam} Home`}
          style={{ width: '50px', height: '50px' }}
        />
        <img
          src={game.imageLogoAway || defaultImage}
          alt={`${game.awayTeam} Away`}
          style={{ width: '50px', height: '50px' }}
        />
      </div>
      <p>{game.homeTeam} vs {game.awayTeam}</p>
    </div>
  );
};

export default MiniCard;
