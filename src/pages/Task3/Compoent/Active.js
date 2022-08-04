import React from "react"
import "../index.css"
const Active=()=>{
    const newAllTask=JSON.parse(localStorage.getItem("AllTask"))
    return (
        <>
        <h1 className="sub-heading mt-3">Active todo</h1>
        {newAllTask.map((item,index)=>{
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
export default Active