import React from 'react'
import "../Welcome.css";

function Register() {
  return (
      <>
        <form className='container'>
    <h2 className='loginhead'> Welcome To Register Page </h2>
  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example1">Email address</label>
    <input type="email" id="form2Example1" className="form-control" />
  </div>
  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example2">Password</label>
    <input type="password" id="form2Example2" className="form-control" />
  </div>
  <div className="form-outline mb-4">
    <label className="form-label" for="form2Example2">Confirm Password</label>
    <input type="password" id="form2Example2" className="form-control" />
  </div>
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
        <label className="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>
  </div>
  <div className="text-center">
  <button type="button" className="btn btn-primary btn-block mb-4">Sign Up</button>
  </div>
  <div className="text-center">
  <p>or</p>
  <p>Sign Up With Google  </p>   
  <button type="button" className="btn btn-link btn-floating mx-1">
      <i className="fab fa-google"></i>
  </button>
  <br />
  <br />
    <p>Already a member. <a href="#!">Login Here</a></p>
  </div>
</form>
      </>
  )
}

export default Register;
