import React, { useState } from "react"

const ItemToCheck = ({ val, ...props }) => {
  const [isChecked, setChecked] = useState(false)

  function toggle() {
    setChecked(!isChecked)
  }

  return (
    <>
      <div onClick={toggle} className={isChecked ? "item checked" : "item"}>
        <div className="col checkZone">
          <div className="inner">
            <div className="check"></div>
            {isChecked ? (
              <div className="check">X</div>
            ) : (
                <div className="check">O</div>
              )}

          </div>
        </div>
        <div className="col bodyZone">
          <div className="inner">
            <div className="name">
              {val}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemToCheck