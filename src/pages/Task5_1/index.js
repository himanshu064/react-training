import React, { useState } from "react";
import AccordionComponent from "./Accordion";
import "./rc-select.css";

function Pagination() {
  const [postsperpage] = useState(20);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Data Using Infinite Scrollbar</h1>
      <AccordionComponent postsperpage={postsperpage} />
    </div>
  );
}

export default Pagination;
