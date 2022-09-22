import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalContext } from "../context";
const ProtectedRoute = ({ children }) => {
  const { isUser } = useGlobalContext();

  if (!isUser) {
    return <Navigate to="/login" />;
  }
  return children ? children : <Outlet />;
};
export default ProtectedRoute;