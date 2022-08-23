import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3";
import Task4 from "./pages/Task4";
import Task5 from "./pages/Task5";
import Task5_1 from "./pages/Task5_1";
import Welcome from "./pages/Task7/Component/Welcome";
import Login from "./pages/Task7/Component/Login";
import Register from "./pages/Task7/Component/Register";
import ProtectedRoute from "./pages/Task7/Component/ProtectedRoute";
import ProtectedLogReg from "./pages/Task7/Component/ProtectedLogReg";
import UploadImage from "./pages/Task7/Component/UploadImage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
        <Route path="/task5_1" element={<Task5_1 />} />
        <Route
          path="task7/welcome"
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          }
        />
        <Route
          path="task7/login"
          element={
            <ProtectedLogReg>
              <Login />
            </ProtectedLogReg>
          }
        />
        <Route
          path="task7/register"
          element={
            <ProtectedLogReg>
              <Register />
            </ProtectedLogReg>
          }
        />
        <Route path="task7/uploadImage" element={<UploadImage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
