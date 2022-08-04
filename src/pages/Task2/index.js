import React from "react";
import Navbar from "../Navbar";

const Task2 = (props) => {
  var getTable = parseInt(props.table);
  var table =[];
  for (let i = 1; i <= 10; i++) {
    table.push(<p>{getTable} x {i}  = {getTable * i}</p>) 
  }
  return (
    <>
     <Navbar/>
      {table}
    </>
   );
};

export default Task2;
