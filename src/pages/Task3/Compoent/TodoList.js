import React from "react"
import { useGlobalContext } from "../../Context"
const TodoList=()=>{
  const {HandleCheck}=useGlobalContext();
  const Tasks=JSON.parse(localStorage.getItem("Task"));
    return (
        <>
        {Tasks.map((item,index)=>{
          return(
            <div className="form-check d-flex justify-content-between align-items-center mt-3" key={index}>
            <div>
            <input className="form-check-input" type="checkbox" checked={item.status} onChange={()=>HandleCheck(item.id)}/>
    
        {item.status===false ?<label className="form-check-label ">
        {item.name}
          </label>: <label className="form-check-label completed ">
        {item.name}
          </label>}  
            </div>
            <div className="remove-icon">
            <i className="fa-solid fa-xmark"></i>
            </div>
        
        </div>
          )
        })}
    
           
        </>
    )
}
export default TodoList