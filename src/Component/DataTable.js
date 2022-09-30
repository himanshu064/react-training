import React from "react";
import { useGlobalContext } from "../Context";
const DataTable = () => {
  const {
    tableData,
    deleteSingle,
    changeStatus,
    deleteMany,
    updateItem,
    updateMany,
  } = useGlobalContext();
  return (
    <>
      <button className="btn btn-primary" onClick={deleteMany}>
        delete many
      </button>
      <button className="btn btn-primary" onClick={updateMany}>
        update many
      </button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">class</th>
            <th scope="col">rollno</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            const { name, course, rollno, checked } = data;
            return (
              <tr key={index}>
                <td>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={checked}
                    onChange={() => changeStatus(index)}
                  />
                </td>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{course}</td>
                <td>{rollno}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => updateItem(name)}
                  >
                    edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      deleteSingle(index);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default DataTable;
