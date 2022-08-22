import React from "react";
import { Navigate } from "react-router-dom";
import { useGlobalContext } from "../../Context";
const ProtectedRoute = ({ children }) => {
  const { isUser } = useGlobalContext();

  if (!isUser) {
    return <Navigate to="/task7/login" />;
  }
  return children;
};
export default ProtectedRoute;
