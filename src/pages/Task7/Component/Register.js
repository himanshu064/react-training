import React, { useState } from "react";
import "./index.css";
import { auth, db } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
const Register = () => {
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
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        user.Email,
        user.Password
      );
      window.alert(result.user.email);
      await addDoc(collection(db, "User"), {
        Email: user.Email,
        Password: user.Password,
      });
      window.alert(`resgistered Succesfully ${result.user.email}`);

      window.location = "/task7/welcome";
    } catch (error) {
      window.alert(error.message);
    }
  };
  return (
    <>
      <div className="task_bg d-flex justify-content-center align-items-center">
        <form className="model p-3" onSubmit={HandleSubmit}>
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
          <div className="mb-3">
            <label htmlFor="ConfirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="ConfirmPassword"
              className="form-control"
              placeholder="enter passowrd"
              value={user.ConfirmPassword}
              onChange={onHandleChange}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Sign In
          </button>
          <Link to="/task7/login" className="nav-link">
            Login
          </Link>
        </form>
      </div>
    </>
  );
};
export default Register;
