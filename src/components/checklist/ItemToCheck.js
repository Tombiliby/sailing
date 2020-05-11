import React, { useState } from "react"

const ItemToCheck = ({ val, ...props }) => {
  const [isChecked, setChecked] = useState(false)

  return (
    <>
      {!isChecked ? (
        <li onClick={() => setChecked(true)} className="item" >
          <span>{val}</span>
        </li >
      ) : (
          <li onClick={() => setChecked(false)} className="item checked">
            <span>{val}</span>
          </li>
        )}
    </>
  )
}

export default ItemToCheck