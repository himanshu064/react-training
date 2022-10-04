import React, { useState } from "react";
import "./style.css";
const History = () => {
  const getHistory = () => {
    if (JSON.parse(localStorage.getItem("visitedLink")) === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("visitedLink"));
    }
  };
  const [visited] = useState(getHistory());
  return (
    <>
      <h1 className="text-center p-3 heading">Shorten your url</h1>
      {visited.length > 0 ? (
        <>
          {visited.map((links, index) => {
            return (
              <div className="shorten-url mt-4" key={index}>
                <a href={links.fullUrl} className="shorten-link">
                  {links.url}
                </a>
              </div>
            );
          })}
        </>
      ) : (
        <h1>no link</h1>
      )}
    </>
  );
};

export default History;
