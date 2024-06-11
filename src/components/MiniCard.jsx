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
   //relative rounded-lg     hover:shadow-2xl hover:scale-105 transform-gpu
    <div className="w-[310px] flex flex-col bg-[#343739]  shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105 rounded-lg border-0 overflow-hidden p-2 m-6">
        <>
            <p className="text-sm text-[#f9d3b4] " >{game.date} time:{game.timeUS}</p>
        </>
        <div className="flex gap-14 justify-center my-2">
            {isValidUrl(game.imageLogoHome) ? (
              <img className="w-15 h-15 object-cover"src={game.imageLogoHome} alt={`${game.homeTeam} Home`} />
            ) : (
              <img src="/images/404_home.png" alt="404" />
            )}
            {isValidUrl(game.imageLogoAway) ? (
              <img src={game.imageLogoAway} alt={`${game.awayTeam} Away`} />
            ) : (
              <img src="/images/404_home.png" alt="404" />
            )}
        </div>
        <>
            <p className="text-xs text-[#f9d3b4]  text-center font-semibold mt-1">{game.homeTeam} vs {game.awayTeam}</p>
        </>
    </div>
  );
};

export default MiniCard;
