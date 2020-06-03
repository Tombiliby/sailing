import React from "react"
import { SwitchTransition, CSSTransition } from "react-transition-group"

const Progress = (props) => {

  return (
    <>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={props.current}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
          classNames="fade"
        >
          <div className="counter">
            <div className="inner">
              <span className="currentQuestion">{props.current}/</span>
              <span className="questions">{props.total}</span>
            </div>
          </div>

        </CSSTransition>
      </SwitchTransition>
    </>
  )
}

export default Progress;