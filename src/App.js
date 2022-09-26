import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterRedux from "./Component/RegisterRedux";
import Login from "./Component/Login";
import WelcomeRedux from "./Component/welcomeRedux";
import AboutRedux from "./Component/About";
import ReduxProtected from "./Component/ReduxProtected";
import ReduxLogProtected from "./Component/ReduxLogProtected";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ReduxLogProtected />}>
          <Route path="task7Redux" element={<Login />}></Route>
          <Route path="task7Redux/register" element={<RegisterRedux />}></Route>
        </Route>

        <Route element={<ReduxProtected />}>
          <Route path="task7Redux/welcome" element={<WelcomeRedux />} />
          <Route path="task7Redux/about" element={<AboutRedux />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
