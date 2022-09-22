import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Task7/Login';
import Register from './Task7/Register';
import Welcome from './Task7/Welcome';
import About from './Task7/About';
import ProtectedRoute from './Task7/ProtectedRoute';
import ProtectedLogReg from './Task7/ProtectedLogReg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={
          <ProtectedRoute>
            <Welcome />
          </ProtectedRoute>
        } />
      <Route path='/about' element={
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        } />
        <Route path='/login' element={
          <ProtectedLogReg>
            <Login />
          </ProtectedLogReg> 
        } />
        <Route path='/register' element={
          <ProtectedLogReg>
           <Register />
          </ProtectedLogReg> 
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
