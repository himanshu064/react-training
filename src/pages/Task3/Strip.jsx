
import React from "react";

export default function Strip(props) {
  return (
    <div className={props.className}>
      <div className="row">
        <div className="col-10 d-flex">
          <input type="checkbox" onClick={props.oncheck} />
          <h3 className="mx-3">{props.title}</h3>
        </div>
        <div className="col-2 text-end">
          <span onClick={props.onclose}>&times;</span>
        </div>
      </div>
    </div>
  );
}
