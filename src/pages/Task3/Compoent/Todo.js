import React from "react";
import "../index.css";
import TodoList from "./TodoList";
import { useGlobalContext } from "../../Context";

const Todo = () => {
  const {
    task,
    HandleChange,
    HandleClick,
    AllTask,
    HandleActive,
    HandleCompleted,
    ShowAll,
    HandleAllTask,
    checked,
  } = useGlobalContext();

  return (
    <>
      <div className="todo-bg d-flex justify-content-center align-items-center flex-column">
        <div className="todo-container p-3">
          <div className="mb-3">
            <div className="d-flex justify-content-center  AddTask">
              <input
                type="text"
                className="form-control"
                placeholder="what needs to be done"
                value={task}
                onChange={HandleChange}
                onKeyPress={HandleClick}
              />
            </div>

            <div className="todo-task p-4">
              {AllTask.length === 0 ? (
                <h1 className="enter-task">Plese enter task !!!!!</h1>
              ) : (
                <TodoList />
              )}
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center checkAll">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={checked}
                  onChange={() => HandleAllTask()}
                />
                <label className="form-check-label">Check All</label>
              </div>
              <h1 className="count-task">No task....</h1>
            </div>
            <hr />
            <div className="task-btn">
              <button className="btn btn-primary" onClick={ShowAll}>
                All
              </button>
              <button className="btn btn-primary mx-2" onClick={HandleActive}>
                Active
              </button>
              <button className="btn btn-primary" onClick={HandleCompleted}>
                Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Todo;
