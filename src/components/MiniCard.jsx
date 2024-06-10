import React from 'react';

const MiniCard = ({ game }) => {
  // Check if the game object exists and contains the necessary properties
  if (!game || !game.homeTeam || !game.awayTeam || !game.date  ) {
    return null; // Return null if the game object is undefined or missing properties
  }

  // Function to check if the provided URL is valid
  const isValidUrl = (url) => {
    return url && url.trim() !== ''; // Check if the URL is not empty or undefined
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-md p-4 ">
      <div>
        <p className="text-sm text-white" >{game.date} time:{game.timeUS}</p>
      </div>
      <div className="flex justify-between my-2">
        {isValidUrl(game.imageLogoHome) ? (
          <img className="w-24 h-24 object-cover"src={game.imageLogoHome} alt={`${game.homeTeam} Home`} />
        ) : (
          <img src="/images/404_home.png" alt="404" />
        )}
        {isValidUrl(game.imageLogoAway) ? (
          <img src={game.imageLogoAway} alt={`${game.awayTeam} Away`} />
        ) : (
          <img src="/images/404_home.png" alt="404" />
        )}
      </div>
      <div>
        <span className="text-xs text-gray-500">{game.Type}</span>
        <h3 className="text-lg font-semibold">{game.homeTeam} vs {game.awayTeam}</h3>
      </div>
    </div>
  );
};

export default MiniCard;