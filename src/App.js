import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Task9/pages/Home";
import Navbar from "./Task9/components/Navbar";
import Register from "./Task9/pages/Register";
import Login from "./Task9/pages/Login";
import Profile from './Task9/pages/Profile'
import PrivateRoute from "./Task9/components/PrivateRoute";
import PrivateLog from "./Task9/components/PrivateLog";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route element={<PrivateRoute/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Route>
        <Route element={<PrivateLog/>}>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
