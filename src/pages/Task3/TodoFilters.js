import React,{usestate} from "react";
import classes from "./index.module.css";

function Filters(props){

    function allTasks() {
        props.onClickAll()
    }
    function activeTasks() {
        props.onClickActive()
    }
    function completedTasks() {
        props.onClickComplete()
    }

    return <div className={`${classes.back} ${classes.heading} ${classes.displayInline}`} >
        <div className={`${classes.formpaddingdiv}`}>
            {/* <input type="button" value="All" onClick={()=>allTasks()}/> */}
            <input type="button" value="All" onClick={props.onClickAll}/>
        </div>
        <div className={`${classes.formpaddingdiv}`}>
            <input type="button" value="Active" onClick={()=>activeTasks()} />
        </div>
        <div className={`${classes.formpaddingdiv}`}>
            <input type="button" value="Completed" onClick={()=>completedTasks()} />
        </div>
    </div>
}

export default Filters;