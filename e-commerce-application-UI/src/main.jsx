import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Login from './public/Login.jsx'
import Home from './public/Home.jsx'
import Register from './public/Register.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/> 
      <Route path='/' element={<Home/>}/> 
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>  
    </Routes>
   
    </BrowserRouter>
  </React.StrictMode>,
)
