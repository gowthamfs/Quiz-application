import questions from "./components/questions";
import { useState } from "react";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0); //to get questions using state
  const [score, setScore] = useState(0); //  get score using state
  const [results, setResults] = useState(true); //showing results in display

  const replay = () =>{    // if i click play again button, game turns again
    setQuestionIndex(0)
    setScore(0)
    setResults(false)
  }

  const present_question = questions[questionIndex];  // to select questions one by one

  const get_choice = (index) => {    //whenever i click the options button, check [0] === index , if equal means add + 1
    if (present_question.answer === index) {
      setScore(score + 1)
    }

    const next_question = questionIndex + 1  // if all questions are over stop it on last one
    if (next_question < questions.length) {
      setQuestionIndex(questionIndex + 1)
    }
    
    else {
      setResults(true)   //showing results how much u get
    }

  }
  return (
    <div className="quiz_box">
      {results?(<><h1>{score}</h1> <button onClick = {replay}>Play Again</button> </> ): (<div className="quiz_questions">
        {present_question.question}
        <ul className="quiz_ul">
          {present_question.options.map((option, i) => {
            return <li className="quiz_li" onClick={() => get_choice(i)}>{option}</li>
          })}
        </ul>
      </div>) }
    </div>
  );
}

export default App;
