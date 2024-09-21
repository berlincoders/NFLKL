import React from 'react';

const DateDisplay = ({ date }) => {
  const dateObj = new Date(date);

  // Format the day of the week, day number, and month
  const dayOfWeek = dateObj.toLocaleDateString('en-US', { weekday: 'short' }); // e.g., "Fri"
  const dayNumber = dateObj.getDate(); // e.g., 20
  const month = dateObj.toLocaleDateString('en-US', { month: 'short' }); // e.g., "Sep"

  return (
    <aside className="w-[52px]">
      <div className="text-center">
        <p className="text-sm font-bold text-gray-100">{dayOfWeek}</p> {/* Day of the week */}
        <h2 className="text-[32px] font-bold text-gray-100">{dayNumber}</h2> {/* Day number */}
        <p className="text-sm text-gray-100">{month}</p> {/* Month */}
      </div>
    </aside>
  );
};

export default DateDisplay;
