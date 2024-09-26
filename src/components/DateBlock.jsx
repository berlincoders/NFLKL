import React, { useRef } from 'react';
import GameCard from './GameCard';
import MiniCard from './MiniCard';
import PrevButton from './PrevButton';
import DateDisplay from './DateDisplay';
import NextButton from './NextButton';

const DateBlock = ({ date, games, onPrevClick }) => {
  const scrollRef = useRef(null);

  // Function to scroll right or left
  const scroll = (direction) => {
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    } else {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-5 w-full flex">
      {/* First Column: DateDisplay component */}
      <div className="w-[52px] text-center mt-12">
        <DateDisplay date={date} /> {/* Use DateDisplay component */}
      </div>

      {/* Second Column: Main Content */}
      <div className="flex-1 relative">
        <div className="mb-2 flex justify-end">
          {/* Adjust button onClick to call the scroll function */}
          <NextButton onClick={() => scroll('right')} />
          <PrevButton onClick={() => scroll('left')} />
        </div>

        {/* Scrollable container for GameCard and MiniCard */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-2 scrollbar-hide" // Allow horizontal scrolling
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Iteration over the games */}
          {games.map((game, index) => (
            <div key={index} className="flex-shrink-0 max-w-[25rem]">
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
