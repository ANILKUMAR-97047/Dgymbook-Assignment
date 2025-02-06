import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa"; // Importing icon
import "../styles/GameDescriptionButton.css";

const GameDescriptionButton = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className="game-description-container">
      <button className="description-button" onClick={toggleInstructions}>
        <FaInfoCircle className="icon" /> {/* Description Icon */}
        {showInstructions ? " Hide Instructions" : " Show Instructions"}
      </button>

      {showInstructions && (
        <div className="instructions-overlay">
          <div className="instructions">
            <button className="close-button" onClick={toggleInstructions}>✖</button>
            <h3>How to Play Wordle</h3>
            <ul>
              <li>Guess the 5-letter word within 6 attempts.</li>
              <li>Each guess must be a valid 5-letter word.</li>
              <li>After each guess, the letters change color to indicate correctness:</li>
              <ul>
                <li><span className="green">Green</span>: Correct letter in the correct position.</li>
                <li><span className="yellow">Yellow</span>: Correct letter in the wrong position.</li>
                <li><span className="gray">Gray</span>: Incorrect letter.</li>
              </ul>
              <li>Use the keyboard to type and submit guesses.</li>
              <li>Press "Enter" to submit your guess.</li>
              <li>Press "New Game" to restart.</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDescriptionButton;
