import React, { useState } from 'react';
import '../SearchBox.css'; // Import CSS file for styles

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Search by week..."
        value={query}
        onChange={handleChange}
      />
      <button className="search-button" type="submit">
        <img
          className="search-icon"
          src="https://emojicdn.elk.sh/🏉"
          alt="Rugby ball"
        />
      </button>
    </form>
  );
};

export default SearchBox;
