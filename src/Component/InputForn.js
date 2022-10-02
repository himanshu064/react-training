import React from "react";
import "../style.css";
import { useGlobalContext } from "../Context";
const InputFrom = () => {
  const {
    inputFields,
    setInputFields,
    HandleSubmit,
    HandleChange,
    MoreFields,
    updateSingle,
    update,
    updateAll,
    editAll,
    selected,
  } = useGlobalContext();

  const RemoveFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };
  return (
    <>
      <div className="p-3 d-flex justify-content-around align-items-center">
        <form onSubmit={HandleSubmit}>
          {inputFields.map((input, index) => {
            return (
              <div
                className="d-flex justify-content- align-items-center"
                key={index}>
                <input
                  type="text"
                  className="form-control mx-3"
                  name="name"
                  value={input.name}
                  onChange={(event) => HandleChange(index, event)}
                  placeholder="enter name"
                />
                <input
                  type="text"
                  className="form-control mx-3"
                  name="course"
                  value={input.course}
                  onChange={(event) => HandleChange(index, event)}
                  placeholder="enter course"
                />
                <input
                  type="number"
                  className="form-control mx-3"
                  name="rollno"
                  value={input.rollno}
                  onChange={(event) => HandleChange(index, event)}
                  placeholder="enter rollno"
                />

                {inputFields.length > 1 ? (
                  <button
                    className="btn btn-primary"
                    onClick={() => RemoveFields(index)}>
                    remove
                  </button>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </form>
        {selected.length < 1 ? (
          <>
            <button className="btn btn-primary" onClick={HandleSubmit}>
              submit
            </button>
            <button className="btn btn-primary" onClick={MoreFields}>
              Add More
            </button>
          </>
        ) : (
          ""
        )}

        {update === true ? (
          <button className="btn btn-primary" onClick={() => updateSingle()}>
            update
          </button>
        ) : (
          ""
        )}
        {editAll === true ? (
          <button className="btn btn-primary" onClick={updateAll}>
            update All
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default InputFrom;
