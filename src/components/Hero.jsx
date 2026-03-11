import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = ({ title, subtitle, description, primaryAction, secondaryAction, gradient = 'gradient-primary', scrollTo }) => {
  return (
    <section className={`hero ${gradient}`}>
      <div className="hero-container">
        <div className="hero-content fade-in-up">
          <span className="hero-badge">Welcome to Innovation</span>
          <h1 className="hero-title">{title}</h1>
          <h2 className="hero-subtitle">{subtitle}</h2>
          <p className="hero-description">{description}</p>
          
          <div className="hero-actions">
            {primaryAction && (
              <button className="btn btn-primary" onClick={primaryAction.action}>
                {primaryAction.label}
                <ArrowRight size={18} />
              </button>
            )}
            {secondaryAction && (
              <button className="btn btn-secondary" onClick={secondaryAction.action}>
                {secondaryAction.label}
              </button>
            )}
          </div>
        </div>

        <div className="hero-visual fade-in-right">
          <div className="hero-glow"></div>
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
      </div>

      {scrollTo && (
        <button className="scroll-indicator" onClick={scrollTo}>
          <ChevronDown size={24} />
        </button>
      )}
    </section>
  );
};

export default Hero;
