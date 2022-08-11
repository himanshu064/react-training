import React, { useState } from 'react'

export default function Index() {

    {function getData(){
        const url = "https://dummyjson.com/comments?limit=25&skip=0";
         fetch(url)
         .then((response) => {
            //  return response.text();
             return response.json();
         })
         .then((data) => {
             console.log(data);
         });
     }
     getData()};

     const [data , setData] = (useState) => ({

     });

const clickPrevious = () => {
    
};
const clickNext = () => {

};
  return (
<>
<button onClick={clickPrevious} > Previous</button>
<button onClick={clickNext} > Next</button>


</>

  )
}
