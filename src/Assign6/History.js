import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const History = () => {
   let history = JSON.parse(localStorage.getItem("links"));
   console.log(history,'a')
  return (
    <>
    <Link to='/'> <h2>Shortener</h2></Link>
    <h2 className='container'>Your History</h2>
       {history.map((item,index)=>{
        return(
            <div className="area">{item}</div>
        )
       })}
    </>
  )
}

export default History;
