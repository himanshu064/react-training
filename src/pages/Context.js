import React, {useState, useContext, useEffect} from 'react';

const Context = React.createContext();

const Provider = ({children}) =>{
    const localTask = () =>{
        if (JSON.parse(localStorage.getItem("Task")) === null) {
            return [];
        } else{
                return JSON.parse(localStorage.getItem("Task"));
          }    
    };
    const [task, setTask] = useState("");
    const [allTask, setAllTask] = useState(localTask());
    const [check, setCheck] = useState("false");

    const HandleChange =(event) =>{
        setTask(event.target.value)
    };

    //Add Task
    const HandleClick = (event) =>{
      if (task.length ===0){
      } else if
         (event.key === "Enter"){
          const TaskInfo = {
            id: Math.random(),
            name:task,
            status:false,
          };
            let data = [...allTask, TaskInfo];
            setAllTask(data);
            localStorage.setItem("Task",JSON.stringify(data));
            setTask("");
            setCheck("false");
        }
    }

    //Task Get Completed
    const HandleCheck = (id) => {
        let localtask = JSON.parse(localStorage.getItem("Task"));
        const updatedTask = localtask.map((item) =>{
            if(item.id ===id) {
                item.status = !item.status;
            }
            return item;
        });
        setAllTask(updatedTask);
        setCheck("false");
        localStorage.setItem("Task", JSON.stringify(updatedTask));
    };

    //Tasks Are Active
    const HandleActive = () =>{
        let localActive = JSON.parse(localStorage.getItem("Task"));
        let ActiveTask = localActive.filter((item) => item.status ===false);
        let active = ActiveTask;
        setAllTask(active);
    };

    //Tasks Are Completed
    const HandleComplete = () => {
        let localComplete = JSON.parse(localStorage.getItem("Task"));
        let completeTask = localComplete.filter((item) => item.status ===true);
        let complete = completeTask;
        setAllTask(complete);
    };

    //Delete Task
    const DeleteTask = (id)=> {
        let del = allTask.filter((item) =>item.id !==id);
        setAllTask(del);
        localStorage.setItem("Task",JSON.stringify(del));
    };

    //View All Task
    const ShowAll =()=>{
        setAllTask(JSON.parse(localStorage.getItem("Task")));
    };
    useEffect (() => {
        localStorage.getItem("Task");
    }, [allTask]);

    //Check All Button
    const HandleAllTask = ()=>{
    const StatusChange = allTask.filter((item) => (item.status = true));
    setAllTask(StatusChange);
    localStorage.setItem("Task",JSON.stringify(StatusChange));
    setCheck(true);
    };

    return (
        <Context.Provider value={{
            task,
            allTask,
            check,
            HandleChange,
            HandleClick,
            ShowAll,
            HandleCheck,
            HandleActive,
            HandleComplete,
            DeleteTask,
            HandleAllTask
        }}>
         {children}
        </Context.Provider>
    );

};

export const useGlobalContext =() => {
    return useContext(Context);
};
export {Context, Provider};