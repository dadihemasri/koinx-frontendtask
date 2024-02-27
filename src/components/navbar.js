import React from 'react';
import './navbar.css';
import logoImage from './logo.png';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo-img" />
        </div>
        <div className="nav-links-container">
          <a href="/" className="navbar-link">Crypto Taxes</a>
          <a href="/" className="navbar-link">Free Tools</a>
          <a href="/" className="navbar-link">Resource Center</a>
          <a href="/" className="navbar-link-gs">Get Started</a>
        </div>
      </nav>
      <div className="additional-text">
        Cryptocurrencies &gt;&gt; Bitcoin
      </div>
    </div>
  );
}

export default Navbar;

