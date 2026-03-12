import React, { useState, useEffect } from 'react';
import './Navigation.css';

const Navigation = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'Odoo', id: 'odoo' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container container">
        <button className="nav-logo" onClick={() => onNavigate('home')}>
          <img src="/logo.png" alt="Atya Inno" />
        </button>

        <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => { onNavigate(item.id); setIsOpen(false); }}
            >
              {item.label}
              {currentPage === item.id && <span className="nav-dot" />}
            </button>
          ))}

          <div className="mobile-nav-extras">
            <div className="nav-odoo-badge">
              <span className="nav-odoo-badge-icon">
                <img src="/odoo_logo.png" alt="Odoo Logo" />
              </span>
              <div className="nav-odoo-badge-text">
                <strong>Certified</strong>
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