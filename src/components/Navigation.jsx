import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Odoo', path: '/odoo-erp' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">
        <Link 
          to="/" 
          className="nav-logo" 
          onClick={() => setIsOpen(false)}
        >
          <img src="/logo.png" alt="Atya Inno LLP" />
        </Link>

        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {({ isActive }) => (
                <>
                  {item.label}
                  {isActive && <span className="nav-dot" />}
                </>
              )}
            </NavLink>
          ))}

          <div className="mobile-nav-extras">
            <div className="nav-odoo-badge">
              <span className="nav-odoo-badge-icon">
                <img src="/odoo_logo.png" alt="Odoo Logo" />
              </span>
              <div className="nav-odoo-badge-text">
                <strong>Authorised</strong>
                <span>Odoo Partner</span>
              </div>
            </div>
          </div>
        </nav>

        <div className="nav-actions">
          <div className="nav-odoo-badge">
            <span className="nav-odoo-badge-icon">
              <img src="/odoo_logo.png" alt="Odoo Logo" />
            </span>
            <div className="nav-odoo-badge-text">
              <strong>Authorised</strong>
              <span>Odoo Partner</span>
            </div>
          </div>
        </div>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
          <span className={isOpen ? 'open' : ''}></span>
        </button>
      </div>

      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)} />}
    </header>
  );
};

export default Navigation;