// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';
// Optional: import a logo
import logo from '../../assets/abhazband-logo.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Hook to detect route changes

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
      <header className="app-header">
        <div className="header-container container">
          <Link to="/" className="logo" onClick={closeMenu}> {/* Close menu if logo clicked */}
             <img src={logo} alt="AbhazBand Logo" className="logo-img" />
            AbhazBand
          </Link>

          {/* Hamburger Menu Button */}
          <button
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="main-navigation"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>

          <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`} id="main-navigation">
            <ul>
              <li><NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} onClick={closeMenu}>Апсны</NavLink></li>
              <li><NavLink to="/events" className={({ isActive }) => isActive ? "active-link" : ""} onClick={closeMenu}>Мероприятия</NavLink></li>
              <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "active-link" : ""} onClick={closeMenu}>Галерея</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""} onClick={closeMenu}>О нас</NavLink></li>
              {/*<li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""} onClick={closeMenu}>Контакты</NavLink></li>*/}
            </ul>
          </nav>
        </div>
      </header>
  );
}

export default Header;
