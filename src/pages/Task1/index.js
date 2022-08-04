import React,{useState} from "react";

function ColorChange() {
    
    const [allobject,setAllobject] = useState([    {"text":"Hello","color":"red"},
    {"text":"Hi","color":"green"},
    {"text":"Tata","color":"yellow"},
    {"text":"Bye","color":"blue"},
    {"text":"Good","color":"purple"},
    {"text":"Bad","color":"grey"},
    {"text":"Easy","color":"black"},
    {"text":"Tasty","color":"violet"}
])
    

    return  <div>
                
                {
                    allobject.map((item) => {
                        console.log("Text : " + item.text)
                        console.log("Color : " + item.color)
                        return (
                            <p style={{color : item.color}}>{item.text}</p>
                        )
                    })
                }
            </div>
}

export default ColorChange;