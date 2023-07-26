// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
//import './App.css'
import { Outlet, NavLink } from "react-router-dom"

function App() {
  

  return (
    <>
      <nav className="navbar navbar-expand bg-body-tertiary">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink className="nav-link" to="/">Pokedex</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/items">Items</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    
    <div className="container">

      <Outlet />
  </div>
  </>
  )
}

export default App
