import React from 'react';

const NextButton = ({ onClick }) => {
  return (
    <button
      className="flex items-center justify-center w-10 h-10 rounded-full"
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
          d="M2.77237 4.5L6 7.64801L4.61381 9L0 4.5L4.61382 0L6 1.35199L2.77237 4.5Z"
          fill="#F9FAFA"
        />
      </svg>
    </button>
  );
};

export default NextButton;
