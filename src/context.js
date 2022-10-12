import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [Timer, setTimer] = useState();
  const [userInput, setUserInput] = useState('');
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correct,setCorrect] = useState([]);
  const [test,setTest] = useState(false);
  const typeData = `hello Myself Abhishek Kumar. I have done my B.tech from Giani zail singh campus college of engineering and technology.`.split(' ');

  const HandleSetTimer = (e) => {
    setTimer(e.target.value);
  };
  const startInput = (value) => {
    setTest(true);
    if(value.endsWith(' ')){
      setUserInput(value);
      const a  = userInput.split(' ');
      const b = a[a.length - 1]
      setActiveWordIndex(i => i + 1);
      const word = b.trim();
        const newResult = [...correct];
        newResult[activeWordIndex] =word === typeData[activeWordIndex];
      setCorrect( newResult)  
    }else{
      setUserInput(value);
    }
 }

  return (
    <AppContext.Provider
      value={{
        Timer,
        userInput,
        activeWordIndex,
        correct,
        typeData,
        test,
        setTest,
        HandleSetTimer,
        startInput,
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