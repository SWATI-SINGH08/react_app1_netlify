import React, { useEffect, useState } from "react";
import "./quizcss.css";
import axios from "axios";

const Quiz = ({ setScoreNew, setPlayed }) => {
  const [quiz, setQuiz] = useState(null);
  const [currQues, setCurrQues] = useState(0);
  const [score, setScore] = useState(1);
  // const [result, setResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const loadQuiz = async () => {
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`
      );
      console.log(data.results);
      console.log(currQues);
      setQuiz(data.results);
    };
    loadQuiz();
  }, []);

  const onchange = (e) => {
    console.log(e.target.value);
    setCheck(true);
    setSelectedOption(e.target.value);
  };

  const onSubmit = () => {
    // setCheck(false);
    if (selectedOption === "d") {
      setScore(score + 1);
      console.log(score, "if-score");
    }
    setSelectedOption(null);

    setCurrQues(currQues + 1);
    console.log(currQues, "curr-qu");

    if (currQues === 9) {
      setScoreNew(score);
      console.log(score, "new-score");

      // setResult(true);
      setPlayed(true);
    }
  };

  return (
    <div>
      {quiz === null ? (
        <h1>Get Ready...</h1>
      ) : (
        <div className="main_box2">
          <div className="quesArea">
            <h1>
              Question {currQues + 1} /{quiz.length}
            </h1>
          </div>
          <div className="quesArea">
            <h1>{quiz[currQues].question}</h1>
          </div>
          <div className="optionArea">
            <ul>
              <li>
                <input
                  type="radio"
                  value="a"
                  name="name"
                  onChange={onchange}
                  checked={check && selectedOption === "a"}
                />
                <label>{quiz[currQues].incorrect_answers[0]}</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="b"
                  name="name"
                  onChange={onchange}
                  checked={check && selectedOption === "b"}
                />

                <label>{quiz[currQues].incorrect_answers[1]}</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="c"
                  name="name"
                  onChange={onchange}
                  checked={check && selectedOption === "c"}
                />

                <label>{quiz[currQues].incorrect_answers[2]}</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="d"
                  name="name"
                  onChange={onchange}
                  checked={check && selectedOption === "d"}
                />

                <label>{quiz[currQues].correct_answer}</label>
              </li>
            </ul>
            <button onClick={onSubmit}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
