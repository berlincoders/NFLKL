import React from 'react';

const NextButton = ({ onClick }) => {
  return (
    <button
      className="flex items-center justify-center w-6 h-6 rounded-full"
      style={{ backgroundColor: '#3C3D37' }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="9"
        viewBox="0 0 6 9"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.22763 4.5L0 7.64801L1.38619 9L6 4.5L1.38618 0L0 1.35199L3.22763 4.5Z"
          fill="#F9FAFA"
        />
      </svg>
    </button>
  );
};

export default NextButton;
