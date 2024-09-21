import React from 'react';
import GameCard from './GameCard';
import MiniCard from './MiniCard';
import PrevButton from './PrevButton';
import DateDisplay from './DateDisplay'; // Import the DateDisplay component

const DateBlock = ({ date, games, onPrevClick }) => {
  return (
    <div className="mb-5 w-full flex">
      {/* First Column: DateDisplay component  */}
      <div className="w-[52px] text-center mt-12">
        <DateDisplay date={date} /> {/* Use DateDisplay component */}
      </div>

      {/* Second Column: Main Content */}
      <div className="flex-1">
        <div className=" mb-2 ">
          <PrevButton onClick={onPrevClick} />
        </div>

        <div className="flex flex-wrap gap-2 justify-start">
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
    </div>
  );
};

export default DateBlock;
