import React from "react";
import { useGlobalContext } from "../Context/Context";
import "./style.css";
const Start = () => {
  const { Timer, StartGame, HandleSetTimer } = useGlobalContext();

  return (
    <>
      <h1 className="game-title m-3">Typing game</h1>
      <div className="d-flex justify-content-around align-items-center pt-3">
        <label htmlFor="Timing" className="form-label">
          Select Timing
        </label>
        <select
          className="form-select mx-3"
          value={Timer}
          onChange={HandleSetTimer}
        >
          <option value="1">1 minutes</option>
          <option value="2">2 minutes</option>
          <option value="3">3 minutes</option>
          <option value="5">5 minutes</option>
          <option value="10">10 minutes</option>
        </select>
      </div>
      <div className="d-flex justify-content-center m-4">
        <button className="btn btn-primary" onClick={StartGame}>
          Start Game
        </button>
      </div>
    </>
  );
};

export default Start;
