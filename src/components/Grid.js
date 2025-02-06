
import React, { forwardRef } from "react";
import "../styles/Grid.css";

const Grid = forwardRef(({ guesses, currentGuess }, ref) => {
  return (
    <div className="grid" >
      {[...Array(6)].map((_, rowIndex) => {
        const guessObj = guesses[rowIndex] || {};
        const word = guessObj.word || (rowIndex === guesses.length ? currentGuess.padEnd(5) : "     ");
        const feedback = guessObj.feedback || Array(5).fill("");

        return (
          <div key={rowIndex} className="row">
            {word.split("").map((letter, colIndex) => {
              const isActive = rowIndex === guesses.length && colIndex === currentGuess.length;
              return (
                <span key={colIndex} className={`cell ${feedback[colIndex]} ${isActive ? "active" : ""}`}>
                  {letter.trim()}
                </span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
});

export default Grid;
