import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "../index.css";
import { handleSubmit } from "../Redux/Slices/LoginSlice";
const Login = () => {
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
  const dispatch = useDispatch();
  const submitLoginData = (event) => {
    event.preventDefault();
    dispatch(
      handleSubmit({
        Email: user.Email,
        Password: user.Password,
      })
    );
  };
  return (
    <>
      <div className="task_bg d-flex justify-content-center align-items-center">
        <form className="model p-3" onSubmit={submitLoginData}>
          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              name="Email"
              value={user.Email}
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
              value={user.Password}
              onChange={onHandleChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
