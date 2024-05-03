import React from "react";
import { useState } from "react";
import dummyData from "../dummyData";

// Normal accordian will be single one
// Another complex one will be of multi-selection.

const Accordian = () => {
  const [selected, setSelected] = useState(false);
//  const [multiSelection, setMultiSelection] = useState(false);

  function handleSelection(getId) {
    setSelected(getId === selected ? null : getId)
  }

  console.log(selected)
  return (
    <div className="app">
      <div className="accordian">
        {dummyData &&
          dummyData.length > 0 ? (
          dummyData.map((dataItem) => <div className="item">
            <div onClick={() => handleSelection(dataItem.id)} className="title">
              <h3 className="question">
                {dataItem.question} </h3>
                <span> + </span>
            </div>
            {selected === dataItem.id ? dataItem.answer : null}
          </div>))
          : (
        <div> No data found</div> 
      ) }
      </div>
    </div>
)
}

export default Accordian;