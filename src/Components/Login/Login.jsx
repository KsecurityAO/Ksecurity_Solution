import React from 'react'
import { Route, Routes, } from 'react-router-dom'
import LoginForm from './LoginForm'
import LoginCriar from './LoginCriar'
import LoginReset from './LoginReset'

const Login = () => {
  return (
     <Routes>
        <Route path='/' element={<LoginForm/>}/>
        <Route path='criar' element={<LoginCriar/>}/>
        <Route path='reset' element={<LoginReset/>}/>
     </Routes>
  )
}

export default Login
