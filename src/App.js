import Swal from "sweetalert2";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import Message from "./components/Message";
import NewGameButton from "./components/NewGameButton";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons
import GameDescriptionButton from "./components/GameDescriptionButton";
const WORDS = ["apple", "grape", "table", "chair", "bread"];
const getRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)];

const App = () => {
  const [targetWord, setTargetWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();

    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();

      if (key === "enter") {
        handleGuess();
      } else if (key === "backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      } else if (/^[a-z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  },[currentGuess]);

  const handleKeyPress = (key) => {
    if (key === "Enter") {
      handleGuess();
    } else if (key === "Backspace") {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (currentGuess.length < 5 && /^[a-z]$/.test(key)) {
      setCurrentGuess(currentGuess + key);
    }
  };

  const handleGuess = () => {
    if (currentGuess.length !== 5) {
      //  setMessage("Word must be 5 letters long.");
      Swal.fire({
        title: "Word must be 5 letters long.",
        timer: 6000,
        toast: true,
        position: "top-end",
        timerProgressBar: true,
        showConfirmButton: true,
        icon: "error",
      });
      return;
    }

    const feedback = currentGuess.split("").map((letter, index) => {
      if (letter === targetWord[index]) return "green";
      if (targetWord.includes(letter)) return "yellow";
      return "gray";
    });

    setGuesses([...guesses, { word: currentGuess, feedback }]);
    setCurrentGuess("");
    setMessage("");

    if (currentGuess === targetWord) {
      //setMessage("Congratulations! You guessed the word.");
      Swal.fire({
        title: "Congratulations! You guessed the word.",
        timer: 6000,
        toast: true,
        position: "top-end",
        timerProgressBar: true,
        showConfirmButton: true,
        icon: "success",
      });
    } else if (guesses.length === 5) {
      //setMessage(`Game over! The word was ${targetWord}.`);
      Swal.fire({
        title: `Game over! The word was ${targetWord}.`,
        timer: 10000,
        toast: true,
        position: "top-end",
        timerProgressBar: true,
        showConfirmButton: true,
        icon: "info",
      });
    }
  };

  const handleRestart = () => {
    setTargetWord(getRandomWord());
    setGuesses([]);
    setCurrentGuess("");
    setMessage("");
  };

  return (
    <div className={`container ${darkMode ? "dark-mode" : ""}`}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-around", marginBottom:"0px"}}> 
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}    
        </button>
        <NewGameButton handleRestart={handleRestart} />
        <GameDescriptionButton/>
      </div>
      <h1 style={{ textAlign: "center", fontSize: "39px", marginTop:"0px", marginBottom:"0px" }}>Wordle Clone</h1>
      <Grid guesses={guesses} currentGuess={currentGuess} ref={inputRef} />
      <Keyboard handleKeyPress={handleKeyPress} />
      
      <Message message={message} />
    </div>
  );
};

export default App;
