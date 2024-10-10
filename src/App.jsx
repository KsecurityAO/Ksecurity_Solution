import React from 'react'
import './App.css'
import {Home} from './Components/Home/Home'
import Login from './Components/Login/Login'
import { MenuContext } from './NavContext'
import {BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className=''>
    <BrowserRouter>
    <MenuContext>
    <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route path='login/*' element={<Login/>}/>
    </Routes>
    </MenuContext>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
