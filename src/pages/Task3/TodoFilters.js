import React from "react";
import classes from "./index.module.css";

function Filters(props) {
  console.log(props.tasks, "task in props ");
  const storage = localStorage.getItem("alltasks");
  console.log(storage, "task in search");
  function activeTasks() {
    props.onClickActive();
  }
  function completedTasks() {
    props.onClickComplete();
  }
  return (
    storage && (
      <div
        className={`${classes.back} ${classes.heading} ${classes.displayInline}`}
      >
        <div className={`${classes.formpaddingdiv}`}>
          {/* <input type="button" value="All" onClick={()=>allTasks()}/> */}
          <input type="button" value="All" onClick={props.onClickAll} />
        </div>
        <div className={`${classes.formpaddingdiv}`}>
          <input type="button" value="Active" onClick={() => activeTasks()} />
        </div>
        <div className={`${classes.formpaddingdiv}`}>
          <input
            type="button"
            value="Completed"
            onClick={() => completedTasks()}
          />
        </div>
      </div>
    )
  );
}
export default Filters;
