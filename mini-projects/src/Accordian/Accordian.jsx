
import React from "react";
import { useState } from "react";
import "./Accordian.css";
import dummyData from "../dummyData";

const Accordian = () => {
  const [selected, setSelected] = useState(false);
  const [multiSelection, setMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getId) {
    setSelected(getId === selected ? null : getId);
  }

  function handleMultiSelection(getId) {
    let copyMutliple = [...multiple];
    const findIndex = copyMutliple.indexOf(getId);

    if (findIndex === -1) {
      copyMutliple.push(getId);
    } else {
      copyMutliple.splice(findIndex, 1);
    }
    setMultiple(copyMutliple);
  }

  return (
    <div className="app">
      <button onClick={() => setMultiSelection(!multiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {dummyData && dummyData.length > 0 ? (
          dummyData.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  multiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3 className="question">{dataItem.question} </h3>
                <span> + </span>
              </div>
              {(multiSelection && multiple.indexOf(dataItem.id) !== -1) || (!multiSelection && selected === dataItem.id) ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
