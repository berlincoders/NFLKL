import React from 'react';

const GameCard = ({ game }) => {
  // Check if the game object exists and contains the necessary properties
  if (!game || !game.homeTeam || !game.awayTeam || !game.date) {
    return null; // Return null if the game object is undefined or missing properties
  }

  // Function to check if the provided URL is valid
  const isValidUrl = (url) => {
    return url && url.trim() !== ''; // Check if the URL is not empty or undefined
  };

  return (
    <div className="game">
      <div>
        <p>{game.date}  time:{game.timeUS}</p>
      </div>
      <div className="images-container">
        {isValidUrl(game.imageURLHome) ? (
          <img src={game.imageURLHome} alt={`${game.homeTeam} Home`} />
        ) : (
          <img src="/images/404_home.png" alt="404" />
        )}
        {isValidUrl(game.imageURLAway) ? (
          <img src={game.imageURLAway} alt={`${game.awayTeam} Away`} />
        ) : (
          <img src="/images/404_home.png" alt="404" />
        )}
      </div>
      <div>
        <span>{game.Type}</span>
        <h3>{game.homeTeam} vs {game.awayTeam}</h3>
      </div>
    </div>
  );
};

export default GameCard;
