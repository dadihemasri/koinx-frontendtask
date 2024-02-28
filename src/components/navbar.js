import React, { useState, useEffect } from 'react';
import './navbar.css';
import logoImage from './logo.png';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width as per your mobile breakpoint
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logoImage} alt="Logo" className="logo-img" />
        </div>
        {isMobile && (
          <div className="menu-icon" onClick={toggleDrawer}>
            <div className={`bar ${isDrawerOpen ? 'active' : ''}`}></div>
            <div className={`bar ${isDrawerOpen ? 'active' : ''}`}></div>
            <div className={`bar ${isDrawerOpen ? 'active' : ''}`}></div>
          </div>
        )}
        {!isMobile && (
          <div className="nav-links-container">
            <a href="/" className="navbar-link">Crypto Taxes</a>
            <a href="/" className="navbar-link">Free Tools</a>
            <a href="/" className="navbar-link">Resource Center</a>
            <a href="/" className="navbar-link-gs">Get Started</a>
          </div>
        )}
      </nav>
      {isMobile && (
        <div className={`nav-drawer ${isDrawerOpen ? 'open' : ''}`}>
          <a href="/" className="navbar-link">Crypto Taxes</a>
          <a href="/" className="navbar-link">Free Tools</a>
          <a href="/" className="navbar-link">Resource Center</a>
          <a href="/" className="navbar-link-gs">Get Started</a>
        </div>
      )}
      <div className="additional-text">
        Cryptocurrencies &gt;&gt; Bitcoin
      </div>
    </div>
  );
}

export default Navbar;
