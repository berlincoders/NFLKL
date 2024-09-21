import React from 'react';

const GameCard = ({ game }) => {
  console.log("Rendering game in GameCard:", game); // Debugging line

  return (
    <div className="w-80 h-40 m-6 relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      {/* Team information */}
      <div className="absolute top-0 left-0 w-full p-4 opacity-0 hover:opacity-100 text-white transition-opacity">
        <p className="text-sm uppercase tracking-wider">{game.date}</p>
        <h3 className="text-xl">{game.homeTeam} vs {game.awayTeam}</h3>
      </div>

      {/* Single image */}
      <div className="flex justify-center items-center h-full bg-gray-800">
        <img
          src={game.imageURL}
          alt={`${game.homeTeam} vs ${game.awayTeam}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Game details at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900 p-4 text-white">
        <span className="text-xs uppercase tracking-wider">{game.timeUS}</span>
      </div>
    </div>
  );
};

export default GameCard;

