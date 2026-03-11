import React from 'react';
import './AboutUs.css';

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const AboutUs = ({ onNavigate }) => {
  const values = [
    { icon: '⚡', title: 'Innovation', desc: 'We embrace cutting-edge technologies and creative thinking to solve complex business challenges.' },
    { icon: '🤝', title: 'Collaboration', desc: 'We partner closely with clients, treating their goals as our own throughout every project.' },
    { icon: '🎯', title: 'Excellence', desc: 'Every line of code, every design decision is crafted to exceed expectations.' },
    { icon: '🔒', title: 'Integrity', desc: 'We operate with full transparency, honesty, and ethical principles in every interaction.' },
  ];

  const team = [
    { icon: '💻', title: 'Expert Developers', desc: 'Full-stack developers proficient in latest and emerging technologies' },
    { icon: '🎨', title: 'Creative Designers', desc: 'UI/UX designers creating beautiful, intuitive interfaces' },
    { icon: '📊', title: 'Project Managers', desc: 'Experienced managers ensuring on-time, on-budget delivery' },
    { icon: '🎯', title: 'Business Consultants', desc: 'Strategic consultants helping optimize your technology investment' },
  ];

  const reasons = [
    { n: '01', title: 'Proven Track Record', desc: '50+ successful projects delivered to satisfied clients across various industries globally.' },
    { n: '02', title: 'Expert Team', desc: 'Highly skilled professionals with 8+ years average experience in the latest technologies.' },
    { n: '03', title: 'Customized Solutions', desc: 'We architect solutions tailored precisely to your unique business needs and goals.' },
    { n: '04', title: 'Transparent Communication', desc: 'Regular updates and crystal-clear communication throughout the entire project lifecycle.' },
    { n: '05', title: 'Competitive Pricing', desc: 'World-class quality at rates that make sense for your business and maximize ROI.' },
    { n: '06', title: 'Post-Launch Support', desc: 'Dedicated ongoing support and optimization ensuring your solution stays peak-performing.' },
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-bg">
          <div className="about-orb" />
          <div className="about-grid" />
        </div>
        <div className="container about-hero-inner">
          <div className="section-label">About Us</div>
          <h1 className="page-hero-title">
            Transforming Business<br /><span>Through Technology</span>
          </h1>
          <p className="page-hero-desc">
            We are an India-based IT company dedicated to delivering innovative technology solutions that help businesses thrive in the digital age. Passionate engineers, designers and strategists — united by one goal: your success.
          </p>
          <button className="btn btn-gold btn-lg" onClick={() => onNavigate('contact')}>
            Work With Us <ArrowRight />
          </button>
        </div>
      </section>

      {/* Story */}
      <section className="story-section">
        <div className="container story-inner">
          <div className="story-text">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">Built on Passion<br /><span>Driven by Purpose</span></h2>
            <p>Founded with a vision to democratize access to world-class IT solutions, Atya Inno has been helping businesses transform their operations through innovative technology for over a decade.</p>
            <p>We started as a small team of passionate developers and have grown into a full-service IT solutions company. Our journey has been marked by countless successful projects, satisfied clients, and technological innovations that made real differences.</p>
            <p>Today, we continue our mission — delivering exceptional solutions that drive business growth and digital transformation for clients across India and the United States.</p>
          </div>
          <div className="story-visual">
            <div className="story-card">
              <span className="story-card-icon">🌟</span>
              <h3>Our Mission</h3>
              <p>To empower businesses with innovative IT solutions that drive growth, efficiency, and lasting digital transformation.</p>
            </div>
            <div className="story-stats-grid">
              {[
                { n: '50+', l: 'Projects' },
                { n: '30+', l: 'Clients' },
                { n: '10+', l: 'Years' },
                { n: '25+', l: 'Team' },
              ].map(s => (
                <div key={s.l} className="story-stat">
                  <strong>{s.n}</strong>
                  <span>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Our Values</div>
            <h2 className="section-title">The Principles That<br /><span>Guide Everything</span></h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Our Team</div>
            <h2 className="section-title">Experienced Professionals<br /><span>Dedicated to Your Success</span></h2>
          </div>
          <div className="team-intro">
            <p>Our team consists of talented developers, designers, project managers, and consultants with diverse expertise and proven track records. With an average of 8+ years of experience, we bring deep knowledge to every project.</p>
          </div>
          <div className="team-grid">
            {team.map((t, i) => (
              <div key={i} className="team-card">
                <span className="team-icon">{t.icon}</span>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="reasons-section">
        <div className="container">
          <div className="section-header centered">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">What Sets Us<br /><span>Apart</span></h2>
          </div>
          <div className="reasons-grid">
            {reasons.map((r, i) => (
              <div key={i} className="reason-card">
                <span className="reason-num">{r.n}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-inner">
            <div className="about-cta-glow" />
            <div className="section-label">Let's Connect</div>
            <h2 className="section-title">Ready to Build<br /><span>Something Great?</span></h2>
            <p className="section-desc">Let's discuss how we can help transform your business with the right technology solutions.</p>
            <div className="about-cta-btns">
              <button className="btn btn-gold btn-lg" onClick={() => onNavigate('contact')}>
                Start a Conversation <ArrowRight />
              </button>
              <button className="btn btn-outline btn-lg" onClick={() => onNavigate('services')}>
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;