import React from 'react';
import Timer from './components/timer/Timer'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App-title">The incredible super timer</h1>

      <header className="App-header">
        <Timer></Timer>
      </header>
    </div>
  );
}

export default App;
