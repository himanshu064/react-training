import React,{ useState } from 'react';
import './style.css';

const Palette = () => {
  let [colors,setColors] = useState (['#ECA400','#EAF8BF','#006992','#27476E','#001D4A']);
  const RandomHex = () =>{
    let total=[];
    for(let i=0;i<=4;i++){
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      total.push(randomColor);
    }
    // const newColors = [...colors,...total];

    // Clipboarddata in object
    let pasredData = JSON.stringify(Object.assign({},total));
    navigator.clipboard.writeText(pasredData); 

    // Clipboarddata in Array
    // navigator.clipboard.writeText(JSON.stringify(total));
    setColors(total);
  }
  // document.addEventListener('keyup',(e)=>{
  //   if(e.code === 'Space') {
  //     RandomHex();
  //   }
  // })
  document.body.onkeyup = function(e){
    console.log(e,'e')
    if(e.code === 'Space'){
      RandomHex();
    }
}

  return (
    <>
    <div className="text">
    <h4>Color Palette Generator</h4>
    </div>
    <div className="view">
      <div className="container row">
    {colors.map((color,index)=>{
      return(
        <div className="col" key={index}>
     <div className='box' >
     <div className='color' style={{'background':color}} />
     <div className='card-item'>{color}</div>
    </div>
    </div>
      )
    })}
    </div>
    </div>
    <div className="button">
    <button onClick={RandomHex} className='btn'>Generate Palette</button>
    <p className='spacebar'>Or just press the "Spacebar" to generate new palettes.</p>
    </div>
    </>
  )
}

export default Palette;
