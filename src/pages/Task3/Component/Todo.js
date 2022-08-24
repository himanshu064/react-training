// import react from "react";
import "../Todo.css";
import TodoList from "./TodoList";
import { useGlobalContext } from "../../Context";

const Todo = ()=>{
    const {
        task,
        allTask,
        check,
        HandleChange,
        HandleClick,
        HandleActive,
        HandleComplete,
        ShowAll,
        HandleAllTask

    } = useGlobalContext();
    return(
    <>
    <div>
        <h3 className="head">Welcome In Todo List...</h3>
    </div>
    <div className="container">
    <div className="todo-bg d flex justify-content-center align-items-center flex-column">
        <div className="todo-container p-3">
            <div className="mb-3">
                <div className="d-flex justify-content-center  AddTask">
                    <input type="text" className="form-control" placeholder="What needs to be done" value={task} onChange={HandleChange} onKeyPress={HandleClick} />
                </div>
                <div className="todo-task p-4">
                {allTask.length ===0 ? (
                    <h4 className="enter-task"> Please Enter Your Task...</h4>
                ) : (
                    <TodoList />
                )}
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center  CheckAll">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" check={check} onChange={() =>HandleAllTask()} />
                        <label className="form-check-label">Check All</label>
                    </div>
                    <h4 className="count-task">No task....</h4>
                </div>
                <hr />
                <div className="task-btn">
                    <button className="btn1" onClick={ShowAll}>All</button>
                    <button className="btn1" onClick={HandleActive}>Active</button>
                    <button className="btn1" onClick={HandleComplete}>Completed</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
    );
};

export default Todo;