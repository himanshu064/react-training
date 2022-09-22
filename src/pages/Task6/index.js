import React, { createContext, useEffect, useState } from "react";
import TodoSearch from "./TodoSearch";
import TodoTable from "./TodoTable";
import TodoFilters from "./TodoFilters";

export const TodoContext = createContext();
const TodoContextState = (props) => {
  const [allTasks, setTasks] = useState([]);
  useEffect(() => {
    let storage = localStorage.getItem("alltasks");
    if (storage) {
      setTasks(JSON.parse(storage));
    }
  }, []);
  //Adding a Task
  const updateTask = (text) => {
    if (text !== "") {
      const newSetTask = [
        ...allTasks,
        {
          title: text,
          completed: false,
        },
      ];
      setTasks(newSetTask);
      return localStorage.setItem("alltasks", JSON.stringify(newSetTask));
    }
  };
  //Deleting All the Tasks
  const deleteTask = () => {
    setTasks([]);
    localStorage.clear();
  };
  //When Task is Completed
  const completedTask = (key, index) => {
    const newAllTasks = [...allTasks];
    newAllTasks.find((element, idx) => {
      if (element.title === key && idx === index) {
        element.completed = !element.completed;
      }
    });
    setTasks(newAllTasks);
    localStorage.setItem("alltasks", JSON.stringify(newAllTasks));
  };
  //Deleting A single Task
  function deleteoneTask(index) {
    const newAllTasks = [...allTasks];
    newAllTasks.splice(index, 1);
    setTasks(newAllTasks);
    localStorage.setItem("alltasks", JSON.stringify(newAllTasks));
  }
  //Complete all Tasks
  const completeAll = () => {
    const newAllTasks = [...allTasks];
    newAllTasks.map((item) => {
      return (item.completed = true);
    });
    setTasks(newAllTasks);
    return localStorage.setItem("alltasks", JSON.stringify(newAllTasks));
  };
  //ShowAllTask
  const showAllTasks = () => {
    const showall = JSON.parse(localStorage.getItem("alltasks"));
    return setTasks(showall);
  };
  //All active Tasks
  const showAllActiveTasks = () => {
    const showactive = JSON.parse(localStorage.getItem("alltasks"));
    var updated = [];
    showactive.map((item) => {
      if (item.completed === false) {
        return updated.push(item);
      }
      return updated;
    });
    return setTasks(updated);
  };
  //All completed Tasks
  const showAllComletedTasks = () => {
    const complpetedTasks = JSON.parse(localStorage.getItem("alltasks"));
    var updated = [];
    complpetedTasks.map((item) => {
      if (item.completed === true) {
        return updated.push(item);
      }
      return updated;
    });
    return setTasks(updated);
  };
  return (
    <TodoContext.Provider
      value={{
        allTasks,
        updateTask,
        deleteTask,
        completeAll,
        deleteoneTask,
        completedTask,
        showAllTasks,
        showAllActiveTasks,
        showAllComletedTasks,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
function Todolist() {
  return (
    <TodoContextState>
      <TodoSearch />
      <TodoTable />
      <TodoFilters />
    </TodoContextState>
  );
}
export default Todolist;
