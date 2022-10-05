import React, { useContext, useState } from "react";
import { typingTestData } from "../Data/source";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  // state to set time fot timer
  const [Timer, setTimer] = useState("1");
  // state to start game
  const [startGame, setStartGame] = useState(false);
  const HandleSetTimer = (e) => {
    setTimer(e.target.value);
  };
  const [testPara, setTestPara] = useState("");
  const StartGame = () => {
    setStartGame(true);
    let paragraph =
      typingTestData[Math.floor(Math.random() * typingTestData.length)];
    setTestPara(paragraph);
  };
  // typing
  const [typing, setTyping] = useState("");

  const HandleTyping = (e) => {
    setTyping(e.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        Timer,
        StartGame,
        HandleSetTimer,
        startGame,
        typing,
        HandleTyping,
        testPara,
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
