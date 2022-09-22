// import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Welcome from './Task8/Welcome';
import Login from './Task8/Login';
import About from './Task8/About';
import Register from './Task8/Register';
import ProtectedRoute from './Task8/ProtectedRoute';
import ProtectedLogReg from './Task8/ProtectedLogReg';

function App() {
  return (
   <>
   <BrowserRouter>
     <Routes>
     <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>

        <Route element={<ProtectedLogReg />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Route>
     </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
