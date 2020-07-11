import React, { useContext } from "react"
import QuizContext from "../../context/QuizContext"
import { SwitchTransition, CSSTransition } from "react-transition-group"

const Question = () => {
  const { state } = useContext(QuizContext);
  const { currentQuestion, questions } = state
  const question = questions[currentQuestion]

  return (
    <>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={currentQuestion}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          <div className="card">
            <div className="inner">
              {/*<img className="quizFigure" src={process.env.PUBLIC_URL + question.image} alt={question.question} />*/}
              <h2 className="h2">Question : {question.category}</h2>
              <p>{question.question}</p>
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
    </>
  )
}

export default Question