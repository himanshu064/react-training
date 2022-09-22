import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Task4 from "./pages/Task4";
import Task5 from "./pages/Task5";
import Task5_1 from "./pages/Task5_1";
import Task6 from "./pages/Task6";
import Task8 from "./pages/Task8";
import Task9 from "./pages/Task9";
import Home from "./pages/Task8/Home";
import Login from "./pages/Task8/Login";
import SignUpPage from "./pages/Task8/SignUp";
import Index from "./pages/Redux_1/App";
import { Provider } from "react-redux";
import HomePage from "./pages/Task9/home";
import Redux_Store from "./pages/Task9/store";
import SignUp from "./pages/Task9/signup";
import ChatingBox from "./pages/Task9/home";

function App() {
  return (
    <Provider store={Redux_Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/task1" element={<Task1 />} />
          <Route path="/task2" element={<Task2 number="8" max="20" />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task4" element={<Task4 />} />
          <Route path="/task5" element={<Task5 />} />
          <Route path="/task5_1" element={<Task5_1 />} />
          <Route path="/task6" element={<Task6 />} />
          <Route path="/task8/signup" element={<SignUpPage />} />
          <Route path="/task8/home" element={<Home />} />
          <Route path="/task8/login" element={<Login />} />
          <Route path="/task8" element={<Task8 />} />
          <Route path="/redux_example" element={<Index />} />
          <Route path="/Task9" element={<Task9 />} />
          <Route path="/Task9/home" element={<ChatingBox />} />
          <Route path="/Task9/homepage" element={<HomePage />} />
          <Route path="/Task9/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
