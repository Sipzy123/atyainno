import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingDock from "./components/FloatingDock";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";

import Home from "./pages/Home";
import Services from "./pages/Services";
import OdooPage from "./pages/OdooPage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

import "./styles/globals.css";

const seoData = {
  home: {
    title: "Atya Inno LLP | IT Company in Valsad, Gujarat – Custom Software, Odoo ERP, AI & Web Development India",
    description: "Atya Inno LLP is a leading IT company in Valsad, Gujarat, India offering custom software development, Odoo ERP implementation, AI solutions, web & mobile app development. We serve clients across India, USA, UK and globally with scalable digital solutions.",
    canonical: "https://atyainno.com/",
    keywords: "IT company in Valsad, software company Gujarat, IT services India, custom software development India, Odoo ERP implementation India, web development company Gujarat, mobile app development India, AI development company India, SaaS development India, hire developers India, React Node Flutter developers, ERP for manufacturing India, digital transformation company India",
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Atya Inno LLP",
      "url": "https://atyainno.com/",
      "telephone": "+91-8141118006",
      "email": "contact@atyainno.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Valsad",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "areaServed": ["India", "United States", "United Kingdom", "Global"],
      "sameAs": [
        "https://www.linkedin.com/company/atya-inno-llp/",
        "https://www.instagram.com/welogical.solutions/?hl=en",
        "http://facebook.com/WeLogicalSolutions"
      ]
    }
  },

  services: {
    title: "IT Services Company in India | Custom Software, AI, Web & Mobile Development – Atya Inno",
    description: "Explore Atya Inno's IT services including custom software development, SaaS platforms, AI solutions, chatbot development, web applications, and mobile apps for businesses in India and globally.",
    canonical: "https://atyainno.com/services",
    keywords: "IT services India, custom software development company India, SaaS development India, AI development services India, chatbot development India, web app development India, mobile app developers India, React development company India, Node.js development India, Flutter app development India",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Software & IT Services",
      "provider": {
        "@type": "Organization",
        "name": "Atya Inno LLP"
      },
      "areaServed": "Global",
      "description": "Custom software, AI, SaaS, web and mobile development services."
    }
  },

  odoo: {
    title: "Odoo ERP Implementation in India | Odoo Partner in Gujarat – Atya Inno LLP",
    description: "Get expert Odoo ERP implementation, customization, migration, and support services in Gujarat, India. Automate your business with CRM, Inventory, Accounting, HR and Manufacturing modules.",
    canonical: "https://atyainno.com/odoo-erp",
    keywords: "Odoo ERP India, Odoo implementation Gujarat, Odoo partner India, ERP for manufacturing India, ERP for textile industry India, CRM ERP India, Odoo customization services India, Odoo support India, business automation India",
    schema: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Odoo ERP Implementation",
      "provider": {
        "@type": "Organization",
        "name": "Atya Inno LLP"
      },
      "areaServed": ["India", "Global"]
    }
  },

  about: {
    title: "About Atya Inno LLP | IT Company in Valsad Gujarat Delivering Global Solutions",
    description: "Atya Inno LLP is an innovation-driven IT company based in Valsad, Gujarat, India providing custom software, AI, ERP, and digital transformation solutions to clients worldwide.",
    canonical: "https://atyainno.com/about",
    keywords: "about Atya Inno LLP, IT company Valsad Gujarat, software company India, AI company India, ERP company Gujarat, digital transformation company India, tech company India",
    schema: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Atya Inno LLP",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Valsad",
        "addressRegion": "Gujarat",
        "addressCountry": "India"
      },
      "description": "A Gujarat-based IT company delivering global digital solutions."
    }
  },

  contact: {
    title: "Contact Atya Inno LLP | Hire Developers in India | IT Services Gujarat",
    description: "Contact Atya Inno LLP in Valsad, Gujarat for custom software development, Odoo ERP, AI solutions, web & mobile apps. Get a free consultation and hire expert developers in India.",
    canonical: "https://atyainno.com/contact",
    keywords: "hire developers India, IT company contact Gujarat, software development company contact India, Odoo consultation India, web development company India contact, mobile app developers India hire",
    schema: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8141118006",
        "contactType": "sales",
        "email": "contact@atyainno.com",
        "areaServed": "Global"
      }
    }
  }
};

// 🔥 Dynamic SEO based on route
const SEOHandler = () => {
  const location = useLocation();

  const path = location.pathname;

  let pageKey = "home";
  if (path.includes("services")) pageKey = "services";
  else if (path.includes("odoo")) pageKey = "odoo";
  else if (path.includes("about")) pageKey = "about";
  else if (path.includes("contact")) pageKey = "contact";

  return <SEO {...seoData[pageKey]} />;
};

function App() {
  return (
    <BrowserRouter>
      <SEOHandler />

      <div className="app">
        <div className="noise-overlay" />

        <Navigation />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/odoo-erp" element={<OdooPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <FloatingDock />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;