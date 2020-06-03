import React from "react"
import ItemToCheck from "./ItemToCheck"
import checklist from "../../data/checklist.json"
import figureChecklist from "../../figures/checklist.svg"

const Checklist = () => {
  const items = checklist.checklist
  return (
    <>
      <div className="checkListZone">
        <div className="titleZone">
          <h2 className="h2">À Emporter</h2>
        </div>
        <div className="figureZone">
          <img src={figureChecklist} alt="" />
        </div>
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