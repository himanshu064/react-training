import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const getLocalTask = () => {
    if (JSON.parse(localStorage.getItem("Task")) === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("Task"));
    }
  };
  const [task, setTask] = useState("");
  const [AllTask, setAllTask] = useState(getLocalTask());
  const [checked, setChecked] = useState(false);
  const HandleChange = (e) => {
    setTask(e.target.value);
  };
  // function to add task
  const HandleClick = (event) => {
    if (event.key === "Enter") {
      const TaskInfo = {
        id: Math.random(),
        name: task,
        status: false,
      };
      let data = [...AllTask, TaskInfo];
      setAllTask(data);
      localStorage.setItem("Task", JSON.stringify(data));
      setTask("");
      setChecked(false);
    }
  };
  // function to make task completed
  const HandleCheck = (id) => {
    let localtask = JSON.parse(localStorage.getItem("Task"));
    const updatedTask = localtask.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setAllTask(updatedTask);
    setChecked(false);
    localStorage.setItem("Task", JSON.stringify(updatedTask));
  };
  // funnction to know which task are active
  const HandleActive = () => {
    let localActive = JSON.parse(localStorage.getItem("Task"));
    let ActiveTask = localActive.filter((item) => item.status === false);
    let active = ActiveTask;
    setAllTask(active);
  };
  // function to know which task are completed
  const HandleCompleted = () => {
    let localComplete = JSON.parse(localStorage.getItem("Task"));
    let completedTask = localComplete.filter((item) => item.status === true);
    let Completed = completedTask;
    console.log(completedTask);
    setAllTask(Completed);
  };
  // function to delete task
  const DeleteTask = (id) => {
    let remove = AllTask.filter((item) => item.id !== id);
    setAllTask(remove);
    localStorage.setItem("Task", JSON.stringify(remove));
  };
  // function to show all task
  const ShowAll = () => {
    setAllTask(JSON.parse(localStorage.getItem("Task")));
  };
  useEffect(() => {
    localStorage.getItem("Task");
  }, [AllTask]);
  // function of check all button
  const HandleAllTask = () => {
    const StatusChange = AllTask.filter((item) => (item.status = true));
    setAllTask(StatusChange);
    localStorage.setItem("Task", JSON.stringify(StatusChange));
    setChecked(true);
  };
  return (
    <AppContext.Provider
      value={{
        task,
        HandleChange,
        HandleClick,
        AllTask,
        HandleCheck,
        HandleActive,
        HandleCompleted,
        ShowAll,
        DeleteTask,
        HandleAllTask,
        checked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };