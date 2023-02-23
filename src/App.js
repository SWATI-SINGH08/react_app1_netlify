import React, { useState } from "react";
import Front from "./Front";
import Quiz from "./Quiz-ques";
import Result from "./Result";

function App() {
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(0);
  const [played, setPlayed] = useState(false);
  const [playeds, setPlayeds] = useState(false);
  return (
    <>
      <div>
        {start === false ? (
          <Front setStart={setStart} />
        ) : (
          <>
            {played ? (
              <Result score={score} setPlayed={setPlayed} />
            ) : (
              <Quiz setScoreNew={setScore} setPlayed={setPlayed} />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
