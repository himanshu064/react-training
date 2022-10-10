import React from 'react';
import Test from './Assign7/Test/Test';
import Result from './Assign7/Result/Result';
import Start from './Assign7/Start/Start';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Start/>} ></Route>
      <Route path='/test' element={<Test/>} ></Route>
      <Route path='/result' element={<Result/>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
