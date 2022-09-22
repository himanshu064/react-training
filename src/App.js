import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task7, { WebsiteContextState } from "./pages/Task7";
import Home from "./pages/Task7/Home";
import Login from "./pages/Task7/Login";
import SignUpPage from "./pages/Task7/SignUp";

function App() {
  return (
    <WebsiteContextState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Task7 />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </WebsiteContextState>
  );
}

export default App;
