import React from 'react';
import GameCard from './GameCard';
import MiniCard from './MiniCard';

const DateBlock = ({ date, games }) => {
  console.log(`DateBlock for ${date} with games:`, games);

  return (
    <div className="mb-5 w-full">
      <div className="text-2xl font-bold mb-2 text-center text-gray-100">{date}</div>
      <div className="flex flex-wrap gap-2 justify-center">
        {games.map((game, index) => (
          <div key={index} className="flex-shrink-0 max-w-[19rem]">
            {game.available ? (
              <GameCard game={game} />
            ) : (
              <MiniCard game={game} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateBlock;

