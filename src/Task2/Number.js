import React,{useState} from "react";
import Table from "./Table";
import "./style.css";

const Number=()=>{
    const [num,setNum]=useState(1);

    const HandleChange=(event)=>{
        setNum(event.target.value)
    }
    return (
        <div className="container">
        <section className="p-3">
        <div className="mb-3">
            <hr />
        <label htmlFor="num" className="form-label">Enter Number</label>
        <input type="number" className="form-control" value={num} onChange={HandleChange}/>
        <hr />
        </div>
        <Table Num={num}/> 
        </section>
        </div>
    )
};

export default Number;