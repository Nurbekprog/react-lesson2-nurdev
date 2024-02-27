import React from 'react'
import "./Header.css"
import siteLogo from "../../assets/images/site-logo.png";
function Header() {
  return (
    <div>
      <nav className="container navbar">
        <div className="nav-left">
          <div className="logo">
            <img src={siteLogo} alt="logo" />
            <h1>Cleaning X</h1>
          </div>
          <ul className='nav-list'>
            <li> <a href="">Home</a> </li>
            <li> <a href="">About</a> </li>
            <li> <a href="">Services</a> </li>
            <li> <a href="">Articles</a> </li>
            <li> <a href="">Contact</a> </li>
          </ul>
        </div>
        <div className="nav-right">
          <a href="">Cart (0)</a>
          <button>Get a free quote</button>
        </div>
      </nav>
    </div>
  );
}

export default Header

