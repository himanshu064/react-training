import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Firebase";
const WelcomeRedux = () => {
  const [isUser, setisUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setisUser(user);
      } else {
        setisUser(null);
      }
    });
  });
  const HandleLogOut = () => {
    signOut(auth);
    window.location = "/task7Redux";
  };
  console.log(auth);
  return (
    <>
      <h1>{isUser.email}</h1>
      {isUser ? (
        <button className="btn btn-primary" onClick={HandleLogOut}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary">login</button>
      )}
    </>
  );
};
export default WelcomeRedux;
