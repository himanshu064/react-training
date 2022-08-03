import React from "react";

const Task1 = () => {

  var obj = [
    { id: Math.random(), text: "Walk the dog", textColor: "red" },
    { id: Math.random(), text: "Prepare lunch", textColor: "green" },
    { id: Math.random(), text: "Fix the bugs", textColor: "yellow" },
    { id: Math.random(), text: "Code all day", textColor: "blue" },
    { id: Math.random(), text: "Sleep", textColor: "black" },
  ]

  return (
    <>
      {
        obj.map(function (val) {
          return(
            <p key={val.id} style={{ color: `${val.textColor}` }}>{val.text}</p>
          )
        })
      }
    </>
  )
}
export default Task1;
