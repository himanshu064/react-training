import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../Context";
const ProtectedLogReg = ({ children }) => {
    const { isUser } = useGlobalContext();

  if (isUser) {
    return <Navigate to="/welcome" />;
  
  }
  return children;
};
export default ProtectedLogReg;