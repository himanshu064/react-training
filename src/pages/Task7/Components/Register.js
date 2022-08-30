import React,{useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import {auth} from "../../Firebase/firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

function Register() {
  const [user, setUser] = useState({
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

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
      window.alert(`Yahoo Sign Up Completed ${result.user.email}`);
      <Navigate to="/Welcome" />;
    } catch (error) {
      window.alert(error.message);
    }
  } 
  
  const googleProvider = new GoogleAuthProvider()
  const signInWithGoogle = () =>{
  signInWithPopup(auth, googleProvider).then(res => {
  window.alert("Log In With Google Successfully")
  })
  .catch((error) => {
  window.alert(error.message);
  });
  return;
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
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
      </div>
    </div>
  </div>
  <div className="text-center">
  <button onClick={HandleSubmit}  type="button" className="btn btn-primary btn-block mb-4">Sign Up</button>
  </div>
  <div className="text-center">
  <p>or</p>
  <p>Sign Up With Google  </p>   
  <button type="button" className="btn btn-link btn-floating mx-1">
  <i onClick={signInWithGoogle} className="fab fa-google fa-2x"></i>
  </button>
  <br />
  <br />
    <p>Already a member. <Link to="/Login" className="nav-link"> Login here</Link> </p> 
  </div>
</form>
      </>
  )
}

export default Register;