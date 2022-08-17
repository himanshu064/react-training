import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task1 from "./pages/Task1";
import Task2 from "./pages/Task2";
import Task3 from "./pages/Task3/index";
import Task4 from "./pages/Task4/Index";
import Task5 from "./pages/Task5/Index";
import Task5_1 from "./pages/Task5_1/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/task1' element={<Task1 />} />
        <Route path='/task2' element={<Task2 />} />
        <Route path='/task3' element={<Task3 />} />
        <Route path='/task4' element={<Task4 />} />
        <Route path='/task5' element={<Task5 />} />
        <Route path='/task5_1' element={<Task5_1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
