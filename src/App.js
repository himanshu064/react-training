import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedLogReg from "./ProtectedLogReg";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import Welcome from "./Welcome";
import About from "./About";
import UploadImage from "./UploadImage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedLogReg />}>
          <Route path="task7/login" element={<Login />}></Route>
          <Route path="task7/register" element={<Register />}></Route>
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/task7/welcome" element={<Welcome />}></Route>
          <Route path="/task7/about" element={<About />}></Route>
          <Route path="task7/uploadImage" element={<UploadImage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
