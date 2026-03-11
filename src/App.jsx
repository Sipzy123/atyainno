import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingDock from './components/FloatingDock';
import Home from './pages/Home';
import Services from './pages/Services';
import OdooPage from './pages/OdooPage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import './styles/globals.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = `Atya Inno — ${
      currentPage === 'home'     ? 'IT Innovation Partner' :
      currentPage === 'services' ? 'Our Services' :
      currentPage === 'odoo'     ? 'Odoo Solutions' :
      currentPage === 'about'    ? 'About Us' :
      'Contact Us'
    }`;
  }, [currentPage]);

  const pages = {
    home:     <Home     onNavigate={handleNavigate} />,
    services: <Services onNavigate={handleNavigate} />,
    odoo:     <OdooPage onNavigate={handleNavigate} />,
    about:    <AboutUs  onNavigate={handleNavigate} />,
    contact:  <Contact  onNavigate={handleNavigate} />,
  };

  return (
    <div className="app">
      <div className="noise-overlay" />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{pages[currentPage]}</main>
      <Footer onNavigate={handleNavigate} />
      <FloatingDock currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  );
};

export default App;