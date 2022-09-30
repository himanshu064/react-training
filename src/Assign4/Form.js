import React,{useState} from 'react';
import './style.css';

const Form = () => {
  const [inputFields, setInputFields] = useState([
    {firstname: '', lastname: '', position: ''}
  ]);
  const [result,setResult] = useState ([]);
  const [update,setUpdate] = useState ([]);
  // const [checked,setChecked] = useState (false);
  // Handle State Change
  const HandleChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }
  // Adding New Form
  const AddForm = () => {
    let newfield = {firstname: '', lastname: '', position: ''};
    setInputFields([...inputFields, newfield])
  }
  // Handle Submitt
  const HandleSubmit = (e) => {
    e.preventDefault();
    const add = [...result, ...inputFields];
    setResult(add);
    setInputFields([{firstname: '', lastname: '', position: ''}]);
  }
// Removing The Form
const RemoveForm = (index) => {
  let data = [...inputFields];
  data.splice(index, 1)
  setInputFields(data)
}
// Single Edit
const HandleEdit = (index)=>{
    const value = [result[index]];
    setInputFields(value);
    setUpdate(value);
}
// Single Delete
const HandleDelete = (index)=>{
  let data = [...result];
  data.splice(index,1);
  setResult(data);
}
// Handle Multiple Edit
const HandleEditMultiple = (e)=>{
    const values = [...result];
    const data = values.filter((item) => {
      if (item.checked) {
        return item;
      }
    });
    setResult(data);
}
// Handle Multiple Delete
const HandleDeleteMultiple = (e)=>{
  const values = [...result];
  const data = values.filter((item) => {
    if (!item.checked) {
      return item;
    }
  });
  setResult(data);
}
// Handle Check Box
const HandleCheck = (index) => {
  const values = [...result];
  values.forEach((item, id) => {
    if (id === index) {
      item.checked = !item.checked;
    }
  });
  setResult(values);
};
const HandleUpdate = ()=>{
  let Array1 = inputFields;
  let Array2 = update;
  let Array3 = Array1.splice(0, Array1.length, ...Array2);
  setInputFields(Array3);
  setInputFields([{firstname: '', lastname: '', position: ''}]);
  setUpdate([]);
}

  return (
    <>
    <form onSubmit={HandleSubmit} >
      {inputFields.map((input, index) => {
          return (
            <div key={index}>
      <label className='left' htmlFor='firstname'>Enter First Name</label>
      <input className='left' name='firstname' placeholder='First Name' value={input.firstname} 
       onChange={event => HandleChange(index, event)} />
      <label className='left' htmlFor='lastname'>Enter Last Name</label>
      <input className='left' name='lastname' placeholder='Last Name' value={input.lastname}
       onChange={event => HandleChange(index, event)} />
      <label className='left' htmlFor='position'>Enter Position</label>
      <input className='left' name='position' placeholder='Position' value={input.position}
       onChange={event => HandleChange(index, event)} />
       <button className='btn btn-danger custom-left' onClick={() => RemoveForm(index)}>Remove</button>
       </div>
          )
      })}
    </form>
    <hr />
    <div className="button">  
    
    <button className='btn btn-primary custom-margin' onClick={HandleEditMultiple}>Edit Multiple</button>
    <button className='btn btn-danger custom-margin' onClick={HandleDeleteMultiple}>Delete Multiple</button>
    
    <button className='btn btn-success custom-margin' onClick={AddForm}>Add</button>
    {update.length >=1?
    (<button className='btn btn-primary custom-margin' onClick={HandleUpdate}>Update</button>
    ):(
    <button className='btn btn-primary custom-margin' onClick={HandleSubmit}>Submit</button>
    )}
    </div>
    
    <hr />

    {/* Table For Show Data */}
    <table className='table'>
        <thead>
            <th>Status</th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Actions</th>
        </thead>
        <tbody>
            {result.map((e,index)=>{
              return (
                    <tr key={index}>
              <td> <input type='checkbox' checked={e.checked} onChange={() =>HandleCheck(index)} /> </td>  
              <td>{index + 1}</td>
              <td>{e.firstname}</td>
              <td>{e.lastname}</td>
              <td>{e.position}</td>
              <i onClick={()=>HandleEdit(index)} className="fa-solid fa-pen-to-square edit"></i>  
              <i onClick={()=>HandleDelete(index)} className="fa-solid fa-trash delete"></i>  
                 </tr>
                )
            })}               
        </tbody>
    </table>
    </>
  )
}

export default Form;
