import React, { useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  // task 7 context start
  const [isUser, setisUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setisUser(user);
      } else {
        setisUser(null);
      }
    });
  }, []);
  // task 7 context end
  return (
    <AppContext.Provider
      value={{
        isUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
