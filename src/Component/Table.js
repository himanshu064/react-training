import React from "react";
const Table = ({ Num }) => {
  const mul = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(Num);
  if (Num === "") {
    return <h1>Enter a Number</h1>;
  }
  return (
    <>
      {mul.map((items, index) => {
        const sum = items * Num;
        return (
          <div key={index}>
            <h1>
              {Num} * {items} = {sum}
            </h1>
          </div>
        );
      })}
    </>
  );
};
export default Table;
