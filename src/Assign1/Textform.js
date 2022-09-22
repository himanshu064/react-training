import React from 'react';
import { useState } from 'react';
import './style.css';

const TextForm = () => {
const [text,setText] = useState ("");
const handleOnChange = (event)=>{
setText (event.target.value);
console.log(text,'text')
}
return (
<>
<h3>Enter Your Text Here</h3>
<div className="mb-3"> 
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<h2>Preview</h2>
<p id='preview' className='preview'> <pre>{text.length>0?text:"Nothing to preview!"}</pre> </p>
<input readOnly type='text'></input>
</>
)
}

export default TextForm;