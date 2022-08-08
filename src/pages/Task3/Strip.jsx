

import React from "react";

export default function Strip(props) {
  return (
    <div className="container-fluid">
      <div className="row rowX">
        <div className="col-10 d-flex">
          <input
            type="checkbox"
            onClick={props.oncheck}
            defaultChecked={props.true}
            style={{ cursor: "pointer" }}
          />
          <h3 className={"mx-3 " + (props.complete ? "line-through" : "")}>
            {props.title}
          </h3>
        </div>
        <div className="col-2 text-end">
          <span onClick={props.onclose} style={{ cursor: "pointer" }}>
            &times;
          </span>
        </div>
      </div>
    </div>
  );
}
