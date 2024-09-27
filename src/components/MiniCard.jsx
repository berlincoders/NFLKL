import React from 'react';

const MiniCard = ({ game }) => {
  if (!game) {
    return null;
  }

  const defaultImage = "/images/404_home.png";

  return (
    <div className="w-80 m-1"> {/* m1 separations between the card */}
      {/* Main Card (Home and Away Teams) */}
      <div className="h-40 flex border border-gray-300 rounded-lg shadow-md overflow-hidden">
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
          className="w-1/2 p-4 flex flex-col justify-center items-center text-white"
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

      {/* Additional Info Section (Same as GameCard) */}
      <div className="mt-2 p-2 text-white bg-gray-900 rounded-lg shadow-lg">
        <p className="text-sm">
          {game.homeTeam} @ {game.awayTeam}
        </p>
        <p className="text-sm">
          {game.timeUS}
          <span className="ml-2 inline-flex items-center">
            <img
              src="/images/EU.png"  // Assuming this path is correct
              alt="EU Flag"
              className="w-4 h-4 ml-2"
            />
            <span className="ml-1"> Europe {game.timeEU}</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default MiniCard;
