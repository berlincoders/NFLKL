import React from 'react';

const GameCard = ({ game }) => {
  console.log("Rendering game in GameCard:", game); // Debugging line

  return (
    <div className="w-80 m-6">
      <div className="relative h-40 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
        {/* Team information */}
        <div className="absolute top-0 left-0 w-full p-4 opacity-0 hover:opacity-100 text-white transition-opacity">

          <h3 className="text-xl"> {game.timeUS}</h3>
        </div>

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
        <p className="text-sm">{game.homeTeam} @ {game.awayTeam}  {game.timeUS} </p>
      </div>
    </div>
  );
};

export default GameCard;
