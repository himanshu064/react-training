import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Task9.module.css";

function ChatingBox() {
  const [inputData, setInputData] = useState("");
  const navigate = useNavigate();

  // const user = useSelector((state) => {
  //   state.CheckUser;
  // });
  // console.log(user, "useeeerrr");
  const user = "email";

  function AddData(event) {
    event.preventDefault();
    if (inputData) {
      console.log("data send : ", inputData);
      setInputData("");
    }
    return (
      <div className={`${styles.leftDiv}`}>
        <div className={`${styles.leftDivText}`}>{inputData}</div>
      </div>
    );
  }
  return (
    <div className={`${styles.mainDiv}`}>
      <nav>
        <h3>
          <Link to="/">Messenger</Link>
        </h3>
        <div>
          {user ? (
            <>
              <Link to="/profile">Profile</Link>
              <button className="btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </nav>
      <div className={`${styles.leftDiv}`}>
        <div className={`${styles.leftDivText}`}>Hello</div>
      </div>
      <div className={`${styles.rightDiv}`}>
        <div className={`${styles.rightDivText}`}>Hii</div>
      </div>

      <div className={`${styles.leftDiv}`}>
        <div className={`${styles.leftDivText}`}>How Are You </div>
      </div>
      <div className={`${styles.sendTextDiv}`}>
        <form onSubmit={AddData}>
          <input
            type="text"
            value={inputData}
            onChange={(e) => {
              setInputData(e.target.value);
            }}
            className={`${styles.sendingText}`}
          />

          <Button
            variant="success"
            className={`${styles.sendingButton}`}
            onClick={AddData}
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
export default ChatingBox;
