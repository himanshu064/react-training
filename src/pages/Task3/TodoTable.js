import React from "react";
import classes from "./index.module.css";


function TodoTable({tasks,onclick,onComplete}) {
    function deleteTask(index){
        onclick(index)
    }
    function completedTask(key,index){
        return onComplete(key,index) 
    }
    return (
        <div  className={`${classes.heading}`}> 
            <table>
                <tbody >
                    {
                        tasks&&
                        tasks.map((item,index) => {
                            return (
                                
                                <tr key={index} >
                                    <td>
                                        {index+1}
                                    </td>
                                    <td  style={{textDecoration : item.completed?"line-through":"none"}}>
                                        {item.title}
                                    </td>
                                    <td>
                                        <input type="button" value="Completed" onClick={()=>{completedTask(item.title,index)}} />
                                    </td>
                                    <td>
                                        <input type="button" value="Delete" onClick={()=>{deleteTask(index)}} />
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