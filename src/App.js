import { useState } from "react";
import "./App.css";
const words = ["bobert", "jimothy", "bob", "jim"];
const word = words[Math.floor(Math.random() * words.length)];
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function App() {
  const [tries, setTries] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [usedLetters, setUsedLetters] = useState([]);
  const findLetter = (e) => {
    let letter = e.target.innerHTML;
    if (word.includes(letter)) {
      setCorrectAnswers([...correctAnswers, letter]);
    } else {
      setTries((prevTry) => prevTry + 1);
    }
    setUsedLetters([...usedLetters, letter]);
  };

  const handlePlayAgain =()=>{
    setTries(0);
    setCorrectAnswers([]);
    setUsedLetters([]);
  }

  const word_arr = word
    .split("")
    .map((char, i) => (
      <div className="letter">{correctAnswers.includes(char) ? char : ""}</div>
    ));

  return (
    <>
      <div className="hangman-container">
        
        {tries > 7
            ? <>
            <h1 className="lost">You Lost!</h1>
            <button onClick = {window.location.reload()} className="play-again">Play Again?</button>
            </>
            
            : word
                .split("")
                .every((element) => correctAnswers.includes(element))
            ? <>
            <h1 className="won">You Won!</h1>
            <button className = "play-again"onClick={handlePlayAgain}>Play Again?</button>
            </>
            : <h1>Guess the word!</h1>}
        


        <div className="word-container">{word_arr}</div>
        <div className="btn-container">
          {alphabet.split("").map((char) => (
            usedLetters.includes(char)? <button className = "btn crossed">{char}</button>:
            <button className="btn" onClick={findLetter}>
              {char}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
