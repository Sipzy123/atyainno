import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Services.css';

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const Services = () => {
  const navigate = useNavigate();

  const onNavigate = (path) => {
    if (path === 'home') navigate('/');
    else if (path === 'odoo') navigate('/odoo-erp');
    else navigate(`/${path}`);
  };

  const mainServices = [
    {
      icon: '✧',
      title: 'AI Services & Data Science',
      desc: 'Harness the power of Agentic AI and Large Language Models to automate complex workflows and gain predictive insights.',
      features: ['Agentic AI Workflows', 'MCP Server Integration', 'Custom LLM Fine-tuning', 'AI Automation'],
      color: '#F5C518',
    },
    {
      icon: '✦',
      title: 'Staff Augmentation',
      desc: 'Accelerate your delivery by integrating our senior AI specialists and full-stack developers directly into your team.',
      features: ['Dedicated AI Talent', 'Full-stack Experts', 'Remote Team Scaling', 'Agile Integration'],
      color: '#F5C518',
    },
    {
      icon: '⬡',
      title: 'Custom Software Dev',
      desc: 'High-performance applications built with React and Angular, optimized for enterprise-scale business logic.',
      features: ['Enterprise Apps', 'Microservices', 'Business Logic Automation', 'Scalable Architecture'],
      color: '#F5C518',
    },
    {
      icon: '◎',
      title: 'Mobile App Development',
      desc: 'Cross-platform excellence using Flutter and native technologies for a seamless iOS and Android user journey.',
      features: ['Flutter Apps', 'iOS & Android Native', 'App Performance Opt', 'API Integrations'],
      color: '#F5C518',
    },
    {
      icon: '◈',
      title: 'Modern Web Development',
      desc: 'Next-generation web applications leveraging Next.js for superior speed, SEO, and user engagement.',
      features: ['Next.js Solutions', 'Server-side Rendering', 'Responsive Frameworks', 'Secure Dashboards'],
      color: '#F5C518',
    },
  ];

  const techStack = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Java', 'C#', '.NET', 'Go'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Supabase'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'] },
  ];

  const process = [
    { n: '01', step: 'Discovery', desc: 'Deep dive into your business goals, requirements, and technical constraints through collaborative workshops.' },
    { n: '02', step: 'Planning', desc: 'Detailed project roadmap, technical architecture, timeline and resource planning.' },
    { n: '03', step: 'Development', desc: 'Agile sprints with regular demos, code reviews, and continuous integration.' },
    { n: '04', step: 'Testing', desc: 'Rigorous QA including automated, performance, and security testing before every release.' },
    { n: '05', step: 'Deployment', desc: 'Smooth production deployment with zero-downtime strategies and rollback plans.' },
    { n: '06', step: 'Support', desc: 'Ongoing maintenance, monitoring, and optimization to keep your solution peak-performing.' },
  ];

  return (
    <div className="services-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="ph-bg">
          <div className="ph-orb" />
          <div className="ph-grid" />
        </div>
        <div className="container ph-inner">
          <div className="section-label">Our Services</div>
          <h1 className="page-hero-title">
            Comprehensive<br /><span>Technology Solutions</span>
          </h1>
          <p className="page-hero-desc">
            From custom software development to cloud infrastructure, we deliver end-to-end IT solutions that drive measurable business growth.
          </p>
          <button className="btn btn-gold btn-lg" onClick={() => onNavigate('contact')}>
            Start a Project <ArrowRight />
          </button>
        </div>
      </section>

      {/* Odoo Featured Banner */}
      <div className="odoo-featured-banner">
        <div className="container">
          <div className="ofb-inner">
            <div className="ofb-left">
              <img src="/odoo_logo_inverted.png" alt="Odoo" className="ofb-logo" />
              <div className="ofb-text">
                <strong>Authorised Odoo Partner</strong>
                <span>Full ERP implementation, custom modules &amp; ongoing support</span>
              </div>
            </div>
            <button className="btn btn-odoo-svc" onClick={() => onNavigate('odoo')}>
              Explore Odoo Solutions <ArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="svc-grid-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">What We Offer</div>
            <h2 className="section-title">Everything You Need<br /><span>Under One Roof</span></h2>
          </div>
          <div className="svc-main-grid">
            {mainServices.map((s, i) => (
              <div key={i} className="svc-card" onClick={() => onNavigate('contact')}>
                <div className="svc-card-top">
                  <span className="svc-icon">{s.icon}</span>
                  <span className="svc-arrow-btn"><ArrowRight /></span>
                </div>
                <h3 className="svc-card-title">{s.title}</h3>
                <p className="svc-card-desc">{s.desc}</p>
                <ul className="svc-features">
                  {s.features.map(f => (
                    <li key={f}>
                      <span className="svc-check">✓</span>{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Odoo special card */}
            <div className="svc-card svc-card--odoo" onClick={() => onNavigate('odoo')}>
              <div className="svc-card-top">
                <img src="/odoo_logo_inverted.png" alt="Odoo" className="svc-odoo-logo" />
                <span className="svc-arrow-btn"><ArrowRight /></span>
              </div>
              <h3 className="svc-card-title">Odoo ERP Solutions</h3>
              <p className="svc-card-desc">
                Authorised Odoo partner delivering end-to-end ERP implementation, custom modules, and enterprise-grade support.
              </p>
              <ul className="svc-features">
                {['ERP Implementation', 'Custom Modules', 'Data Migration', 'Training & Support'].map(f => (
                  <li key={f}>
                    <span className="svc-check svc-check--purple">✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-section">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Our Stack</div>
            <h2 className="section-title">Built With<br /><span>Best-In-Class Tech</span></h2>
          </div>
          <div className="tech-grid">
            {techStack.map((t, i) => (
              <div key={i} className="tech-cat">
                <h4 className="tech-cat-title">{t.category}</h4>
                <div className="tech-tags">
                  {t.items.map(item => (
                    <span key={item} className="tech-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">How We Work</div>
            <h2 className="section-title">Our Development<br /><span>Process</span></h2>
          </div>
          <div className="process-grid">
            {process.map((p, i) => (
              <div key={i} className="process-step">
                <span className="process-num">{p.n}</span>
                <h3>{p.step}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cta">
        <div className="container">
          <div className="svc-cta-inner">
            <div className="svc-cta-glow" />
            <div className="section-label">Get Started</div>
            <h2 className="section-title">Need a Custom Solution?<br /><span>Let's Talk.</span></h2>
            <p className="section-desc">Tell us about your project and we'll create a tailored proposal within 24 hours.</p>
            <div className="svc-cta-btns">
              <button className="btn btn-gold btn-lg" onClick={() => onNavigate('contact')}>
                Schedule Consultation <ArrowRight />
              </button>
              <button className="btn btn-outline btn-lg" onClick={() => onNavigate('about')}>
                Learn About Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;