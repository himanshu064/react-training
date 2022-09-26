import React from "react";
const Copy = () => {
  window.addEventListener("paste", (e) => {
    const clipboard = e.clipboardData;
    const pasteData = clipboard.getData("Text");
    document.getElementById("textArea").value = pasteData;
  });
  return (
    <>
      <textarea
        rows="8"
        className="form-control"
        disabled
        id="textArea"
      ></textarea>
    </>
  );
};
export default Copy;
