import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css';

const Test = () => {
  const[min,setMin] = useState (0);
  const[sec,setSec] = useState (5);

  useEffect(()=>{
    var timer;
    timer = setInterval(()=>{
      setSec(sec - 1);
      if (sec ===0){
        setMin(min - 1);
        setSec(59);
      }
    },1000)
    return ()=>clearInterval(timer)
  })
  return (
    <>
    <div className="container">
      <h1>{min} : {sec}</h1>
    <textarea disabled cols="90" rows="10"></textarea>
    <textarea cols="90" rows="10"></textarea>
    </div>
    
    </>
  )
}

export default Test;
