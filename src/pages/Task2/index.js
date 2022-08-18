import React, { useState } from "react";

function TableForAny(props){

    const number = props.number;
    var length = props.max;
    length = parseInt(length)
   
    function range(length) {
        if (length===undefined) {
            return Array(10).fill().map((_, idx) => idx+1 )
        }
        else{
          return Array(length).fill().map((_, idx) => idx+1 )
        }
        
      }
      var result = range(length); 
      const [times] = useState(result)
   
    

    return (
        <div>{
               times.map((x, index)=>{
                console.log(x)
                return <p key={index}>{number} X {x} = {number*x}</p>
               })
            }
            
        </div>
    )
}

export default TableForAny;