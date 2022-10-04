import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./index.module.css";

function Assignment5() {
  const [colorData] = useState([
    "#ffaaaa",
    "#ff6a6a",
    "#ff4141",
    "#ff9267",
    "#ff733c",
    "#ff4800",
    "#fff56d",
    "#deff49",
    "#98b903",
    "#55d12f",
    "#2fd19b",
    "#63c4f1",
    "#6389f1",
    "#062270",
    "#5a368a",
    "#a622e4",
    "#e100ff",
    "#ff0095",
    "#ee5c94",
    "#ac2f39",
    "#ce1020",
    "#cf2020",
  ]);
  const [randomColor, setRandomColor] = useState([
    { id: 1, color: "#ffaaaa" },
    { id: 2, color: "#ff6a6a" },
    { id: 3, color: "#ff4141" },
    { id: 4, color: "#ff9267" },
    { id: 5, color: "#ff733c" },
  ]);
  useEffect(() => {
    document.addEventListener("keydown", space, true);
  }, []);
  const changecolors = async () => {
    const obj = {};
    const newcolors = [...randomColor];
    newcolors.map((item) => {
      return (item.color =
        colorData[Math.floor(Math.random() * colorData.length)]);
    });
    randomColor.forEach((item, index) => {
      obj[index + 1] = item.color;
    });
    setRandomColor(newcolors);
    return await navigator.clipboard.writeText(JSON.stringify(obj));
  };
  function space(e) {
    if (e.keyCode === 32) {
      changecolors();
    }
  }
  return (
    <div className={styles.outerdiv}>
      <div className={styles.heading}>Color Palette Generator</div>
      <div className={styles.allCards}>
        {randomColor.map((item, index) => {
          return (
            <div key={index} className={styles.cardDiv}>
              <div
                className={styles.colorDiv}
                style={{
                  backgroundColor: item.color,
                }}
              ></div>
              <div>{item.color}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.btn}>
        <div>
          <Button onClick={() => changecolors()}> Generate Palette </Button>
        </div>
        <div className={styles.lastText}>
          or just press "Spacebar" to generate new Palette
        </div>
      </div>
    </div>
  );
}
export default Assignment5;
