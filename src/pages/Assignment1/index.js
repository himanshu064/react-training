import React, { useState } from "react";
import style from "./index.module.css";

const Assignment1 = () => {
  const [text, setText] = useState("");
  return (
    <div className={`${style.mainDiv}`}>
      <div className={`${style.textDiv}`}>Enter Your Text</div>
      <textarea
        rows="12"
        cols="120"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <p className={`${style.pdiv}`}>{text}</p>
    </div>
  );
};

export default Assignment1;
