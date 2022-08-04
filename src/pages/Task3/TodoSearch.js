import React, {useState} from "react";
import classes from "./index.module.css";

function TodoSearch( params ) {
    const [text,setText] = useState("")
    //Add Function
    function add() {
        params.onClick(text);
        setText('')
    }
    //Delete function
    function deleteAll() {
        params.onclick()   
    }
    return (<div className={`${classes.back}`}>
                <h1>Todo List</h1>
                <div className={`${classes.heading}`} >
                <form>
                    <div className={`${classes.formpaddingdiv}`}>
                    <input  className={`${classes.textfields}`} type="text" value={text} placeholder="Enter Your Task" onChange={ e => {setText(e.target.value)}} />
                    </div >
                    <div className={`${classes.formpaddingdiv}`}>
                    <input type="button" value="Add" onClick={()=>add()}/>
                    </div>
                    <div className={`${classes.formpaddingdiv}`}>
                    <input type="button" value="Delete All" onClick={()=>deleteAll()} />
                    </div>
                </form>
                </div> <br/> 
            </div>
    )
}
export default TodoSearch;