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
    <div className="w-[310px] flex flex-col bg-gray-600 shadow-md rounded-lg border-0 overflow-hidden p-2 m-6">
        <div>
        <p className="text-sm text-grey-600" >{game.date} time:{game.timeUS}</p>
        </div>
        <div className="flex gap-14 justify-center my-2">
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
          <p className="text-ls font-semibold">{game.homeTeam} vs {game.awayTeam}</p>
        </div>
    </div>
  );
};

export default MiniCard;
