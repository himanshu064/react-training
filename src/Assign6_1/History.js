import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const History = () => {
    const HandleCopy =(item) => {
     navigator.clipboard.writeText(item.url);
      };
let history = JSON.parse(localStorage.getItem("visitedLink"));
console.log(history,'a')
return (
<>
<Link to='/'> <h2>Shortener</h2></Link>
<h2 className='container'>Your History</h2>
{history.map((item)=>{
return(
 <div className="area">{item.url}  <i onClick={()=>HandleCopy(item)} className="fa-solid fa-copy"></i>      </div>
)
})}
</>
)
}

export default History;
