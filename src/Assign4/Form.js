import React,{useState} from 'react';
import './style.css';

const Form = () => {
  const [inputFields, setInputFields] = useState([
    {id: Math.floor(Math.random() * 100),firstname: '', lastname: '', position: '',checked:false}
  ]);
  const [result,setResult] = useState ([]);
  const [update,setUpdate] = useState ([]);
  // Handle State Change
  const HandleChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  }
  // Adding New Form
  const AddForm = () => {
    let newfield = {id:Math.floor(Math.random()*100),firstname: '', lastname: '', position: '',checked:false};
    setInputFields([...inputFields, newfield])
  }
  // Handle Submitt
  const HandleSubmit = (e) => {
    e.preventDefault();
    const add = [...result, ...inputFields];
    setResult(add);
    setInputFields([{id:Math.floor(Math.random()*100), firstname: '', lastname: '', position: '',checked:false}]);
  }
// Removing The Form
const RemoveForm = (index) => {
  let data = [...inputFields];
  data.splice(index, 1)
  setInputFields(data)
}
// Single Edit
const HandleEdit = (firstname)=>{
  const updateOneItem = [...result];
  const data = updateOneItem.filter((item) => item.firstname === firstname);
  data.map((item) => {
    const { firstname, lastname, position, id } = item;
    return setInputFields([
      {
        id: id,
        firstname: firstname,
        lastname: lastname,
        position: position,
      },
    ]);
  });
}

const updateSingle = () => {
  let inputFiledData = [...inputFields];
  let updatedData = [...result];
  let object = inputFiledData.reduce(
    (obj, item) =>
      Object.assign(obj, {
        id: item.id,
        firstname: item.firstname,
        lastname: item.lastname,
        position: item.position,
      }),
    {}
  );

  let Data = updatedData.map((item) => {
    if (item.id === object.id) {
      return {
        ...item,
        firstname: object.firstname,
        lastname: object.lastname,
        position: object.position,
      };
    }
    return item;
  });
  setResult(Data);
  setInputFields([
    {
      firstname: "",
      lastname: "",
      position: "",
    },
  ]);
};
// Single Delete
const HandleDelete = (index)=>{
  let data = [...result];
  data.splice(index,1);
  setResult(data);
}
// Handle Multiple Edit
const HandleEditMultiple = () => {
  let checkTrue = [...result];
  setUpdate(checkTrue);
  let data = checkTrue.filter((item) => item.checked === true);
  setInputFields(
    data.map((items) => {
      const { id, firstname, lastname, position } = items;
      return {
        id: id,
        firstname,
        lastname,
        position,
      };
    }))
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
// Update Value
const HandleUpdate = () => {
  let tableToUpdate = [...result];
  let filedToData = [...inputFields];
  let res = tableToUpdate.map((inputItem) => {
    const { id } = inputItem;
    let index = filedToData.find((item) => item.id === id);
    if (index) {
      return index;
    }
    return inputItem;
  });
  setResult(res);
  setInputFields([
    {
      firstname: "",
      lastname: "",
      position: "",
    },
  ]);
  setUpdate([]);
};

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
    <button className='btn btn-primary custom-margin' onClick={updateSingle}>UpdateSingle</button>
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
              <i onClick={() => HandleEdit(e.firstname)} className="fa-solid fa-pen-to-square edit"></i>  
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
