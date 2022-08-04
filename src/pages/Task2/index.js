import { useState } from "react";
import './index.css'

export default function Table() {

  const [multiple, setMultiple] = useState(3);

  function onMultipleChanged(events) {
    setMultiple(events.target.value);
  }

  return (
    <>
      <div className="App">
        <h1 className="header">Multiplication Tables</h1>
        <input type="number" className="num" value={multiple} onChange={onMultipleChanged} />
<Num mul={multiple}/>
      </div>
    </>
  );
}
const Num=({mul})=>{
  const times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return(
    <>
    <ul>
  {times.map((t) => {
    return (
      
    <div className="result">

      <li className="result" key={t}>
      {mul} X {t}  = {t * mul}
      </li>
    </div>


    );
  })}
</ul>
    </>
  )
  
}