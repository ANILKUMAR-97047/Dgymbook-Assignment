import React from "react";
import "../styles/NewGameButton.css";

const NewGameButton = ({ handleRestart }) => {
  return (
    <button className="new-game-button" onClick={handleRestart}>
      New Game
    </button>
  );
};

export default NewGameButton;
