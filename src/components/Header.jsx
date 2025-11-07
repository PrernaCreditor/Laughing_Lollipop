import React, { useState, useEffect } from 'react';
import logo from '../assets/laugh_logo.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect to reduce navbar size
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    // { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home" className="logo-link">
            <img src={logo} alt="Laughing Lollipop" className="logo-img" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Phone CTA Button - Desktop */}
        <a href="tel:2524732579" className="phone-cta phone-cta-desktop">
          <div className="phone-icon-wrapper">
            <svg className="phone-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8831 8.64932 10.6694 9.16531 10.2243 9.38787L7.96701 10.5165C9.06925 12.9612 11.0388 14.9308 13.4835 16.033L14.6121 13.7757C14.8347 13.3306 15.3507 13.1169 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" fill="#e91e63"/>
            </svg>
          </div>
          <span className="phone-number">252-473-2579</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Phone CTA Button - Mobile */}
        <a href="tel:2524732579" className="phone-cta phone-cta-mobile">
          <div className="phone-icon-wrapper">
            <svg className="phone-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 15.46L18.19 15.11C17.5 15.04 16.81 15.19 16.24 15.54L14.31 16.68C11.7 15.5 8.5 12.3 7.32 9.69L8.46 7.76C8.81 7.19 8.96 6.5 8.89 5.81L8.54 3C8.46 2.18 7.78 1.54 6.95 1.54H4.77C3.78 1.54 2.88 2.18 2.75 3.16C2.25 7.5 4.5 11.75 7.75 15L11 18.25C14.25 21.5 18.5 23.75 22.84 23.25C23.82 23.12 24.46 22.22 24.46 21.23V19.05C24.46 18.22 23.82 17.54 23 17.46L21 15.46Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="phone-number">252-473-2579</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;