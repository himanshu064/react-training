import React, { useState } from "react";
import TodoSearch from "./TodoSearch";
import TodoTable from "./TodoTable";

const TodoList = () => {
    let storage = localStorage.getItem("alltasks")
    if (storage===null) {
        var tasks = []  
    }
    else{
        var tasks = JSON.parse(storage)
    }
    const [allTasks, setTasks] = useState(tasks)
    tasks=allTasks;
    localStorage.setItem("alltasks",JSON.stringify(tasks))
    //Adding a Task
    const updateTask = (text) => {
        if (text!="") {
          setTasks([...allTasks, {
            title: text,
            completed: false,
        }])
        localStorage.setItem("alltasks",JSON.stringify(tasks) )
        }
    }
    //Deleting All the Tasks
    const deleteTask = () => {
        setTasks([])
    }
    //When Task is Completed
    const completedTask = (key,index) => {
        const newAllTasks = [...allTasks]
        newAllTasks.find((element,idx)=>{
            if (element.title===key&&idx===index) {
                element.completed=!element.completed       
            }
            return setTasks(newAllTasks)
            })
    }
    //Deleting A single Task
    function deleteoneTask(index) {
        const newAllTasks = [...allTasks]
        newAllTasks.splice(index, 1)
        setTasks(newAllTasks)
    }
    return (
        <>
            <TodoSearch onClick={updateTask} onclick={deleteTask} />
            <TodoTable tasks={allTasks} onclick={deleteoneTask} onComplete={completedTask} />
        </>
    )
}

export default TodoList;