import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './FloatingDock.css';

const navItems = [
  {
    id: 'home',
    label: 'Home',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  {
    id: 'services',
    label: 'Services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="6" height="6" rx="1"/>
        <rect x="9" y="3" width="6" height="6" rx="1"/>
        <rect x="16" y="3" width="6" height="6" rx="1"/>
        <rect x="2" y="12" width="6" height="9" rx="1"/>
        <rect x="9" y="12" width="6" height="9" rx="1"/>
        <rect x="16" y="12" width="6" height="9" rx="1"/>
      </svg>
    )
  },
  {
    id: 'odoo',
    label: 'Odoo ERP',
    icon: <img src="/odoo_logo_d.png" alt="Odoo" className="dock-img" />
  },
  {
    id: 'about',
    label: 'About Us',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    )
  },
  {
    id: null,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/atya-inno-llp/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    )
  },
  {
    id: null,
    label: 'Instagram',
    href: 'https://www.instagram.com/welogical.solutions/?hl=en',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm4.75-2.75a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25z"/>
      </svg>
    )
  },
  {
    id: null,
    label: 'Facebook',
    href: 'http://facebook.com/WeLogicalSolutions',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 10-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.88h-2.33v6.99A10 10 0 0022 12z"/>
      </svg>
    )
  },
  {
    id: 'contact',
    label: 'Contact',
    highlight: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    )
  }
];

const routeMap = {
  home: '/',
  services: '/services',
  odoo: '/odoo-erp',
  about: '/about',
  contact: '/contact'
};

const FloatingDock = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [hovered, setHovered] = useState(null);
  const [mouseX, setMouseX] = useState(null);
  const dockRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleMouseMove = (e) => {
    const rect = dockRef.current?.getBoundingClientRect();
    if (rect) setMouseX(e.clientX - rect.left);
  };

  const getScale = (idx) => {
    if (mouseX === null) return 1;
    const rect = dockRef.current?.getBoundingClientRect();
    if (!rect) return 1;

    const itemW = rect.width / navItems.length;
    const itemCenter = idx * itemW + itemW / 2;
    const dist = Math.abs(mouseX - itemCenter);
    const maxDist = 90;

    if (dist > maxDist) return 1;
    return 1 + (1 - dist / maxDist) * 0.4;
  };

  return (
    <div className="floating-dock-wrap">
      <div
        className="floating-dock"
        ref={dockRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          setMouseX(null);
          setHovered(null);
        }}
      >
        {navItems.map((item, i) => {
          const scale = getScale(i);

          const isActive =
            item.id &&
            location.pathname === routeMap[item.id];

          return (
            <div key={item.label} className="dock-item-wrap">
              {hovered === i && (
                <div className="dock-tooltip">{item.label}</div>
              )}

              <button
                className={`dock-item ${isActive ? 'dock-active' : ''} ${item.highlight ? 'dock-highlight' : ''}`}
                style={{ transform: `scale(${scale})` }}
                onMouseEnter={() => setHovered(i)}
                onClick={() => {
                  setMouseX(null);
                  setHovered(null);

                  if (item.id) {
                    navigate(routeMap[item.id]);
                  } else if (item.href) {
                    window.open(item.href, '_blank');
                  }
                }}
              >
                <span className="dock-icon">{item.icon}</span>
                {isActive && <span className="dock-dot" />}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingDock;