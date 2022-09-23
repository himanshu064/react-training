import React, { useState } from "react";

const Assignment3 = () => {
  const [text, setText] = useState("");
  const allowCopyAndPaste = async () => {
    setText(await navigator.clipboard.readText());
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ fontSize: "3rem", padding: "10px" }}>
        TRY TO PASTE SOMETHING DOWN THERE
      </div>
      <div>
        <textarea
          rows={12}
          cols={120}
          placeholder="Write if you can"
          disabled={true}
          onPaste={allowCopyAndPaste}
          value={text}
          style={{ padding: "10px 20px" }}
        />
      </div>
    </div>
  );
};

export default Assignment3;
