// import react from "react";
import { useGlobalContext } from "../../Context";

const TodoList = ()=>{
    const {
    allTask,
    HandleCheck,
    DeleteTask
    } = useGlobalContext();

    return(
        <>
        {allTask.map((item, index) =>{
            return(
                <div className="form-check d-flex justify-content-between align-items-center mt-3" key={index}>
                <div>
                    <input className="form-check-input" type="checkbox" checked={item.status} onChange={()=>HandleCheck(item.id)} />
                    {item.status ===false ? (
                     <label className="form-check-label completed">{item.name}</label>
                    ) : (
                        <label className="form-check-label completed">{item.name}</label>
                    )}   
                </div>
                {item.status === true ? (
                    ""
                ) : (
                    <div className="remove-icon">
                    <i className="fa-solid fa-xmark  del" onClick={() => DeleteTask(item.id)}></i>
                </div>
                )}   
            </div>
            );
        })}   
        </>
    );
};

export default TodoList;