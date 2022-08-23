import React,{useContext} from "react";
import classes from "./index.module.css";
import { TodoContext } from ".";

function Filters() {
    const data = useContext(TodoContext);
    const storage = localStorage.getItem("alltasks")
    function activeTasks() {
        data.showAllActiveTasks()
    }
    function completedTasks() {
        data.showAllComletedTasks()
    }
    return storage && <div className={`${classes.back} ${classes.heading} ${classes.displayInline}`} >
        <div className={`${classes.formpaddingdiv}`}>
            <input type="button" value="All" onClick={() => data.showAllTasks()} />
        </div>
        <div className={`${classes.formpaddingdiv}`}>
            <input type="button" value="Active" onClick={() => activeTasks()} />
        </div>
        <div className={`${classes.formpaddingdiv}`}>
            <input type="button" value="Completed" onClick={() => completedTasks()} />
        </div>
    </div>
}
export default Filters;