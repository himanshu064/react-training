import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../../Context";
const ProtectedRoute = ({ children }) => {
  const { isUser } = useGlobalContext();

  if (!isUser) {
    return <Navigate to="/task7/login" />;
  }
  return children ? children : <Outlet />;
};
export default ProtectedRoute;
