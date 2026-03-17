import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FloatingDock from './components/FloatingDock';
import ScrollToTop from './components/ScrollToTop';
import SEO from './components/SEO';
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
    document.title = `Atya Inno — ${currentPage === 'home' ? 'IT Innovation Partner' :
      currentPage === 'services' ? 'Our Services' :
        currentPage === 'odoo' ? 'Odoo Solutions' :
          currentPage === 'about' ? 'About Us' :
            'Contact Us'
      }`;
  }, [currentPage]);

  const pages = {
    home: <Home onNavigate={handleNavigate} />,
    services: <Services onNavigate={handleNavigate} />,
    odoo: <OdooPage onNavigate={handleNavigate} />,
    about: <AboutUs onNavigate={handleNavigate} />,
    contact: <Contact onNavigate={handleNavigate} />,
  };

  const seoData = {
    home: {
      title: "Atya Inno — IT Innovation Partner",
      description: "Atya Inno is India's leading IT innovation company specializing in custom software, mobile apps, and Odoo ERP solutions.",
      canonical: "https://atyainno.com/",
      keywords: "custom software, odoo erp india, it consulting, mobile app development, website development, website redesign, software development company, ai solutions, chatbot, agentic ai, software development company in valsad, software development company in gujarat, software development company in india, odoo development company in valsad, odoo development company in gujarat, odoo development company in india",
      schema: {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Atya Inno",
        "url": "https://atyainno.com/",
        "logo": "https://atyainno.com/website_logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-9926012658",
          "contactType": "customer service"
        }
      }
    },
    services: {
      title: "Our Services — Atya Inno",
      description: "Explore our range of IT services including custom software development, mobile apps, and digital transformation.",
      canonical: "https://atyainno.com/#services",
      keywords: "it services, software development, custom solutions, tech consulting, ai solutions, agenticai, chatbots, ai development, website development, website redesign, mobile app development, odoo implementation, staff augmentation",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "IT Solutions",
        "provider": {
          "@type": "Organization",
          "name": "Atya Inno"
        },
        "description": "Custom software development, websites, mobile apps, AI solutions and digital transformation services."
      }
    },
    odoo: {
      title: "Odoo ERP Solutions — Atya Inno",
      description: "Implement Odoo ERP to streamline your business processes. Expert Odoo implementation and customization services.",
      canonical: "https://atyainno.com/#odoo",
      keywords: "odoo erp, odoo implementation india, business automation, erp solutions, manufacturing, retail, wholesale, inventory management, crm, project management, hr management, accounting, pos, odoo development, odoo customization, odoo support, odoo partner",
      schema: {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Odoo ERP Implementation",
        "provider": {
          "@type": "Organization",
          "name": "Atya Inno"
        }
      }
    },
    about: {
      title: "About Us — Atya Inno",
      description: "Learn about Atya Inno's journey, our mission to innovate, and the dedicated team of expert developers and designers.",
      canonical: "https://atyainno.com/#about",
      keywords: "about atya inno, tech innovation team, it company mission, software experts india",
      schema: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
          "@type": "Organization",
          "name": "Atya Inno",
          "description": "An India-based IT company bringing innovative tech solutions to transform your business."
        }
      }
    },
    contact: {
      title: "Contact Us — Atya Inno",
      description: "Get in touch with Atya Inno for custom software development, mobile apps, or Odoo ERP solutions. Reach out for a free consultation.",
      canonical: "https://atyainno.com/#contact",
      keywords: "contact it company, hire software developers, atya inno contact, software development inquiry",
      schema: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-8141118006",
          "contactType": "customer service",
          "email": "contact@atyainno.com"
        }
      }
    }
  };

  return (
    <div className="app">
      <SEO {...seoData[currentPage]} />
      <div className="noise-overlay" />
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      <main>{pages[currentPage]}</main>
      <Footer onNavigate={handleNavigate} />
      <FloatingDock currentPage={currentPage} onNavigate={handleNavigate} />
      <ScrollToTop />
    </div>
  );
};

export default App;