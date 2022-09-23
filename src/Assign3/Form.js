import React from 'react';
import './style.css';

const Form = () => {
    window.addEventListener("paste",e=>{
        console.log(e,'e');
        if(e.clipboardData.files.length >0){
            const fileInput = document.querySelector('#myFile');
            console.dir(fileInput);
            fileInput.files=e.clipboardData.files;
        }
      });

    window.addEventListener("paste",e=>{
        const clipboardData = e.clipboardData;
        const pastedData = clipboardData.getData('Text');
        // console.log(pastedData,'pasteddata');
        document.getElementById("myBox").value=pastedData; 
      });

    
    //   // Stop data actually being pasted into div
    //   // e.stopPropagation();
    //   // e.preventDefault();
    
    //   // Get pasted data via clipboard API
    //  let clipboardData = e.clipboardData;
    //   // clipboardData = e.clipboardData || window.clipboardData;
    //  let pastedData = clipboardData.getData('Text');
    

  return (
    <>
    <input type='file' name='myfile' id ='myFile'/>
    <button type='submit'>Upload</button>
    <hr />
    <hr />
    <textarea disabled className='form-control' id='myBox' rows='8' ></textarea>
    </>
  )
}

export default Form;
