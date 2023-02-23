import React from "react";
import "./index.css";

const Front = ({ setStart }) => {
  return (
    <>
      <div className="main">
        <h1 className="quiz_heading">RRandom quiZZZ!!!</h1>
        <div className="main_box">
          <label className="label">
            <h2>Difficulty level ⤵️ </h2>
            <select className="select">
              <option>levels 🎢</option>
              <option>🟢</option>
              <option>🟠🟠</option>
              <option>🔴🔴🔴</option>
            </select>
          </label>
          <br />
          <br />
          <button onClick={() => setStart(true)}>click to start</button>
        </div>
      </div>
    </>
  );
};

export default Front;
