import React from "react";

const Task2 = (props) => {
  var getTable = parseInt(props.table);
  var table =[];
  for (let i = 1; i <= 10; i++) {
    table.push(<p key={i}>{getTable} x {i}  = {getTable * i}</p>) 
  }
  return (
      <div className="container">
        {table}
      </div>
   );
};

export default Task2;
