// import './App.css';
import React from "react";
import GameContainer from "./GameContainer"
import GymContainer from "./GymContainer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
        🏀 Pickup Basketball Games 🏀
        </h1>
      </header>
      <div>
      <GameContainer />
      <GymContainer />
      </div>
    </div>
  );
}

export default App;
