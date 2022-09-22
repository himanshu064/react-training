import React from "react";

const Table=({Num})=>{
    const multiplication=[1,2,3,4,5,6,7,8,9,10];
    if(Num===""){
       return  <h1>Enter a Number</h1>
    }
 return (
        <>
       {multiplication.map((items,index)=>{
        const result=items*Num;
        return (
            <div key={index}>
            <h1>{Num} * {items} = {result}</h1>
            </div>
        )
       })}
        </>
    )
}
export default Table;