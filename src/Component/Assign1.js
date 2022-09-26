import React, { useState } from "react";
import "./style.css";
const Assign = () => {
  const [preview, setPreview] = useState("");
  return (
    <>
      <div className="p-3">
        <label htmlFor="textArea" className="mb-3">
          Enter Text
        </label>
        <textarea
          rows="8"
          className="form-control"
          value={preview}
          onChange={(e) => setPreview(e.target.value)}
          id="textBox"
        ></textarea>
      </div>
      <p id="preview-text" className="preview">
        <pre>{preview.length > 0 ? preview : ""}</pre>
      </p>
    </>
  );
};
export default Assign;
