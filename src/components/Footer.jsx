import React from 'react';
import './Footer.css';

const Footer = ({ onNavigate }) => {
  const year = new Date().getFullYear();

  const links = {
    company: [
      { label: 'Home', id: 'home' },
      { label: 'Services', id: 'services' },
      { label: 'Odoo Solutions', id: 'odoo' },
      { label: 'About Us', id: 'about' },
      { label: 'Contact', id: 'contact' },
    ],
    services: [
      'Software Development',
      'Web Development',
      'Mobile Apps',
      'Odoo Implementation',
      'UI/UX Design',
      'Cloud Solutions',
    ],
  };

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="logo.png" className="footer-logo" />
            <p className="footer-tagline">
              An India-based IT company bringing innovative tech solutions to transform your business.
            </p>
            <div className="footer-socials">
              {[
                { label: 'LinkedIn', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg> },
                { label: 'Twitter', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg> },
                { label: 'GitHub', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" /></svg> },
                { label: 'Facebook', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg> },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label} className="social-btn">
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="footer-group-company" style={{ marginTop: '2rem' }}>
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-primary)',
                marginBottom: '1rem'
              }}>
                Group Company
              </h4>
              <img
                src="welogical_logo.png"
                alt="Welogical"
                style={{ height: '50px', width: 'auto', opacity: 0.9 }}
              />
            </div>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {links.company.map(l => (
                <li key={l.id}>
                  <button onClick={() => onNavigate(l.id)}>{l.label}</button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {links.services.map(s => (
                <li key={s}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact-col">
            <h4>Get In Touch</h4>
            <div className="footer-contact-items">
              <a href="tel:+912632359197" className="footer-contact-item">
                <span className="fci-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.01 2.2 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
                </span>
                +91 2632 359 197
              </a>
              <a href="mailto:contact@atyainno.com" className="footer-contact-item">
                <span className="fci-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </span>
                contact@atyainno.com
              </a>
              <div className="footer-contact-item">
                <span className="fci-icon">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </span>
                Sai Leela Mall, Abrama<br />Valsad, Gujarat, India
              </div>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© {year} Atya Inno LLP. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;