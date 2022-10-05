import React from "react";
import "./style.css";
const Result = () => {
  return (
    <div>
      <h1 className="game-title m-3">Typing game</h1>
      <div className="d-flex justify-content-around align-items-center pt-3">
        <label htmlFor="words" className="form-label">
          Type Words
        </label>
        <h1 className="result-typed"> 50</h1>
      </div>
      <div className="d-flex justify-content-around align-items-center pt-3">
        <label htmlFor="correct" className="form-label">
          Correct Words
        </label>
        <h1 className="result-correct"> 50</h1>
      </div>
      <div className="d-flex justify-content-around align-items-center pt-3">
        <label htmlFor="wrong" className="form-label">
          Wrong Words
        </label>
        <h1 className="result-wrong"> 50</h1>
      </div>
      <div className="d-flex justify-content-center m-4">
        <button className="btn btn-primary">Try Again</button>
      </div>
    </div>
  );
};

export default Result;
