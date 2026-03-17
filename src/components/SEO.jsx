import { useEffect } from 'react';

const SEO = ({ title, description, canonical, keywords, schema }) => {
  useEffect(() => {
    // Update Title
    if (title) {
      document.title = title;
      
      const titleMetaTags = [
        'meta[property="og:title"]',
        'meta[name="twitter:title"]'
      ];
      titleMetaTags.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.setAttribute('content', title);
      });
    }

    // Update Description
    if (description) {
      const descMetaTags = [
        'meta[name="description"]',
        'meta[property="og:description"]',
        'meta[name="twitter:description"]'
      ];
      descMetaTags.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.setAttribute('content', description);
      });
    }

    // Update Keywords
    if (keywords) {
      const keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (keywordsMeta) keywordsMeta.setAttribute('content', keywords);
    }

    // Update Canonical URL
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      }
      
      const urlMetaTags = [
        'meta[property="og:url"]',
        'meta[name="twitter:url"]'
      ];
      urlMetaTags.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) el.setAttribute('content', canonical);
      });
    }

    // Update JSON-LD Schema
    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'json-ld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, keywords, schema]);

  return null;
};

export default SEO;
