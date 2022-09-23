import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./index.module.css";

const Assignment2 = () => {
  const [text, setText] = useState("");
  const [showtext, setShowtext] = useState([]);

  useEffect(() => {
    const timeOutId = setTimeout(async () => {
      console.log("DUMMY!!!");
      if (!text) {
        const res = await axios.get("https://dummyjson.com/products");
        // console.log(res.data.products);
        setShowtext(res.data.products);
      } else {
        const res = await axios.get(
          "https://dummyjson.com/products/search?q=" + text
        );
        // console.log(res.data.products);
        setShowtext(res.data.products);
      }
    }, 300);
    return () => clearTimeout(timeOutId);
  }, [text]);
  // console.log(showtext, "datatta");
  return (
    <div className={`${styles.mainDiv}`}>
      <input
        type="text"
        placeholder="Search..."
        value={text}
        onChange={(event) => setText(event.target.value)}
        className={`${styles.input}`}
      />
      <ol>
        {showtext.map((product, index) => {
          return <li key={index}>{product.title}</li>;
        })}
      </ol>
    </div>
  );
};

export default Assignment2;
