import React, { useState, useRef } from 'react';
import './FloatingDock.css';

const navItems = [
  {
    id: 'home', label: 'Home',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  },
  {
    id: 'services', label: 'Services',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="6" height="6" rx="1"/><rect x="9" y="3" width="6" height="6" rx="1"/><rect x="16" y="3" width="6" height="6" rx="1"/><rect x="2" y="12" width="6" height="9" rx="1"/><rect x="9" y="12" width="6" height="9" rx="1"/><rect x="16" y="12" width="6" height="9" rx="1"/></svg>
  },
  {
    id: 'odoo', label: 'Odoo ERP',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
  },
  {
    id: 'about', label: 'About Us',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
  },
  {
    id: null, label: 'LinkedIn', href: 'https://linkedin.com',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  },
  {
    id: null, label: 'Twitter', href: 'https://twitter.com',
    icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  },
  {
    id: 'contact', label: 'Contact',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    highlight: true
  },
];

const FloatingDock = ({ currentPage, onNavigate }) => {
  const [hovered, setHovered] = useState(null);
  const [mouseX, setMouseX] = useState(null);
  const dockRef = useRef(null);

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
        onMouseLeave={() => { setMouseX(null); setHovered(null); }}
      >
        {navItems.map((item, i) => {
          const scale = getScale(i);
          const isActive = item.id && currentPage === item.id;
          const isHighlight = item.highlight;

          return (
            <div key={item.label} className="dock-item-wrap">
              {hovered === i && (
                <div className="dock-tooltip">{item.label}</div>
              )}
              <button
                className={`dock-item ${isActive ? 'dock-active' : ''} ${isHighlight ? 'dock-highlight' : ''}`}
                style={{ transform: `scale(${scale})`, transformOrigin: 'bottom center' }}
                onMouseEnter={() => setHovered(i)}
                onClick={() => {
                  // 1. Reset the dock to its original state immediately
                  setMouseX(null);
                  setHovered(null);

                  // 2. Perform the navigation or link opening
                  if (item.id) {
                    onNavigate(item.id);
                  } else if (item.href) {
                    window.open(item.href, '_blank');
                  }
                }}
                aria-label={item.label}
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