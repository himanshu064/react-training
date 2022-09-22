import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Task8 from "./pages/Task8";
import Redux_Store from "./pages/Task8/Store";
import SignUpPage from "./pages/Task8/SignUp";
import Home from "./pages/Task8/Home";
import Login from "./pages/Task8/Login";

function App() {
  return (
    <Provider store={Redux_Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Task8 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
