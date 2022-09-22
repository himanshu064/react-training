import { BrowserRouter } from "react-router-dom";
import Task2 from "./pages/Task2";

function App() {
  return (
    <BrowserRouter>
      <Task2 number="8" max="20" />
    </BrowserRouter>
  );
}

export default App;
