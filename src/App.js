import React from 'react';
import ReactPlayer from 'react-player';

const App = () => {

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=GU1o2blfeO0"
      />
    </div>

  );
}

export default App;
