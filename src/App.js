import React from 'react';
import Shortner from './Assign6_1/Shortner';
import History from './Assign6_1/History';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import RoutesPage from './Assign6_1/RoutesPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shortner/>} ></Route>
        <Route path="/:id" exact element={<RoutesPage />}></Route>
        <Route path='/history' element={<History/>} ></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;