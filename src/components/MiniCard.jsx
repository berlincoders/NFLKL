import React from 'react';

const MiniCard = ({ game }) => {
  if (!game) {
    return null;
  }

  const defaultImage = "/images/404_home.png"; // Fallback image if URLs are invalid

  return (
    <div className="w-[19rem] flex border border-gray-300 rounded-lg shadow-md overflow-hidden m-2">
      {/* Home team half */}
      <div
        className="w-1/2 p-4 flex flex-col justify-center items-center text-white"
        style={{ backgroundColor: game.homeColor }} // Apply dynamic background color
      >
        <p className="text-lg font-bold mb-2">{game.timeUS}</p>
        <img
          src={game.imageLogoHome || defaultImage}
          alt={`${game.homeTeam} Home`}
          className="w-16 h-16 object-contain mb-2"
        />
        <p className="text-xl font-bold">{game.homeTeam}</p>
      </div>

      {/* Away team half */}
      <div
        className="w-1/2 p-4 flex flex-col justify-center items-center text-black"
        style={{ backgroundColor: game.awayColor }} // Apply dynamic background color
      >
        <p className="text-lg font-bold mb-2">{game.timeUS}</p>
        <img
          src={game.imageLogoAway || defaultImage}
          alt={`${game.awayTeam} Away`}
          className="w-16 h-16 object-contain mb-2"
        />
        <p className="text-xl font-bold">{game.awayTeam}</p>
      </div>
    </div>
  );
};

export default MiniCard;
