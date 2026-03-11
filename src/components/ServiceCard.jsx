import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description, features = [], onClick, isHighlighted = false }) => {
  return (
    <div className={`service-card ${isHighlighted ? 'highlighted' : ''}`}>
      <div className="service-card-glow"></div>
      
      <div className="service-icon">
        <Icon size={40} />
      </div>

      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>

      {features.length > 0 && (
        <ul className="service-features">
          {features.map((feature, idx) => (
            <li key={idx}>
              <span className="feature-check">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <button className="service-cta" onClick={onClick}>
        Learn More
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default ServiceCard;
