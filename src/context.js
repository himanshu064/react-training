import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [Timer, setTimer] = useState();

  const HandleSetTimer = (e) => {
    setTimer(e.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        Timer,
        HandleSetTimer,
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