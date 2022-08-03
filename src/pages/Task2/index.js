import React from "react";

const Task2 = (props) => {
  let t = parseInt(props.table)
 
  let table = []; 
  for (let i = 1; i <= 10; i++) {
    table.push( <p key={i}>{t} x {i} = {t * i}</p>);   
  }
  return table;
};

export default Task2;
