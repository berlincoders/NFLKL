import React from 'react';

const GameCard = ({ game }) => {
  console.log("Rendering game in GameCard:", game); // Debugging line

  return (
    <div className="w-80 m-1">
      {/* Wrapper div with hover effect */}
      <div className="relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
        {/* Image section */}
        <div className="relative h-40">
          <li className="absolute top-2 left-2 bg-black bg-opacity-60 text-white p-1 rounded">
            <span>TODAY {game.timeUS}</span>
          </li>

          {/* Team information */}
          <div className="absolute top-0 left-0 w-full p-4 opacity-0 hover:opacity-100 text-white transition-opacity"></div>

          {/* Single image */}
          <div className="flex justify-center items-center h-full bg-gray-800">
            <img
              src={game.imageURL}
              alt={`${game.homeTeam} vs ${game.awayTeam}`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Additional row for text outside the image */}
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
    </div>
  );
};

export default GameCard;
