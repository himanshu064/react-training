import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate,Outlet } from "react-router-dom";

const ProtectedRoute = ({children}) =>{
  const {user} =useContext(AuthContext);
  if (!user){
    return <Navigate to= '/login' />;
  }
  return children ? children : <Outlet />;
};
export default ProtectedRoute;



// const PrivateRoute =({ component: Component, ...rest }) => {
//   const { user } = useContext(AuthContext);

//   return (
//     <Routes>
//     <Route
//       {...rest}
//       // exact
//       render={(props) =>
//         user ? <Component {...props} /> : <Navigate to="/login" />
//       }
//     />
//     </Routes>
//   );
// };

// export default PrivateRoute;
