import React from 'react';
import {Link} from 'react-router-dom';
import { useGlobalContext } from "../../context";
import './style.css';

const Result = () => {
  const {correct,Timer } = useGlobalContext();
    let x = correct.filter((item)=> item === true)
    let y = correct.filter((item)=> item === false)
  return (
    <>
    <div className="container">
      <h2>Your Test Score</h2>
      <h5>Total Words Typed : {x.length + y.length} </h5>
      <h5>Correct Words : {x.length}</h5>
      <h5>Incorrect Words : {y.length}</h5>
      <h5>Typing Speed : {x.length/Timer} WPM</h5>
      <Link to='/' >
      <button>RETAKE TEST</button>  
      <button>Go to Home Page</button>   
      </Link>  
    </div>
    </>
  )
}

export default Result;
