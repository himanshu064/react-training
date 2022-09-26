import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "../Firebase";
const ReduxProtected = ({ children }) => {
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
  if (!isUser) {
    return <Navigate to="/task7Redux" />;
  }
  return children ? children : <Outlet />;
};
export default ReduxProtected;
