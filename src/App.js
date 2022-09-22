import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task1 from "./pages/Task1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/task1' element={<Task1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
