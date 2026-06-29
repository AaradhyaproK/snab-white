import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from './Marquee';

export default function Hero() {
  return (
    <section className="hero" style={{ padding: '140px 0 60px' }}>
      {/* Top Half: Header Branding & CTAs */}
      <div className="hero-container" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '850px', padding: '0 24px' }}>
        <span 
          className="hero-tag hero-reveal" 
          style={{ animationDelay: '100ms' }}
        >
          Build Smarter. Scale Faster.
        </span>
        <h1 
          className="hero-title hero-reveal" 
          style={{ 
            fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)', 
            lineHeight: '1.1', 
            marginBottom: '24px',
            animationDelay: '250ms'
          }}
        >
          Innovate Without <span className="green-text">Limits.</span>
        </h1>
        <p 
          className="hero-subheading hero-reveal" 
          style={{ 
            margin: '0 auto 40px', 
            maxWidth: '720px', 
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            animationDelay: '400ms'
          }}
        >
          SNAB Innovations helps startups, businesses, and enterprises transform ideas into powerful digital products through AI, software development, cloud solutions, DevOps, and technology consulting.
        </p>

        <div 
          className="hero-actions hero-reveal" 
          style={{ 
            justifyContent: 'center', 
            gap: '16px', 
            marginBottom: '40px',
            animationDelay: '550ms'
          }}
        >
          <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 28px' }}>
            Book Consultation <span className="arrow-right">→</span>
          </Link>
          <Link to="/services" className="btn btn-secondary" style={{ padding: '14px 28px', backgroundColor: '#FFFFFF' }}>
            Explore Services
          </Link>
        </div>
      </div>

      {/* Edge-to-Edge Animated Infinite Marquee Ticker */}
      <div 
        className="hero-reveal" 
        style={{ margin: '20px 0 40px', animationDelay: '700ms' }}
      >
        <Marquee />
      </div>

      {/* Bottom Half: Testimonial Badge */}
      <div className="hero-container" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '850px', padding: '0 24px' }}>
        <div 
          className="hero-testimonial glass-card hero-reveal" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center',
            gap: '16px',
            padding: '16px 24px', 
            borderRadius: '20px',
            border: '1px solid var(--color-border)',
            boxShadow: '0 4px 20px var(--color-shadow)',
            textAlign: 'left',
            maxWidth: '640px',
            animationDelay: '850ms'
          }}
        >
          <div className="testimonial-avatar-wrapper" style={{ flexShrink: 0 }}>
            <svg className="avatar-svg" width="44" height="44" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" fill="#E6F2ED"/>
              <circle cx="50" cy="40" r="16" fill="#09543F"/>
              <path d="M50 58 C35 58, 25 72, 25 85 L75 85 C75 72, 65 58, 50 58 Z" fill="#064E3B"/>
            </svg>
          </div>
          <blockquote className="hero-quote" style={{ border: 'none', padding: 0, margin: 0 }}>
            <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.4', fontStyle: 'italic', color: 'var(--color-text-main)' }}>
              "Their AI solutions transformed our customer support operations and allowed us to scale without limits."
            </p>
            <cite className="hero-cite" style={{ display: 'block', fontSize: '0.75rem', fontWeight: 'bold', color: 'var(--color-accent)', marginTop: '4px' }}>
              — Business Owner
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
