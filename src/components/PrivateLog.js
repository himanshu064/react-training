import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate,Outlet } from "react-router-dom";

const PrivateLog = ({children}) =>{
  const {user} =useContext(AuthContext);
  if (user){
    return <Navigate to= '/' />;
  }
  return children ? children : <Outlet />;
};
export default PrivateLog;
