import React, { useState } from "react"
import "../index.css"
import { register } from "../Redux/Slices/RegisterSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
const RegisterRedux=()=>{
    const [RegisterUser,setRegisterUser]=useState({
        Email:"",
        Password:"",
    })
    const onHandleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegisterUser({
          ...RegisterUser,
          [name]: value,
        });
      };
      const dispatch=useDispatch();
      const HandleRegister=(event)=>{
event.preventDefault();
dispatch(register({
  Email:RegisterUser.Email,
  Password:RegisterUser.Password
}))
      }
    return (
        <>
        <div className="task_bg d-flex justify-content-center align-items-center">
        <form className="model p-3" onSubmit={HandleRegister}>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              name="Email"
              value={RegisterUser.Email}
              onChange={onHandleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="Password"
              className="form-control"
              placeholder="enter passowrd"
              value={RegisterUser.Password}
              onChange={onHandleChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
          <Link to="/task7Redux" className="nav-link">
            Login
          </Link>
        </form>
      </div>
        </>
    )
}
export default RegisterRedux