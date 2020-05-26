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
      image: "/quiz/1.png",
      question: "Dans un chenal en Europe. De la mer vers le port, la balise verte doit marquer :",
      answer_a: "La gauche",
      answer_b: "Un danger isolé",
      answer_c: "Tribord",
      answer_d: "Un câble sous marin",
      correct_answer: "c"
    },
    {
      id: 2,
      image: "/quiz/2.png",
      question: "Règles de croisement, lorsque les voiliers reçoivent le vent d'un bord différent. Lequel doit s'écarter ?",
      answer_a: "Les deux",
      answer_b: "Celui qui reçois le vent bâbord",
      answer_c: "Le plus grand voilier",
      answer_d: "Celui qui reçoit le vent tribord",
      correct_answer: "b"
    },
    {
      id: 3,
      image: "/quiz/3.png",
      question: "Règles de croisement, lorsque les voiliers reçoivent le vent du même bord. Qui a la priorité (vire ou passe derrière) ?",
      answer_a: "Le plus cher",
      answer_b: "Celui qui est sous le vent",
      answer_c: "Celui qui est au vent",
      answer_d: "Celui qui crie le plus fort",
      correct_answer: "c"
    },
    {
      id: 4,
      image: "/quiz/4.png",
      question: "Vous êtes face à face, comment dévier ?",
      answer_a: "Dévier à droite",
      answer_b: "Dévier à gauche",
      answer_c: "Freiner",
      answer_d: "Celui qui crie le plus fort",
      correct_answer: "c"
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