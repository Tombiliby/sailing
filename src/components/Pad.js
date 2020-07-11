import React from "react"

const Pad = ({ children, figure, ...props }) => {
  return (
    <>
      <div className="pad">
        <div className="titleZone">
          <h2 className="h2">{props.title}</h2>
        </div>
        {figure ? (
          <div className="figureZone">
            <img src={figure} alt="" />
          </div>
        ) : null}

        <div className="bodyZone">
          {children}
        </div>
      </div>
    </>
  )
}

export default Pad