import React, { useContext } from "react";
import classes from "./index.module.css";
import { TodoContext } from ".";

function TodoTable() {
    const data = useContext(TodoContext);
    function deleteTask(index) {
        data.deleteoneTask(index)
    }
    function completedTask(key, index) {
        return data.completedTask(key, index)
    }
    return (
        <div className={`${classes.heading}`}>
            <table>
                <tbody >
                    {
                        data.allTasks && data.allTasks.map((item, index) => {
                            return (
                                <tr key={index} >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td style={{ textDecoration: item.completed ? "line-through" : "none" }}>
                                        {item.title}
                                    </td>
                                    <td>
                                        <input type="button" value="Completed" onClick={() => { completedTask(item.title, index) }} />
                                    </td>
                                    <td>
                                        <input type="button" value="Delete" onClick={() => { deleteTask(index) }} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default TodoTable;