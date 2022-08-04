import React,{useContext,useEffect,useState} from "react"
const AppContext=React.createContext();
const AppProvider=({children})=>{
   
    const [task,setTask]=useState("");
const [AllTask,setAllTask]=useState([])

    const HandleChange=(e)=>{
      setTask(e.target.value)
    }
    const HandleClick=(event)=>{
if(event.key==="Enter"){
  const TaskInfo={
    id:Math.random(),
    name:task,
    status:false
   }
  setAllTask([...AllTask,TaskInfo])
  setTask("")
}     
      }  
      const HandleCheck=(id)=>{
const updatedTask=AllTask.map((item)=>{
  if(item.id===id){
    item.status=!item.status
  }
  return item

})

setAllTask(updatedTask)
      } 
      const HandleActive=()=>{
      let  ActiveTask=AllTask.filter((item)=>item.status===false)
        setAllTask(ActiveTask)
      }
      const HandleCompleted=()=>{
        let completedTask=AllTask.filter((item)=>item.status===true)
        setAllTask(completedTask)
      }
      localStorage.setItem("Task",JSON.stringify(AllTask))
    return (
        <AppContext.Provider value={{task,HandleChange,HandleClick,AllTask,HandleCheck,HandleActive,HandleCompleted}}>{children}</AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext);
  };
  export { AppContext, AppProvider };