import React from 'react';
import './OdooPage.css';

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const OdooPage = ({ onNavigate }) => {
  const services = [
    { icon: '⚙️', title: 'Odoo Implementation', desc: 'Complete ERP setup, configuration, and go-live support tailored to your business processes.', features: ['System Configuration', 'Module Selection', 'Data Migration', 'Go-Live Support'] },
    { icon: '🔧', title: 'Custom Module Dev', desc: 'Build custom Odoo modules to extend core functionality and meet specific requirements.', features: ['Custom Modules', 'API Integration', 'Automation', 'Performance Tuning'] },
    { icon: '🎨', title: 'Odoo Customization', desc: 'Tailor Odoo modules, workflows and UI to exactly match your business operations.', features: ['Workflow Design', 'Field Customization', 'Custom Reports', 'UI Enhancement'] },
    { icon: '🎓', title: 'Training & Support', desc: 'Comprehensive training programs and dedicated ongoing support for your entire team.', features: ['User Training', 'Admin Training', 'Documentation', 'Technical Support'] },
    { icon: '📈', title: 'Process Optimization', desc: 'Analyze and optimize your business processes leveraging full Odoo capabilities.', features: ['Process Mapping', 'Gap Analysis', 'Automation', 'KPI Tracking'] },
    { icon: '🛡️', title: 'Security & Compliance', desc: 'Ensure your Odoo system meets the highest security and compliance standards.', features: ['Access Control', 'Data Security', 'Audit Trails', 'GDPR Compliance'] },
  ];

  const modules = [
    { icon: '📊', name: 'Accounting', desc: 'Financial management' },
    { icon: '📦', name: 'Inventory', desc: 'Stock & warehouse' },
    { icon: '🛒', name: 'Sales', desc: 'Orders & quotations' },
    { icon: '🏭', name: 'Manufacturing', desc: 'Production planning' },
    { icon: '👥', name: 'CRM', desc: 'Customer relations' },
    { icon: '🚚', name: 'Purchase', desc: 'Procurement' },
    { icon: '⏰', name: 'HR', desc: 'Human resources' },
    { icon: '📈', name: 'Analytics', desc: 'Business intelligence' },
    { icon: '🌐', name: 'Website', desc: 'eCommerce & CMS' },
    { icon: '📧', name: 'Email Marketing', desc: 'Campaigns & automation' },
    { icon: '🏗️', name: 'Project', desc: 'Task management' },
    { icon: '💳', name: 'Point of Sale', desc: 'Retail & POS' },
  ];

  const timeline = [
    { phase: 'Phase 1', title: 'Discovery & Planning', duration: '2–4 weeks', desc: 'Business requirements analysis, system design, and detailed project planning.' },
    { phase: 'Phase 2', title: 'Configuration & Development', duration: '4–8 weeks', desc: 'System setup, module configuration, custom development, and integrations.' },
    { phase: 'Phase 3', title: 'Testing & Optimization', duration: '2–4 weeks', desc: 'Comprehensive QA, performance optimization, and user acceptance testing.' },
    { phase: 'Phase 4', title: 'Training & Go-Live', duration: '2–3 weeks', desc: 'Team training, documentation delivery, and production deployment.' },
    { phase: 'Phase 5', title: 'Post-Launch Support', duration: 'Ongoing', desc: 'Continuous support, improvements, and system optimization.' },
  ];

  return (
    <div className="odoo-page">

      {/* ── HERO ── */}
      <section className="odoo-hero">
        <div className="odoo-hero-bg">
          <div className="odoo-orb-purple" />
          <div className="odoo-orb-gold" />
          <div className="odoo-grid" />
        </div>

        <div className="container odoo-hero-inner">
          <div className="odoo-hero-content">
            <div className="odoo-logo-lockup fade-up">
              <img src="/odoo_logo_inverted.png" alt="Odoo" className="odoo-hero-logo" />
              <div className="odoo-cert-pill">
                <span className="ocp-pulse" />
                Certified Partner
              </div>
            </div>

            <h1 className="page-hero-title fade-up fade-up-d1">
              Enterprise ERP<br /><span>Implementation</span>
            </h1>
            <p className="page-hero-desc fade-up fade-up-d2">
              As a certified Odoo partner, we deliver comprehensive ERP implementations, custom module development, and ongoing support that transforms how your business operates.
            </p>
            <div className="odoo-hero-actions fade-up fade-up-d3">
              <button className="btn btn-gold btn-lg" onClick={() => onNavigate('contact')}>
                Start Implementation <ArrowRight />
              </button>
              <button className="btn btn-odoo btn-lg" onClick={() => onNavigate('contact')}>
                Free Consultation
              </button>
            </div>
          </div>

          <div className="odoo-hero-right fade-up fade-up-d2">
            <div className="odoo-partner-card">
              <div className="opc-glow" />
              <img src="/odoo_learning_partner_rgb.svg" alt="Odoo Learning Partner" className="opc-badge-img" />
              <div className="opc-divider" />
              <div className="opc-meta">
                <span>Official Partnership</span>
                <strong>Since 2020</strong>
              </div>
            </div>

            <div className="odoo-stats">
              {[
                { n: '50+', l: 'Implementations' },
                { n: '100%', l: 'Success Rate' },
                { n: '5★', l: 'Partner Rating' },
              ].map(s => (
                <div key={s.l} className="odoo-stat-card">
                  <strong>{s.n}</strong>
                  <span>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="odoo-services-section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Odoo Services</div>
            <h2 className="section-title">Complete Odoo<br /><span>Expertise</span></h2>
          </div>
          <div className="odoo-svc-grid">
            {services.map((s, i) => (
              <div key={i} className="odoo-svc-card" onClick={() => onNavigate('contact')}>
                <span className="odoo-svc-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.features.map(f => (
                    <li key={f}><span className="odoo-check">✓</span>{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULES ── */}
      <section className="odoo-modules-section">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Coverage</div>
            <h2 className="section-title">Modules We<br /><span>Support</span></h2>
          </div>
          <div className="odoo-mod-grid">
            {modules.map((m, i) => (
              <div key={i} className="odoo-mod-card" style={{ animationDelay: `${i * 0.05}s` }}>
                <span className="omc-icon">{m.icon}</span>
                <strong>{m.name}</strong>
                <small>{m.desc}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ODOO ── */}
      <section className="why-odoo">
        <div className="container">
          <div className="section-header centered">
            <div className="why-odoo-logo-row">
              <img src="/odoo_logo.png" alt="Odoo" className="why-odoo-inline-logo" />
            </div>
            <div className="section-label">Why Choose Odoo?</div>
            <h2 className="section-title">The All-in-One<br /><span>Business Platform</span></h2>
          </div>
          <div className="why-odoo-grid">
            {[
              { icon: '🔗', title: 'All-in-One', desc: 'Replace 10+ fragmented tools with one unified platform that covers every business process.' },
              { icon: '📱', title: 'Mobile Access', desc: 'Manage your entire business from anywhere with powerful native mobile applications.' },
              { icon: '📊', title: 'Real-Time Analytics', desc: 'Make data-driven decisions with beautiful dashboards and instant business insights.' },
              { icon: '🚀', title: 'Scalable', desc: 'Grows from startup to enterprise — add modules and users as your business expands.' },
              { icon: '🌍', title: 'Open Source', desc: 'Community-driven development with thousands of third-party apps and integrations.' },
              { icon: '💰', title: 'Cost Effective', desc: 'Dramatically lower TCO compared to proprietary ERP systems like SAP or Oracle.' },
            ].map((w, i) => (
              <div key={i} className="why-odoo-card">
                <span className="woc-icon">{w.icon}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="odoo-timeline">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Implementation</div>
            <h2 className="section-title">Our Proven<br /><span>Process</span></h2>
          </div>
          <div className="timeline-track">
            {timeline.map((t, i) => (
              <div key={i} className="tl-item">
                <div className="tl-marker">
                  <span className="tl-num">{i + 1}</span>
                </div>
                <div className="tl-card">
                  <span className="tl-phase">{t.phase}</span>
                  <h3>{t.title}</h3>
                  <span className="tl-duration">{t.duration}</span>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="odoo-cta-section">
        <div className="container">
          <div className="odoo-cta-inner">
            <div className="odoo-cta-glow" />
            <img src="/odoo_logo_inverted.png" alt="Odoo" className="odoo-cta-logo" />
            <div className="section-label">Ready to Transform?</div>
            <h2 className="section-title">Start Your Odoo<br /><span>Journey Today</span></h2>
            <p className="section-desc">Get in touch with our Odoo experts for a free consultation and implementation assessment.</p>
            <div className="odoo-cta-btns">
              <button className="btn btn-gold btn-lg" onClick={() => onNavigate('contact')}>
                Schedule Consultation <ArrowRight />
              </button>
              <button className="btn btn-odoo-outline btn-lg" onClick={() => onNavigate('services')}>
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OdooPage;