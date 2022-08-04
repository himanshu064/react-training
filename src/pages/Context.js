import React,{useContext,useState} from "react"
const AppContext=React.createContext();
const AppProvider=({children})=>{
    let filterTask; 
    const [task,setTask]=useState("");
    const [AllTask,setAllTask]=useState([])
    const [completedTask,setCompletedTask]=useState([]);
    const HandleChange=(e)=>{
      setTask(e.target.value)
    }
    const HandleClick=()=>{
        setTask("");
       setAllTask([...AllTask,task])
      }
      const DeleteTask=(ITEM,INDEX)=>{
        const oldTask= JSON.parse(localStorage.getItem("AllTask"))
          filterTask=oldTask.filter((item,index)=>item[index]!==ITEM[INDEX]);
          setAllTask(filterTask)
        let CompletedTask=oldTask.filter((item,index)=>item[index]===ITEM[INDEX])
         setCompletedTask([...completedTask,CompletedTask])
          }
      localStorage.setItem("AllTask",JSON.stringify(AllTask))
      localStorage.setItem("completedArray",JSON.stringify(completedTask))
    return (
        <AppContext.Provider value={{task,HandleChange,HandleClick,DeleteTask}}>{children}</AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  export { AppContext, AppProvider };