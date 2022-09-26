import React from "react";
import { signOut } from "firebase/auth";
import { useGlobalContext } from "./Context";
import { auth } from "./Firebase";
const Welcome = () => {
  const { isUser } = useGlobalContext();
  const HandleLogOut = () => {
    signOut(auth);
    window.alert("logout successfully");
    window.location = "/task7/login";
  };
  return (
    <>
      <div>
        <h1>{isUser.email}</h1>
        {isUser ? (
          <button className="btn btn-primary" onClick={HandleLogOut}>
            Logout
          </button>
        ) : (
          <button className="btn btn-primary">login</button>
        )}
      </div>
    </>
  );
};
export default Welcome;
