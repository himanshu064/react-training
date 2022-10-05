import React from 'react';
import './style.css';

const Start = () => {
  const timing =  [1,2,3,5,10];
  return (
    <>
    <div className="container">
      <h1>Check your typing skills in a minute</h1>
      <select id="select">
        <option selected>Select Time</option>
        {timing.map((time,index)=>{
          return(
              <option key={index} value={index + 1}>{time} Minute Test</option>
          )
        })}
      </select>
      <br />
      <button>START TEST</button>
    </div>
    </>
  )
}

export default Start;
