import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.css';

const Form = () => {
    const [data,setData] = useState ({
        FirstName:"",
        LastName:"",
        Position:""
    });
    const [result,setResult] = useState ([]);




    const HandleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]:value});
    }
    const HandleSubmit = (e)=>{
        e.preventDefault();
        if (!data.FirstName || !data.LastName || !data.Position){
            alert("All Field Are Mandatory")
        }else{
        setResult([...result,data])
        }
    }
    console.log(result,'res')
    const HandleDelete = (index)=> {
        console.log(result,'index')
        // let del =  result.splice(index, 1);
        let del = result.filter((item)=>item.index !== index);
         setResult(del);
  
    };
  return (
    <>
       <form onSubmit={HandleSubmit} className="filter-form d-flex justify-content-around  align-items-center  flex-row  form" >
        <div className="mb-3">
          <label htmlFor="FirstName" className="form-label">
            First Name
          </label>
          <input onChange={HandleChange} name='FirstName' value={data.FirstName} type="text" className="form-control" placeholder="Enter First Name" />
        </div> 
        <div className="mb-3">
          <label htmlFor="LastName" className="form-label">
            Last Name
          </label>
          <input onChange={HandleChange} name='LastName' value={data.LastName} type="text" className="form-control" placeholder="Enter Last Name" />
        </div> 
        <div className="mb-3">
          <label htmlFor="Position" className="form-label">
            Position
          </label>
          <input onChange={HandleChange} name='Position' value={data.Position} type="text" className="form-control" placeholder="Enter Position" />
        </div> 
        <button className="btn btn-primary" type="submit"> Remove  </button>
        <button className="btn btn-primary" type="submit"> Add  </button>
        {/* <button onSubmit={HandleSubmit} className="btn btn-primary" type="submit"> Submit  </button> */}
        </form> 
        <br /> 
        <button onSubmit={HandleSubmit} className="button btn btn-primary" type="submit"> Submit  </button>
        <br />
        <br />
       
    {/* Table For Shoe Data */}
    <table className='table'>
        <thead>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Actions</th>
        </thead>
        <tbody>
            {result.map((element,index)=>{
                return (
              <tr key={index}>
              <td>{index + 1}</td>
              <td>{element.FirstName}</td>
              <td>{element.LastName}</td>
              <td>{element.Position}</td>
              <i className="fa-solid fa-pen-to-square"></i>
              <i onClick={()=>HandleDelete(index)} className="fa-solid fa-trash"></i>
          </tr>  
                )
            })}
               
        </tbody>
    </table>
    </>
  )
}

export default Form;
