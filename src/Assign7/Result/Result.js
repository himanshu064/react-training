import React from 'react';
import './style.css';

const Result = () => {
  return (
    <>
    <div className="container">
      <h2>Your Test Score</h2>
      <h5>Total Words Typed : 50 </h5>
      <h5>Correct Words : 50</h5>
      <h5>Incorrect Words : 50</h5>
      <h5>Typing Speed : 20 WPM</h5>
      <button>RETAKE TEST</button>
      <button>Go to Home Page</button>
    </div>
    </>
  )
}

export default Result;
