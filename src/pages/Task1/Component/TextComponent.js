import React,{useState} from "react"
import "../color.css"
const TextComponent=()=>{
    const [data]=useState([
        {id: Math.random(), text: "Walk the dog", textColor: "red"},
        {id: Math.random(), text: "Prepare lunch", textColor: "green"},
        {id: Math.random(), text: "Fix the bugs", textColor: "yellow"},
        {id: Math.random(), text: "Code all day", textColor: "blue"},
        {id: Math.random(), text: "Sleep", textColor: "black"},
        {id: Math.random(), text: "Mohit", textColor: "orange"},
      ])
    return (
        <>
      {data.map((items,index)=>{
        const {text,textColor}=items
        return (
            <div className="text-wrapper" key={index}>
                 <h1>Text is : <span style={{color:`${textColor}`}}>{text}</span></h1>
                    <h1> Text color is : <span style={{color:`${textColor}`}}>{textColor}</span></h1>
            </div>
        )
      })}
        </>
    )
}
export default TextComponent