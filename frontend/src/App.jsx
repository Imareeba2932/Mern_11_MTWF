import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import './App.css'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />

    </div>
  )
}

export default App