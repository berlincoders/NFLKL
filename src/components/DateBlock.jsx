import React, { useRef, useState } from 'react';
import GameCard from './GameCard';
import MiniCard from './MiniCard';
import PrevButton from './PrevButton';
import DateDisplay from './DateDisplay';
import NextButton from './NextButton';

const DateBlock = ({ date, games }) => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5; // Number of games to display

  // Function to scroll right or left
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 200; // Define the amount to scroll
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  // Function to handle Next button click
  const handleNextClick = () => {
    if (currentIndex + itemsPerPage < games.length) {
      setCurrentIndex((prevIndex) => prevIndex + itemsPerPage);
      scroll('right');
    }
  };

  // Function to handle Prev button click
  const handlePrevClick = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - itemsPerPage);
      scroll('left');
    }
  };

  // Get the current set of games to display
  const limitedGames = games.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="mb-5 w-full flex">
      {/* First Column: DateDisplay component */}
      <div className="w-[52px] text-center mt-12">
        <DateDisplay date={date} />
      </div>

      {/* Second Column: Main Content */}
      <div className="flex-1 relative overflow-hidden"> {/* Limit the width of the scrollable container */}
        <div className="flex justify-between items-center absolute top-0 left-0 right-0 h-full px-2 z-10"> {/* Button positioning */}
          <PrevButton onClick={handlePrevClick} />
          <NextButton onClick={handleNextClick} />
        </div>

        {/* Scrollable container for GameCard and MiniCard */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-2 scrollbar-hide max-w-full" // Keep overflow-x-auto and limit width
          style={{ scrollBehavior: 'smooth', overscrollBehavior: 'contain' }} // Ensure smooth scrolling and prevent overflow
        >
          {/* Iteration over the limited games */}
          {limitedGames.map((game, index) => (
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
