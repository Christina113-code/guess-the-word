import React, { useState } from 'react'
import { word } from './App';


const Button = (props) => {
    const handleClick = ()=>{
      if(word.indexOf(props.char)=== -1){
        setCorrect(false);
        console.log(correct);
      }else{
        
      }
    }
    const [correct, setCorrect] = useState('neutral');
  return (
    <>
    {correct==='neutral'? <button className='btn neutral' onClick={handleClick}>{props.char}</button>
    :correct===false? <button className = 'btn incorrect'onClick={handleClick}>{props.char}</button>
:correct===true? <button className='btn correct'onClick={handleClick}>{props.char}</button>
:<p>Error</p>}
    </>
  )
}

export default Button