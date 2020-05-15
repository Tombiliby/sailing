import React, { useState } from "react"

const ItemToCheck = ({ val, ...props }) => {
  const [isChecked, setChecked] = useState(false)

  return (
    <>
      {!isChecked ? (
        <div onClick={() => setChecked(true)} className="item" >
          <div className="contentZone">
            <div className="checkZone">
              <div className="check"></div>
            </div>
            <div className="valueZone">
              <span>{val}</span>
            </div>
          </div>
        </div >
      ) : (
          <div onClick={() => setChecked(false)} className="item checked">
            <div className="contentZone">
              <div className="checkZone">
                <div className="check"></div>
              </div>
              <div className="valueZone">
                <span>{val}</span>
              </div>
            </div>
          </div>
        )}
    </>
  )
}

export default ItemToCheck