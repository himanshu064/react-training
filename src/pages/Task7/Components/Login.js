import React from 'react'
import "../Welcome.css";

function Login() {
  return (
    <>
<form className='container'>
    <h2 className='loginhead'> Welcome Page </h2>
<br />
    <div className="userdata text-center  userdata">
        <h4> User Details</h4>
       <h5>User Email:- Abhishek@gmail.com </h5> 
    </div>


    <div className="text-center">
    <button type="button" className="btn btn-primary btn-block mb-4">Log Out</button>
    </div>
</form>









     {/* <form className='container'>
    <h2 className='loginhead'> Welcome To Log In Page </h2>
  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" className="form-control" />
  </div>

  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" className="form-control" />
  </div>

  <div className="row mb-4">
    <div className="col d-flex justify-content-center">

      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
        <label className="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div className="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div>
  <div className="text-center">

  <button type="button" className="btn btn-primary btn-block mb-4">Log in</button>
  </div>

  <div className="text-center">
  <p>or</p>
  <p>Log In With Google  </p>   
  <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
  </button>
  <br />
  <br />
    <p>Not a member? <a href="#!">Register Here</a></p>
  </div>
</form> */}
    </>   
  );
};

export default Login;
