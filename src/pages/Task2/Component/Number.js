import React,{useState} from "react"
import Table from "./Table"
import "../index.css"

const Number=()=>{
    const [num,setNum]=useState(1)
    const HandleChange=(event)=>{
        setNum(event.target.value)
    }
    return (
        <section className="p-3">
        <div className="mb-3">
  <label htmlFor="num" className="form-label">Enter Number</label>
  <input type="number" className="form-control" value={num}  placeholder="enter number" onChange={HandleChange}/>
</div>
  <Table Num={num}/> 
        </section>
    )
}
export default Number