
import React from "react";

export default function Strip(props) {
  return (
    <div className={props.className}>
      <div className="row rowX">
        <div className="col-10 d-flex">
          <input
            type="checkbox"
            defaultChecked={props.active}
            onClick={props.oncheck}
          />
          <h3 className={"mx-3 " + (props.completed ? "line-through" : "")} >
            {props.title}
          </h3>
        </div>
        <div className="col-2 text-end">
          <span onClick={props.onclose}>&times;</span>
        </div>
      </div>
    </div>
  );
}
