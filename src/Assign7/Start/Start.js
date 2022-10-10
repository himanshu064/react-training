import React from 'react';
import { useGlobalContext } from "../../context";
import {Link} from 'react-router-dom';
import './style.css';

const Start = () => {
  const { Timer, HandleSetTimer } = useGlobalContext();
 
  return (
    <>
    <div className="container">
      <h1>Check your typing skills in a minute</h1>
      <select id="select" value={Timer} onChange={HandleSetTimer} >
          <option selected >select minute</option>
          <option value="1">1 minutes</option>
          <option value="2">2 minutes</option>
          <option value="3">3 minutes</option>
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>       
      </select>
      <br />
      <Link to='/test' >
      <button>START TEST</button>
      </Link>
    </div>
    </>
  )
}

export default Start;