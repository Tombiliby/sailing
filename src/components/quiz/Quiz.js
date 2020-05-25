import React, { useReducer } from "react"
import Progress from "./Progress"
import Question from "./Question"
import Answers from "./Answers"
import QuizContext from "../../context/QuizContext"
import { SET_ANSWERS, SET_CURRENT_ANSWER, SET_CURRENT_QUESTION, SET_ERROR, SET_SHOW_RESULTS, RESET_QUIZ } from "../../reducers/types.js"
import quizReducer from "../../reducers/QuizReducer"


const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: "C'est qui le plus beau ?",
      answer_a: "Ton père",
      answer_b: "Ta mère",
      answer_c: "Ta soeur",
      answer_d: "Je vois pas...",
      correct_answer: "d"
    },
    {
      id: 2,
      question: "C'est qui le plus fort ?",
      answer_a: "Ton père",
      answer_b: "Ta mère",
      answer_c: "Ta soeur",
      answer_d: "Je vois pas...",
      correct_answer: "d"
    },
    {
      id: 3,
      question: "C'est qui le plus intelligent ?",
      answer_a: "Ton père",
      answer_b: "Ta mère",
      answer_c: "Ta soeur",
      answer_d: "Bein je vois vraiment pas...",
      correct_answer: "d"
    }
  ]

  const initialState = {
    questions,
    currentQuestion: 0,
    currentAnswer: "",
    answers: [],
    showResults: false,
    error: ""
  }

  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { currentQuestion, currentAnswer, answers, showResults, error } = state;

  const question = questions[currentQuestion]

  const renderError = () => {
    if (!error) {
      return;
    }

    return <div className="error">{error}</div>
  }

  const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return (
        <span>Correct !!</span>
      )
    }
    return <span>Failed !</span>
  }

  const renderResultsData = () => {
    return answers.map(answer => {
      const question = questions.find(
        question => question.id === answer.questionID
      );
      return (
        <div key={question.id}>
          <div className="questionZone">
            {question.question} - {renderResultMark(question, answer)}
          </div>
          <div className="answerZone">

          </div>
        </div>
      )
    })
  }
  const restart = () => {
    dispatch({ type: RESET_QUIZ });
  }

  const next = () => {
    const answer = { questionID: question.id, answer: currentAnswer }

    if (!currentAnswer) {
      dispatch({ type: SET_ERROR, error: "Please select an option" });

      return;
    }

    answers.push(answer);
    dispatch({ type: SET_ANSWERS, answers });
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: "" });

    if (currentQuestion + 1 < questions.length) {
      dispatch({ type: SET_CURRENT_QUESTION, currentQuestion: currentQuestion + 1 });

      return;
    }
    dispatch({ type: SET_SHOW_RESULTS, showResults: true });
  }

  if (showResults) {
    return (
      <div className="resultsZone">
        <h2>Results</h2>
        {renderResultsData()}
        <button onClick={restart}>Restart</button>
      </div>
    )
  } else {
    return (
      <>
        <QuizContext.Provider value={{ state, dispatch }}>
          <Progress total={questions.length} current={currentQuestion + 1} />
          <Question />
          {renderError()}
          <Answers />
          <button onClick={next}>Confirm and continue</button>
        </QuizContext.Provider>
      </>
    )
  }
}

export default Quiz