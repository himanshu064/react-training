import React,{useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {auth} from "../../Firebase/firebase";

function Login() {
  const [user, setUser] = useState({
    Email: "",
    Password: "",
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
    if (!user.Password || !user.Email) {
      window.alert("Please fill out the filed");
      return;
    }
   try {
    const result = await signInWithEmailAndPassword(auth,user.Email, user.Password);
    window.alert(`Yahoo Log In Completed ${result.user.email}`);
    <Navigate to="/Welcome" />;
   } catch (error) {
    window.alert(error.message);
   }  
  };

  const googleProvider = new GoogleAuthProvider()
  const signInWithGoogle = () =>{
  signInWithPopup(auth, googleProvider).then(res => {
  window.alert("Log In With Google Successfully");
  <Navigate to="/Welcome" />;
  })
  .catch((error) => {
  window.alert(error.message);
  });
  return;
  }

  return (
    <>
     <form className='container' >
    <h2 className='loginhead'> Welcome To Log In Page </h2>
    <div className="mb-3" >
     <label htmlFor="Email" className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="name@example.com"
        name="Email" value={user.Email} onChange={onHandleChange}/>
    </div>
    <div className="mb-3">
     <label htmlFor="Email" className="form-label"> Password</label>
        <input type="email" className="form-control" placeholder="Enter Your Password" name="Password" value={user.Password} onChange={onHandleChange}/>
    </div>
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
      </div>
    </div>
    <div className="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>
  <div className="text-center">
  <button onClick={HandleSubmit}  type="button" className="btn btn-primary btn-block mb-4">Log In</button>
  </div>
  <div className="text-center">
  <p>or</p>
  <p>Log In With Google  </p>   
  <button type="button" className="btn btn-link btn-floating mx-1">
      <i onClick={signInWithGoogle} className="fab fa-google fa-2x"></i>
  </button>
  <br />
  <br />
  <p> Not a User ?<Link to="/Register" className="nav-link">Register here</Link> </p> 
  </div>
</form>
    </>   
  );
};

export default Login;