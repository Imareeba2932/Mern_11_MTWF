import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import './App.css'
import Navbar from './components/navbar'
import Login from './components/login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App