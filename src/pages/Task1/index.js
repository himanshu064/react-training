import React , {useState} from 'react';
import "./index.css";

    const Task1 =()=>{
      const [data] = useState([
        {id: Math.random(), text: "Walk the dog", textColor: "red"},
        {id: Math.random(), text: "Prepare lunch", textColor: "green"},
        {id: Math.random(), text: "Fix the bugs", textColor: "yellow"},
        {id: Math.random(), text: "Code all day", textColor: "blue"},
        {id: Math.random(), text: "Sleep", textColor: "black"} ,
      ])
      return (
        <>  
        {data.map((items , index)=>{
          const {text , textColor} = items
          return(
            <div className="text-wrap" key={index}>
              <div className="container">
              <h2>text is : <span style={{color:`${textColor}`}}>{text}</span></h2>
              <h2>text Color is : <span style={{color:`${textColor}`}}>{textColor}</span></h2>
              </div>        
            </div>
          )
        })}
        </>
      
  )
}
export default Task1;