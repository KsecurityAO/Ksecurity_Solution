import React from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

import {BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className=''>
    <Header/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='login/*' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
    </>
  );
}

export default App;
