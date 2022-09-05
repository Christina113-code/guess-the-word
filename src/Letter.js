import React, { useState } from 'react'


const Letter = (props) => {
    const [visible,setVisible] = useState(false);
    return(
        <>
         { visible? 
            <div className = "letter">{props.letter}</div>
          : <div className = "letter invisible">{props.letter}</div>
         }
        </>
    )
   
}

export default Letter