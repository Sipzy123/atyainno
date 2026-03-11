import React from 'react';
import { Star } from 'lucide-react';
import './TestimonialCard.css';

const TestimonialCard = ({ name, company, image, rating = 5, text, country }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-glow"></div>
      
      <div className="testimonial-rating">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>

      <p className="testimonial-text">"{text}"</p>

      <div className="testimonial-author">
        <div className="author-avatar">
          {image ? (
            <img src={image} alt={name} />
          ) : (
            <span>{name.charAt(0)}</span>
          )}
        </div>
        <div className="author-info">
          <p className="author-name">{name}</p>
          <p className="author-company">{company} {country && `(${country})`}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
