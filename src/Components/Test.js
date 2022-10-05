import React, { useState, useEffect } from "react";
import "./style.css";
import { useGlobalContext } from "../Context/Context";
const Test = () => {
  const { typing, HandleTyping, testPara, Timer } = useGlobalContext();
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(parseInt(Timer));
  var time;
  useEffect(() => {
    countDown();
  });
  const countDown = () => {
    if (min === 0 && sec === 0) {
      setMin(0);
      setSec(0);
    } else {
      time = setTimeout(() => {
        setSec(sec - 1);
        if (sec === 0) {
          setMin(min - 1);
          setSec(59);
        }
      }, 1000);
      return () => clearTimeout(time);
    }
  };
  return (
    <div>
      <h1 className="game-title m-3">Typing game</h1>
      <h1 className="timer text-center">{`${min}:${sec}`}</h1>
      <div className="container pt-3">
        <div className="row">
          <div className="col-xl-6 test-area">
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                disabled
                value={testPara}
              />
            </div>
          </div>
          <div className="col-xl-6 typed-area">
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="3"
                value={typing}
                onChange={HandleTyping}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
