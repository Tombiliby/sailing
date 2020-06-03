import React from "react";

const MainTitle = () => {
  return (
    <>
      {/*<svg width="250" height="250">
        <filter id='noise1' x='0%' y='0%' width='100%' height='100%'>
          <feTurbulence baseFrequency="0.01" />
        </filter>
        <rect x="0" y="0" width="100%" height="100%" filter="url(#noise)" fill="none"></rect>
      </svg>
      <svg>
        <filter id="noise2">
          <feTurbulence baseFrequency="0.05" />
          <feColorMatrix type="hueRotate" values="0">
            <animate
              attributeName="values"
              from="0"
              to="360"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </feColorMatrix>
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0
               0 0 0 0 2
               0 0 0 0 0
               1 0 0 0 0"
          />
          <feDisplacementMap in="SourceGraphic" scale="300" />
        </filter>
      </svg>
      */}
      <h1 className="h1">
        <span className="item1">Se préparer pour</span>
        <br></br>
        <span className="item2">naviguer à la voile</span>
      </h1>
    </>
  )
}

export default MainTitle