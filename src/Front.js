import React from "react";
import "./index.css";

const Front = ({ setStart }) => {
  return (
    <>
      <div className="main">
        <h1 className="quiz_heading">RRandom quiZZZzzzzzzz!!!</h1>
        <div className="main_box">
          <label className="label">
            <h2>Difficulty level โคต๏ธ </h2>
            <select className="select">
              <option>levels ๐ข</option>
              <option>๐ข</option>
              <option>๐ ๐ </option>
              <option>๐ด๐ด๐ด</option>
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
