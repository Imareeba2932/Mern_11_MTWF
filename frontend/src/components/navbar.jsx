import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/EventHandling">Alert</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/count">Count</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todo">Todo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ProductListing">ProductLisitng</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/WeatherCard">WeatherCard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/QuoteApp">QuoteApp</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ManageProduct">ManageProduct</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Browse">BrowsePage</Link>
          </li>
          
        </ul>
      </div>
    </nav>
  )
}

export default navbar