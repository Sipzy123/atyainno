import React from 'react';
import './OdooPage.css';

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const OdooPage = ({ onNavigate }) => {
  const services = [
    { 
      icon: '/implementation.png',
      title: 'Odoo Implementation',
      desc: 'Complete ERP setup, configuration, and go-live support tailored to your business processes.',
      features: ['System Configuration', 'Module Selection', 'Data Migration', 'Go-Live Support']
    },
    { 
      icon: '/custom_module.png',
      title: 'Custom Module Dev',
      desc: 'Build custom Odoo modules to extend core functionality and meet specific requirements.',
      features: ['Custom Modules', 'API Integration', 'Automation', 'Performance Tuning']
    },
    { 
      icon: '/customization.png',
      title: 'Odoo Customization',
      desc: 'Tailor Odoo modules, workflows and UI to exactly match your business operations.',
      features: ['Workflow Design', 'Field Customization', 'Custom Reports', 'UI Enhancement']
    },
    { 
      icon: '/training.png',
      title: 'Training & Support',
      desc: 'Comprehensive training programs and dedicated ongoing support for your entire team.',
      features: ['User Training', 'Admin Training', 'Documentation', 'Technical Support']
    },
    { 
      icon: '/optimization.png',
      title: 'Process Optimization',
      desc: 'Analyze and optimize your business processes leveraging full Odoo capabilities.',
      features: ['Process Mapping', 'Gap Analysis', 'Automation', 'KPI Tracking']
    },
    { 
      icon: '/security.png',
      title: 'Security & Compliance',
      desc: 'Ensure your Odoo system meets the highest security and compliance standards.',
      features: ['Access Control', 'Data Security', 'Audit Trails', 'GDPR Compliance']
    },
  ];

  const modules = [
    { icon: '/accounting.svg', name: 'Accounting', desc: 'Financial management' },
    { icon: '/inventory.svg', name: 'Inventory', desc: 'Stock & warehouse' },
    { icon: '/sales.svg', name: 'Sales', desc: 'Orders & quotations' },
    { icon: '/manufacturing.svg', name: 'Manufacturing', desc: 'Production planning' },
    { icon: '/crm.svg', name: 'CRM', desc: 'Customer relations' },
    { icon: '/purchase.svg', name: 'Purchase', desc: 'Procurement' },
    { icon: '/hr.svg', name: 'HR', desc: 'Human resources' },
    { icon: '/dashboard.svg', name: 'Analytics', desc: 'Business intelligence' },
    { icon: '/website.svg', name: 'Website', desc: 'eCommerce & CMS' },
    { icon: '/email.svg', name: 'Email Marketing', desc: 'Campaigns & automation' },
    { icon: '/project.svg', name: 'Project', desc: 'Task management' },
    { icon: '/POS.svg', name: 'Point of Sale', desc: 'Retail & POS' },
  ];

  const timeline = [
    { phase: 'Phase 1', title: 'Collect Requirements', duration: 'Step 1', desc: 'Gathering and analyzing all client requirements.' },
    { phase: 'Phase 2', title: 'Brainstorming & Demo Creation', duration: 'Step 2', desc: 'Brainstorming the requirements and how it can be implemented in the easiest way.' },
    { phase: 'Phase 3', title: 'Customization & Implementation', duration: 'Step 3', desc: 'Upon fulfilling the requirement the actual customization and implementation starts.' },
    { phase: 'Phase 4', title: 'Testing & Optimization', duration: 'Step 4', desc: 'Comprehensive QA, performance optimization, and user acceptance testing.' },
    { phase: 'Phase 5', title: 'Training & Go Live', duration: 'Step 5', desc: 'Team training and production deployment.' },
    { phase: 'Phase 6', title: 'Post Launch Support', duration: 'Ongoing', desc: 'Continuous support, improvements, and system optimization.' },
  ];

  const industries = [
    { icon: '🏭', name: 'Plastic Packaging', desc: 'Enhancing production tracking and quality control.', modules: ['Sales', 'Purchase', 'Inventory', 'Dashboard', 'Manufacturing', 'Maintenance', 'Quality', 'Payroll', 'HR'] },
    { icon: '🧵', name: 'Textile Industries', desc: 'Optimizing supply chain and raw material management.', modules: ['Sales', 'Purchase', 'Inventory', 'Dashboard', 'Manufacturing', 'Maintenance', 'Quality', 'Payroll', 'HR'] },
    { icon: '📦', name: 'Corrugated Box Packaging', desc: 'Streamlining bespoke orders and warehouse logistics.', modules: ['Sales', 'Purchase', 'Inventory', 'Dashboard', 'Manufacturing', 'Maintenance', 'Quality', 'Payroll', 'HR'] },
    { icon: '📡', name: 'Network Infrastructure', desc: 'Managing large-scale deployments and field operations.', modules: ['Inventory', 'Dashboard', 'Payroll', 'HR'] },
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
                Authorised Implementation Partner
              </div>
            </div>

            <h1 className="page-hero-title fade-up fade-up-d1">
              Enterprise ERP<br /><span>Implementation</span>
            </h1>
            <p className="page-hero-desc fade-up fade-up-d2">
              As an Authorise Implementation Partner, we deliver comprehensive ERP implementations, custom module development, and ongoing support that transforms how your business operates.
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
              <img src="/odoo_logo.png" alt="Odoo Learning Partner" className="opc-badge-img" />
              <div className="opc-divider" />
              <div className="opc-meta">
                <span>Official Partnership</span>
                <strong>Since 2025</strong>
              </div>
            </div>

            <div className="odoo-stats">
              {[
                { n: '5+', l: 'Implementations' },
                { n: '100%', l: 'Success Rate' },
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
                <span className="odoo-svc-icon">
                  <img src={s.icon} alt={s.title} className="odoo-svc-img" />
                </span>
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
                <span className="omc-icon"><img src={m.icon} alt={m.name} className="odoo-mod-svg" /></span>
                <strong>{m.name}</strong>
                <small>{m.desc}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="odoo-industries-section">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Our Experience</div>
            <h2 className="section-title">Industries We<br /><span>Transform</span></h2>
          </div>
          <div className="odoo-ind-grid">
            {industries.map((ind, i) => (
              <div key={i} className="odoo-ind-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="oic-icon">{ind.icon}</span>
                <h3>{ind.name}</h3>
                <p>{ind.desc}</p>
                <div className="oic-tags">
                  {ind.modules.map(mod => (
                    <span key={mod} className="oic-tag">{mod}</span>
                  ))}
                </div>
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
              { icon: '/allinone.png', title: 'All-in-One', desc: 'Replace 10+ fragmented tools with one unified platform that covers every business process.' },
              { icon: '/mobile.png', title: 'Mobile Access', desc: 'Manage your entire business from anywhere with powerful native mobile applications.' },
              { icon: '/analytics.png', title: 'Real-Time Analytics', desc: 'Make data-driven decisions with beautiful dashboards and instant business insights.' },
              { icon: '/scalable.png', title: 'Scalable', desc: 'Grows from startup to enterprise — add modules and users as your business expands.' },
              { icon: '/opensource.png', title: 'Open Source', desc: 'Community-driven development with thousands of third-party apps and integrations.' },
              { icon: '/cost.png', title: 'Cost Effective', desc: 'Dramatically lower TCO compared to proprietary ERP systems like SAP or Oracle.' },
            ].map((w, i) => (
              <div key={i} className="why-odoo-card">
                <span className="woc-icon"><img src={w.icon} alt={w.title} className="why-odoo-svg" /></span>
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

      {/* ── DUAL CTA ── */}
      <section className="odoo-dual-cta-section">
        <div className="container">
          <div className="odoo-dual-cta-grid">

            {/* Start Fresh */}
            <div className="odoo-cta-card odoo-cta-new">
              <div className="odoo-cta-glow" />
              <div className="section-label" style={{ margin: 0 }}>Start New</div>
              <h3>Ready to Transform?<br /><span>Implement Odoo</span></h3>
              <p>Get in touch with our Odoo experts for a free consultation and customized implementation assessment tailored to your business needs.</p>
              <button className="btn btn-gold" onClick={() => onNavigate('contact')}>Start Your Journey</button>
            </div>

            {/* AMC */}
            <div className="odoo-cta-card odoo-cta-amc">
              <div className="odoo-cta-glow" />
              <div className="section-label" style={{ margin: 0, color: '#c49ab8' }}>Optimization</div>
              <h3>Already using Odoo?<br /><span>Get AMC Support</span></h3>
              <p>We provide comprehensive solutions to existing users via Annual Maintenance Contracts (AMC) and reliable technical support to optimize your system.</p>
              <button className="btn btn-outline-light" onClick={() => onNavigate('contact')}>Get Support</button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default OdooPage;