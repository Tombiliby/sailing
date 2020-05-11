import React from "react"
import Emoji from "../../utils/Emoji"
import ItemToCheck from "./ItemToCheck"
import checklist from "../../data/checklist.json"

const Checklist = () => {
  const items = checklist.checklist
  return (
    <>
      <div className="item">Item à prendre <Emoji symbol="😎" /></div>
      <ul className="checkList">
      {items.map((item, index) =>
        <ItemToCheck key={index} val={item} />
      )}
      </ul>
    </>
  )
}

export default Checklist