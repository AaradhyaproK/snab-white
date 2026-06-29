import React from 'react';
import { useCollection } from '../hooks/useCollection';

const DEFAULT_REVIEWS = [
  {
    quote: "SNAB Innovations delivered beyond expectations. Their expertise and professionalism helped us launch our product successfully.",
    author: "Startup Founder",
    title: "Seed Stage FinTech",
    avatarFill: "#F1F5F9",
    avatarColor: "#475569",
    avatarBody: "#334155"
  },
  {
    quote: "Excellent communication, technical excellence, and timely delivery. They modernize legacy workflows with high quality.",
    author: "Enterprise Client",
    title: "Global Logistics Group",
    avatarFill: "#ECFDF5",
    avatarColor: "#047857",
    avatarBody: "#065F46"
  },
  {
    quote: "Their AI solutions transformed our customer support operations and allowed us to scale without limits.",
    author: "Business Owner",
    title: "E-Commerce Brand Owner",
    avatarFill: "#FFFBEB",
    avatarColor: "#B45309",
    avatarBody: "#92400E"
  }
];

export default function Testimonials() {
  const { data: reviews } = useCollection("testimonials", DEFAULT_REVIEWS);

  return (
    <section className="testimonials-section">
      <div className="section-container">
        <h2 className="testimonials-header">A few words from founders we hire for.</h2>
        
        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div className="testimonial-card" key={rev.id || idx}>
              <p className="card-quote">"{rev.quote}"</p>
              <div className="card-author">
                <div className="author-avatar-wrapper">
                  <svg className="author-avatar" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="50" fill={rev.avatarFill} />
                    <circle cx="50" cy="35" r="15" fill={rev.avatarColor} />
                    <path d="M15 82C15 63.2223 30.669 48 50 48C69.331 48 85 63.2223 85 82" fill={rev.avatarBody} />
                  </svg>
                </div>
                <div>
                  <h4 className="author-name">{rev.author}</h4>
                  <span className="author-title">{rev.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
