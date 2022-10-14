import React,{useState,useEffect} from 'react';
import { useGlobalContext } from "../../context";
import { useNavigate } from "react-router-dom";

import './style.css';

function Word(props){
  const {text,active,correct} = props;
  if(correct === true){
    return <span className='correct' >{text} </span>
  }
  if(correct === false){
    return <span className='incorrect' >{text} </span>
  }
  if(active){
    return <span className='active' >{text} </span>
  }
  return <span>{text} </span>
}
Word =  React.memo(Word);

const Test = () => {

  const {Timer,userInput,activeWordIndex,correct,typeData,startInput,test} = useGlobalContext();
  const [min, setMin] = useState(Timer);
  const [sec, setSec] = useState(0);
  const navigate = useNavigate();
  console.log(test,'trssdd')
  //  const p = (userInput.split(' '));
  useEffect(() => {
    if (min === 0 && sec === 0) {
      setMin(0);
      setSec(0);
      navigate("/result");
    }
    // if(typeData.length === p.length - 1){
    //   navigate("/result");
    // }
     else {
      var timer;
      timer = setTimeout(() => {
        setSec(sec - 1);
        if (sec === 0) {
          setMin(min - 1);
          setSec(59);
        }
      }, 1000)
    
      return () => clearTimeout(timer)
    }
    // eslint-disable-next-line
  },[min,sec,navigate])

  return (
    <>
      <div className="container">
        <h1>{min} : {sec}</h1>
        <p>{typeData.map((word, i) => {
          return <span key={i}>
            <Word
                  text={word}
                  active={i === activeWordIndex}
                  correct={correct[i]}
                 />
          </span> 
        })}</p>
        <textarea onChange={(e)=>startInput(e.target.value)} value={userInput} cols="90" rows="10"></textarea>
      </div>
    </>
  )
}

export default Test;