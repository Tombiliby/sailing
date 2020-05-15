import React from "react"
import ItemToCheck from "./ItemToCheck"
import checklist from "../../data/checklist.json"

const Checklist = () => {
  const items = checklist.checklist
  return (
    <>
      <div className="checkListZone">
        <h2>À Emporter</h2>
        <div className="checkList">
          {items.map((item, index) =>
            <ItemToCheck key={index} val={item} />
          )}
        </div>

      </div>

    </>
  )
}

export default Checklist