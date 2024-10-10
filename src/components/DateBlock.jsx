import React, { useState, useEffect } from 'react';
import GameCard from './GameCard';
import MiniCard from './MiniCard';
import DateDisplay from './DateDisplay';

const DateBlock = ({ dates }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Number of days to display

  // Debugging: Log the received props
  useEffect(() => {
    console.log("DateBlock props:", { dates });
  }, [dates]);

  // Get the current set of dates to display
  const limitedDates = dates.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="mb-5 w-full">
      {/* Iterate over each date and its corresponding games */}
      {limitedDates.map((dateObj, index) => (
        <div key={index} className="mb-5 w-full flex">
          {/* DateDisplay at the start of each row */}
          <div className="flex-shrink-0 w-[150px] text-center">
            <DateDisplay date={dateObj.date} />
          </div>

          {/* Games for the current date */}
          <div className="flex-1 flex flex-wrap justify-start">
            {dateObj.games.map((game, gameIndex) => (
              <div key={gameIndex} className="p-2 w-full sm:w-1/2 lg:w-1/3">
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

