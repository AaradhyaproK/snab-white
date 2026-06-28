import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import InteractiveBlueprint from '../components/InteractiveBlueprint';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <Timeline />
      
      {/* Interactive Architecture Simulator */}
      <InteractiveBlueprint />
      
      {/* Dynamic Industries Served Segment */}
      <section className="industries-section">
        <div className="industries-container" style={{ textAlign: 'center' }}>
          <span className="section-tag" style={{ color: '#E6F2ED' }}>Industries We Serve</span>
          <h2 className="timeline-title" style={{ color: '#FFFFFF', marginTop: '12px' }}>
            Domain Expertise Across Diverse Sectors
          </h2>
          <div className="industries-grid">
            {["Healthcare", "Education", "Retail", "Manufacturing", "Logistics", "Finance", "Real Estate", "Hospitality", "Startups", "Government", "E-Commerce", "SaaS"].map((ind, idx) => (
              <span className="industry-pill" key={idx}>{ind}</span>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ />

      {/* Bottom CTA Block */}
      <section className="about-section" style={{ textAlign: 'center', backgroundColor: '#E6F2ED', border: 'none' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
          <span className="section-tag">Let's Connect</span>
          <h2 className="timeline-title" style={{ marginTop: '12px', marginBottom: '20px' }}>
            Ready to Build Your Next Digital Product?
          </h2>
          <p className="grey-text" style={{ fontSize: '1.1rem', marginBottom: '32px' }}>
            Let's turn your vision into reality with innovative technology solutions. Schedule a consultation or send us a message today.
          </p>
          <div className="hero-actions" style={{ justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary">Schedule a Consultation <span className="arrow-right">→</span></Link>
            <Link to="/contact" className="btn btn-secondary" style={{ backgroundColor: '#FFFFFF' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
