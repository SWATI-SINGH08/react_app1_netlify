import React, { useEffect, useState } from 'react'
import "./index.css";



const Result = ({score, setPlayed}) => {
    const [remark, setRemark] = useState("Excellent");

    useEffect(() => {
      if(score < 8) setRemark("Good");
      if(score < 4) setRemark("Bad");
      if(score === 10) setRemark("Excellent");
    }, []);
    
    return (
      <div className='resultdiv'>
        
        <h1>Your Score is <b><i>{score}</i></b></h1>
        <h1 style={{color:"green"}}>{remark}</h1>
        <button onClick={() => setPlayed(false)}>Play Again</button>
      </div>
    );
};


export default Result;

