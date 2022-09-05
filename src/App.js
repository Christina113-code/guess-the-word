import { useState } from 'react';
import './App.css';
import Button from './Button';
import Letter from './Letter';

const words = [
'Bobert',
'Jimothy',
'Johannes',
'Johannesburg'
]
export const word = words[Math.floor(Math.random() *words.length)];
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
function App() {
  const [tries, setTries] = useState(0);
  //check if btn character exists in word 
  //if it does, make char visible in word and set btn to green
  //if not btn is red, increment tries
  
  
  return (
   <>
    <p>{word}</p>
    <div className = "word-container">
    {word.split('').map(char=><Letter key={word.indexOf(char)}letter={char}/>)}
    </div>
    <div className='btn-container'>
    {alphabet.split('').map(char=><Button char={char} key={char}/>)}
    </div>

   
   </>
  );
}

export default App;
