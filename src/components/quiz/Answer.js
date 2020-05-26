import React from "react"
import { SET_CURRENT_ANSWER, SET_ERROR } from "../../reducers/types.js"

const Anwser = (props) => {
  let classes = ["answer", "item"]

  const handleClick = e => {
    props.dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: e.currentTarget.dataset.value });
    props.dispatch({ type: SET_ERROR, error: "" });
  }

  if (props.selected) {
    classes.push("checked")
  }
  return (
    <>
      <div data-value={props.letter} className={classes.join(" ")} onClick={handleClick} >
        <div className="contentZone">
          <div className="checkZone">
            <div className="check"></div>
          </div>
          <div className="valueZone">
            <span>{props.letter}</span>
            <span>{props.answer}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Anwser