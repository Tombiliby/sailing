import React from "react"

const Card = () => {
  return (
    <>
      <div className="card">
        <div className="counter">
          <div className="inner">
            <span className="currentQuestion">1/</span>
            <span className="questions">3</span>
          </div>
        </div>
        <div className="inner">
          <div className="titleZone">
            <h2 className="h2">Hello</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim feugiat dolor, eget gravida diam ullamcorper vel. Integer hendrerit, purus in posuere gravida, quam ex fringilla tellus, quis porta nisl augue ut enim</p>
        </div>
      </div>
    </>
  )
}

export default Card