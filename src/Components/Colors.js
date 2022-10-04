import React, { useState } from "react";
import "./style.css";
const Colors = () => {
  const [palette, setPalette] = useState([
    "#ECA400",
    "#EAF8BF",
    "#006992",
    "#27476E",
    "#001D4A",
  ]);
  const generateMore = () => {
    let addPalette = [];
    for (let i = 0; i < 5; i++) {
      let random = "#" + Math.floor(Math.random() * 16777215).toString(16);
      addPalette.push(random);
    }
    setPalette(addPalette);
    let clipBoardArray = [];
    let clipBoardIndex = 1;
    addPalette.map((palettes) => {
      clipBoardArray[clipBoardIndex] = palettes;
      clipBoardIndex++;
    });
    let copyToClipBoard = JSON.stringify(Object.assign({}, clipBoardArray));
    navigator.clipboard.writeText(copyToClipBoard);
  };
  document.body.onkeyup = (event) => {
    if (event.code === "Space") {
      generateMore();
    }
  };

  return (
    <>
      <h1 className="heading mt-3 mb-3">Color palette generator</h1>
      <div className="container mt-3">
        <div className="row">
          {palette.map((item, index) => {
            return (
              <div key={index} className="col">
                <div className="box">
                  <div className="color" style={{ background: item }}></div>
                  <div className="card-item">{item}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center mt-3">
          <button className="btn btn-primary" onClick={generateMore}>
            generator more palette
          </button>
        </div>
      </div>
    </>
  );
};
export default Colors;
