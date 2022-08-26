import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Task4 from './pages/Task4';
import Task5 from './pages/Task5';
import Task5_1 from './pages/Task5_1';
import Task6 from './pages/Task6';
import Task7, { WebsiteContextState } from './pages/Task7';
import Home from './pages/Task7/Home';
import Login from './pages/Task7/Login';
import SignUpPage from './pages/Task7/SignUp';

function App() {
  return (
    <WebsiteContextState>
    <BrowserRouter>
      <Routes>
        <Route path='/task1' element={<Task1 />} />
        <Route path='/task2' element={<Task2  number="8" max="20" />} />
        <Route path='/task3' element={<Task3 />} />
        <Route path='/task4' element={<Task4 />} />
        <Route path='/task5' element={<Task5 />} />
        <Route path='/task5_1' element={<Task5_1 />} />
        <Route path='/task6' element={<Task6 />} />
        <Route path='/task7' element={<Task7 />} />
          <Route path='/task7/signup' element={<SignUpPage />} />
          <Route path='/task7/home' element={<Home />} />
          <Route path='/task7/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
          </WebsiteContextState>
  );
}

export default App;
