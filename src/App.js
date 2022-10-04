import React from "react";
import ShortenUrl from "./Component/ShortenUrl";
import History from "./Component/History";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<ShortenUrl />}></Route>
          <Route path="/history" exact element={<History />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
