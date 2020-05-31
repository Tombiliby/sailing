import React, { useContext } from "react"
import QuizContext from "../../context/QuizContext"

const Question = () => {
  const { state } = useContext(QuizContext);
  const { currentQuestion, questions } = state
  const question = questions[currentQuestion]

  return (
    <>
      <img className="quizFigure" src={process.env.PUBLIC_URL + question.image} alt={question.question} />
      <p>{question.question}</p>
    </>
  )
}

export default Question