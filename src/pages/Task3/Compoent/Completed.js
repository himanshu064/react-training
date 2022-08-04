import React from "react"
import "../index.css"
const Completed=()=>{
    const completedTask=JSON.parse(localStorage.getItem("completedArray"))
    return (
        <>
        <h1 className="sub-heading mt-3">Completed todo</h1>
        {completedTask.map((item,index)=>{
return (
  <div className="form-check d-flex justify-content-start align-items-center mt-3 active-todo" key={index}>
  <div>
<label className="form-check-label">
{item}
</label>
  </div>
</div>
)
        })}
        </>
    )
}
export default Completed