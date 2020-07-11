import React from "react"
import ItemToCheck from "./ItemToCheck"

const Checklist = ({ data, ...props }) => {
  const items = data.list
  return (
    <>
      <div className="checkList">
        {items.map((item, index) =>
          <ItemToCheck key={index} val={item} />
        )}
      </div>

    </>
  )
}

export default Checklist