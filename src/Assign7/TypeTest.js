import React from 'react';

const TypeTest = () => {
    const minutes = [1,2,3,5,10];
  return (
    <>
    <div className="container">
        <h1>Check your typing skills in a minute</h1>
        <a class="nav-link dropdown-toggle" href="\" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            1 Minute Test
          </a>
        {minutes.map((item,index)=>{
            return(
                <div>
                   <li class="nav-item dropdown">       
                   <ul class="dropdown-menu">
                   <li><a class="dropdown-item" href="\">{item}</a></li>
                   </ul>
                   </li>
                </div>
            )          
        })}
        <button>START TEST</button>
    </div>
    </>
  )
}

export default TypeTest;
