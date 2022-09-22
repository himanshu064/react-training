import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
const ProtectedLogReg = ({ children }) => {
  const { isUser } = useGlobalContext();

  if (isUser) {
    return <Navigate to="/" />;
  }
  return children ? children : <Outlet />;
};
export default ProtectedLogReg;