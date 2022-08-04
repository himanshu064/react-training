import React, { useState } from "react"
import { useGlobalContext } from "../../Context"
const TodoList=()=>{
    const {DeleteTask} =useGlobalContext();
    let newAllTask=JSON.parse(localStorage.getItem("AllTask")) 
    return (
        <>
        {newAllTask.map((item,index)=>{
            return (
            <div className="form-check d-flex justify-content-between align-items-center mt-3" key={index}>
    <div>
    <input className="form-check-input" type="checkbox"/>
  <label className="form-check-label">
{item}
  </label>
    </div>
    <div className="remove-icon">
    <i className="fa-solid fa-xmark" onClick={()=>DeleteTask(item,index)}></i>
    </div>

</div>
            )
        })}


        </>
    )
}
export default TodoList