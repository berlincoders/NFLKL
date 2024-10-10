import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import MiniCard from './MiniCard';
import DateDisplay from './DateDisplay';

const DateBlock = ({ dates }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  useEffect(() => {
    console.log("DateBlock props:", { dates });
  }, [dates]);

  const limitedDates = dates.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="mb-1 w-full">
      {limitedDates.map((dateObj, index) => (
        <div key={index} className="w-full flex">
          <div className="flex-shrink-0 w-[150px] text-center">
            <DateDisplay date={dateObj.date} />
          </div>
          <div className="flex-1 flex flex-wrap justify-start items-start"> {/* Ensure no height restrictions */}
            {dateObj.games.map((game, gameIndex) => (
              <div key={gameIndex} className="sm:w-1/2 lg:w-1/3">
                {game.available ? (
                  <GameCard game={game} />
                ) : (
                  <MiniCard game={game} />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DateBlock;
