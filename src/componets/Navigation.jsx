import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/logo3.png'
const Navigation = () => {
  return (
    <div className="hero-container">
      <nav className="navbar">
     
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </nav>
     
    </div>
  );
};

export default Navigation;