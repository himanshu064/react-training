import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {auth} from "../Firebase/firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import {useDispatch,useSelector} from 'react-redux';
import { setRegister } from '../redux/actions/formAction';

function Register() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });
    const state = useSelector((state)=>{
      return state
    })
      console.log(state,'state')

  const onHandleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const HandleSubmit = async (event) => {
    event.preventDefault();
    if (user.Password !== user.ConfirmPassword) {
      window.alert("Password does not match");
    return;
    }
    try {
      const result = await createUserWithEmailAndPassword(auth,user.Email,user.Password);
      dispatch(setRegister(result))
      window.alert(`Yahoo Sign Up Completed ${result.user.email}`);
    } catch (error) {
      window.alert(error.message);
    }
  }

  return (
      <>
    <form className='container'>
    <h2 className='loginhead'> Welcome To Register Page </h2>
    <div className="mb-3"  >
     <label htmlFor="Email" className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="name@example.com"
        name="Email"  value={user.Email} onChange={onHandleChange} />
    </div>
    <div className="mb-3">
     <label htmlFor="Password" className="form-label"> Password</label>
        <input type="password" className="form-control" placeholder="Enter Your Password" name="Password"  value={user.Password} onChange={onHandleChange} />
    </div>
    <div className="mb-3">
     <label htmlFor="ConfirmPassword" className="form-label"> Confirm Password</label>
        <input type="password" className="form-control" placeholder="Confirm Your Password" name="ConfirmPassword"  value={user.ConfirmPassword} onChange={onHandleChange} />
    </div>
  <div className="text-center">
  <button onClick={HandleSubmit}  type="button" className="btn btn-primary btn-block mb-4">Sign Up</button>
  </div>
  <div className="text-center">
    <p>Already a member. <Link to="/Login" className="nav-link"> Login here</Link> </p> 
  </div>
</form>
      </>
  )
}

export default Register;