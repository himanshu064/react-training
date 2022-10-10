import React,{useState,useEffect} from 'react';
import { useGlobalContext } from "../../context";
import './style.css';

const Test = () => {
  const { Timer } = useGlobalContext();
  const[min,setMin] = useState (Timer);
  const[sec,setSec] = useState (0);
  const[userInput,setUserInput]= useState('');
  const [index,setIndex] = useState(0);
  const[correct,setCorrect]= useState('');
  const[inCorrect,setInCorrect]= useState('');
  const typeData =`hello Myself Abhishek Kumar. I have done my B.tech from Giani zail singh campus college of engineering and technology.`.split(' ');
  
  const StartTest = (e)=>{
      setUserInput(e.target.value);
      if(userInput.endsWith(' ')){
      setIndex(i=>i+1)
      }
  }
    useEffect(()=>{
      if(min===0 && sec ===0){
        setMin(0);
        setSec(0);
         window.location ='/result';
      }else{
      var timer;
      timer = setTimeout(()=>{
        setSec(sec - 1);
        if (sec ===0){
          setMin(min - 1);
          setSec(59);
        }
      },1000)
      return ()=>clearTimeout(timer)
    }
    },[min,sec])
    
  
  return (
    <>
    <div className="container">
      <h1>{min} : {sec}</h1>
    <p>{typeData.map((word,i)=>{
      if(i === index){
        return <b style={{'color':'blue'}}>{word} </b>
      }
      return <span>{word} </span>
    })}</p>
    <textarea onChange={StartTest} cols="90" rows="10"></textarea>
    </div>
    
    </>
  )
}

export default Test;