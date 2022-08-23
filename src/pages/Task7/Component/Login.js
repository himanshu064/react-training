import React, { useState } from "react";
import "./index.css";
import { auth } from "./Firebase";
import { Link, Navigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { GoogleButton } from "react-google-button";
const Register = () => {
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
    }
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        user.Email,
        user.Password
      );
      window.alert(`login Succesfully ${result.user.email}`);
      <Navigate to="/task7/welcome" />;
    } catch (error) {
      window.alert(error.message);
    }
  };
  const googleProvider = new GoogleAuthProvider();
  const logInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        window.alert(`login succesfully welcome ${res.user.email}`);
        <Navigate to="/task7/welcome" />;
      })
      .catch((error) => {
        window.alert(error);
      });
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
          <button className="btn btn-primary" type="submit">
            Login
          </button>
          <GoogleButton
            style={{ width: "auto", marginTop: "10px" }}
            onClick={logInWithGoogle}
          />
          <Link to="/task7/register" className="nav-link">
            Register here
          </Link>
        </form>
      </div>
    </>
  );
};
export default Register;
