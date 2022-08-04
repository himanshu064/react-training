import React, { useState } from "react";
import TodoSearch from "./TodoSearch";
import TodoTable from "./TodoTable";
import TodoFilters from "./TodoFilters";

const TodoList = () => {
  let storage = localStorage.getItem("alltasks")
  var tasks;
  console.log(storage,"storage")
  if (storage === null) {
    tasks = []
  }
  else {
    tasks = JSON.parse(storage)
  }
  const [allTasks, setTasks] = useState(tasks)
    console.log("allTasks outside are",allTasks)
    

  //Adding a Task
  const updateTask = (text) => {
    if (text != "") {
      setTasks([...allTasks, {
        title: text,
        completed: false,
      }])
      console.log(allTasks,"updated all taskes are")
      tasks = allTasks;
      localStorage.setItem("alltasks", JSON.stringify(tasks))
       
    }
    
  }
  //Deleting All the Tasks
  const deleteTask = () => {
    setTasks([])
    localStorage.clear();
  }
  //When Task is Completed
  const completedTask = (key, index) => {
    const newAllTasks = [...allTasks]
    newAllTasks.find((element, idx) => {
      if (element.title === key && idx === index) {
        element.completed = !element.completed
      }
      tasks=newAllTasks
      localStorage.setItem("alltasks", JSON.stringify(tasks))
      return setTasks(newAllTasks)
    })
  }
  //Deleting A single Task
  function deleteoneTask(index) {
    const newAllTasks = [...allTasks]
    newAllTasks.splice(index, 1)
    setTasks(newAllTasks)
    localStorage.setItem("alltasks",JSON.stringify(newAllTasks))
  }
  //Complete all Tasks
  const completeAll = () => {
    const newAllTasks = [...allTasks]
    newAllTasks.map((item, index) => {
      console.log(item.completed, ":item", index)
      item.completed = true;
      setTasks(newAllTasks)
    })
  }
  //ShowAllTask
  const showAllTasks = () => {
    const showall = JSON.parse(localStorage.getItem("alltasks")) 
    console.log(showall)
    setTasks(showall)
  }
  const showAllActiveTasks = () => {
    const showactive = JSON.parse(localStorage.getItem("alltasks")) 
    console.log(showactive)
    var updated = []
    showactive.map((item) => {
      if (item.completed === false) {
        console.log(item.title)
        updated.push(item)
      }
    })
    console.log(updated)
    setTasks(updated)
  }
  const showAllComletedTasks = () => {
    const complpetedTasks = JSON.parse(localStorage.getItem("alltasks")) 
    var updated = []
    complpetedTasks.map((item) => {
      if (item.completed === true) {
        console.log(item.title)
        
        updated.push(item)
        
      }
    })
    console.log(updated)
   
    setTasks(updated)
  }

  return (
    <>
      <TodoSearch onClick={updateTask} onclick={deleteTask} completeall={completeAll} />
      <TodoTable tasks={allTasks} onclick={deleteoneTask} onComplete={completedTask} />
      <TodoFilters onClickAll={showAllTasks} onClickActive={showAllActiveTasks} onClickComplete={showAllComletedTasks} tasks={allTasks} />
    </>
  )
}

export default TodoList;