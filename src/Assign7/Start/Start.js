import React,{useState} from 'react';
import './style.css';

const Start = () => {
  const [timer, setTimer] = useState("1");

  const HandleSetTimer = (e) => {
    setTimer(e.target.value);
    console.log(timer,'timer')
  };
  return (
    <>
    <div className="container">
      <h1>Check your typing skills in a minute</h1>
      <select id="select" value={timer}onChange={HandleSetTimer} >
          <option value="1">1 minutes</option>
          <option value="2">2 minutes</option>
          <option value="3">3 minutes</option>
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>       
      </select>
      <br />
      <button>START TEST</button>
    </div>
    </>
  )
}

export default Start;
