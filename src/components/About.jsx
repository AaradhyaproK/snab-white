import React from 'react';
import { useCollection } from '../hooks/useCollection';

const DEFAULT_VALUES = [
  "Innovation First",
  "Customer Success",
  "Transparency",
  "Excellence",
  "Continuous Learning",
  "Long-Term Partnerships"
];

export default function About() {
  const { data: values } = useCollection("values", DEFAULT_VALUES);

  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <div className="about-text-side">
          <span className="section-tag">About Us</span>
          <h2 className="timeline-title" style={{ marginBottom: '24px' }}>
            Turning Ideas into Intelligent Solutions
          </h2>
          <p>
            At SNAB Innovations, we believe technology should solve real-world problems—not create new ones.
          </p>
          <p>
            We specialize in building scalable software, AI-powered applications, cloud infrastructure, automation systems, and enterprise solutions that help businesses grow efficiently.
          </p>
          <p>
            Whether you're a startup launching your first product or an established company modernizing operations, our team delivers secure, reliable, and future-ready solutions tailored to your goals.
          </p>
          
          <div className="about-mission-vision">
            <div className="mv-card">
              <h3>Our Mission</h3>
              <p>To empower businesses through innovative technology that accelerates growth, improves productivity, and creates lasting impact.</p>
            </div>
            <div className="mv-card">
              <h3>Our Vision</h3>
              <p>To become a globally trusted technology partner known for innovation, quality, and customer success.</p>
            </div>
          </div>
        </div>
        
        <div className="about-values-side">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            {values.map((val, idx) => {
              const name = typeof val === 'string' ? val : val.name || val.title;
              return (
                <div className="value-item" key={val.id || idx}>
                  <div className="value-check-icon">✓</div>
                  <span className="value-name">{name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
