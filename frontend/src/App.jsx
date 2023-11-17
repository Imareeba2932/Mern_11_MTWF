import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home'
import './App.css'
import Navbar from './components/navbar'
import Login from './components/login'
import PageNotFound from './components/PageNotFound'
import EventHandling from './components/EventHandling'
import Count from './components/count'
import About from './components/about'
import Todo from './components/todo'
import ProductListing from './components/ProductListing'
import WeatherCard from './components/WeatherCard'
import QuoteApp from './components/QuoteApp'
import ManageProduct from './components/ManageProduct'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/EventHandling' element={<EventHandling />} />
          <Route path='/count' element={<Count />} />
          <Route path='/todo' element={<Todo />} />
          <Route path='/ProductListing' element={<ProductListing />} />
          <Route path='/WeatherCard' element={<WeatherCard />} />
          <Route path='/QuoteApp' element={<QuoteApp />} />
          <Route path='/ManageProduct' element={<ManageProduct />} />
        </Routes>
      </BrowserRouter> 
      
    </div>
  )
}

export default App