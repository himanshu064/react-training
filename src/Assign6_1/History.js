import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

const History = () => {
    const HandleCopy =(item) => {
        // console.log(index,'index')
     navigator.clipboard.writeText(item.shortcode);
      };
let history = JSON.parse(localStorage.getItem("BothUrl"));
console.log(history,'a')
return (
<>
<Link to='/'> <h2>Shortener</h2></Link>
<h2 className='container'>Your History</h2>
{history.map((item)=>{
return(
 <div className="area">{item.shortcode}  <i onClick={()=>HandleCopy(item)} className="fa-solid fa-copy"></i>      </div>
)
})}
</>
)
}

export default History;
