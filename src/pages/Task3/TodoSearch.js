import React, {useState} from "react";
import classes from "./index.module.css";

function TodoSearch( params ) {
    const [text,setText] = useState("")
    //Add Function
    function handleSubmit(event) {
        event.preventDefault()
        params.onClick(text);
        setText('')
    }
    //Delete function
    function deleteAll() {
        params.onclick()   
    }
    //Complete Function
    function completeAll() {
        params.completeall();
    }
    return (<div className={`${classes.back}`}>
                <h1>Todo List</h1>
                <div className={`${classes.heading}`} >
                <form onSubmit={handleSubmit}>
                    <div className={`${classes.formpaddingdiv}`}>
                    <input  className={`${classes.textfields}`} type="text" value={text} placeholder="Enter Your Task" onChange={ e => {setText(e.target.value)}} />
                    </div >
                    <div className={`${classes.formpaddingdiv}`}>
                    <input type="button" value="Add" onClick={(event)=>handleSubmit(event)}/>
                    </div>
                    <div className={`${classes.formpaddingdiv}`}>
                    <input type="button" value="Delete All" onClick={()=>deleteAll()} />
                    </div>
                    <div className={`${classes.formpaddingdiv}`}>
                    <input type="button" value="Complete All" onClick={()=>completeAll()} />
                    </div>
                </form>
                </div> <br/> 
            </div>
    )
}
export default TodoSearch;