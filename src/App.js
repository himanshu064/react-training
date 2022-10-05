import React from 'react';
import Shortner from './Assign6_1/Shortner';
import History from './Assign6_1/History';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shortner/>} ></Route>
        <Route path='/history' element={<History/>} ></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;