import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../../Context";
const ProtectedLogReg = ({ children }) => {
  const { isUser } = useGlobalContext();

  if (isUser) {
    return <Navigate to="/task7/welcome" />;
  }
  return children ? children : <Outlet />;
};
export default ProtectedLogReg;
