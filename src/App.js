import React from "react";
import Start from "./Components/Start";
// import Result from "./Components/Result";
import Test from "./Components/Test";
import { useGlobalContext } from "./Context/Context";
const App = () => {
  const { startGame } = useGlobalContext();
  return (
    <div className="game-bg d-flex justify-content-center align-items-center">
      <div className="screens">{startGame === true ? <Test /> : <Start />}</div>
    </div>
  );
};

export default App;
