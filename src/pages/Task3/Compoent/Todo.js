import React, { useState } from "react"
import "../index.css"
import TodoList from "./TodoList";
import { useGlobalContext } from "../../Context";
import Active from "./Active";
import Completed from "./Completed";
const Todo=()=>{
  const [active,setActive]=useState(false);
  const [completed,setCompleted]=useState(false);
  const {task,HandleChange,HandleClick}=useGlobalContext();
  const newAllTask=JSON.parse(localStorage.getItem("AllTask"))
const HandleActive=()=>{
  setActive(true)
  setCompleted(false)
}
const HandleCompleted=()=>{
  setCompleted(true)
  setActive(false)
}
    return (
        <>
      <div className="todo-bg d-flex justify-content-center align-items-center flex-column">
        <div className="todo-container p-3">
        <div className="mb-3">
          <div className="d-flex flex-row AddTask">
          <input type="text" className="form-control"  placeholder="what needs to be done" value={task} onChange={HandleChange}/>
          <button className="btn btn-primary mx-3" onClick={HandleClick}>Add task</button>
          </div>

  <div className="todo-task p-4">
{newAllTask.length===0 ? <h1 className="enter-task">Plese enter task !!!!!</h1>:<TodoList/>}
  </div>
  <hr/>
  <div className="d-flex justify-content-between align-items-center checkAll">
  <div className="form-check">
  <input className="form-check-input" type="checkbox"/>
  <label className="form-check-label">
    Check All
  </label>
</div>
{newAllTask.length===0 ? <h1 className="count-task">No task....</h1>:<h2 className="count-task">{newAllTask.length} items left</h2>}

  </div>
<hr/>
<div className="task-btn">
    <button className="btn btn-primary">All</button>
    <button className="btn btn-primary mx-2" onClick={HandleActive}>Active</button>
    <button className="btn btn-primary" onClick={HandleCompleted}>Completed</button>
</div>
</div>
{active ===false ?"": <Active/>}
{completed===false ? "": <Completed/>}
        </div>    
        
      </div>

        </>
    )
}
export default Todo;
