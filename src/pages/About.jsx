import React from 'react';
import AboutComponent from '../components/About';

export default function About() {
  const whyChooseUs = [
    {
      title: "One Technology Partner",
      desc: "Software, AI, hiring, cloud infrastructure, and documentation—all delivered through one trusted organization."
    },
    {
      title: "AI-Driven Innovation",
      desc: "We integrate artificial intelligence into every stage of software development and business operations."
    },
    {
      title: "Enterprise Security",
      desc: "Our platforms follow secure development practices with cloud security, compliance, and encrypted infrastructure."
    },
    {
      title: "Rapid Delivery",
      desc: "Agile development with transparent milestones, continuous demos, and automated deployments."
    },
    {
      title: "Long-Term Partnership",
      desc: "From strategy and development to maintenance and future enhancements, we stay with you throughout your growth journey."
    }
  ];

  return (
    <>
      {/* Standard About Component */}
      <AboutComponent />

      {/* Achievements & Recognition Section */}
      <section className="why-section" style={{ backgroundColor: 'var(--color-bg)', borderTop: '1px solid #E5E7EB', padding: '80px 24px' }}>
        <div className="section-title-wrapper" style={{ marginBottom: '60px', textAlign: 'center' }}>
          <span className="section-tag">Accolades & Recognition</span>
          <h2 className="section-title">Validated Innovation at National Scale</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          
          <div className="why-card" style={{ padding: '30px', borderRadius: '16px', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}>
            <span style={{ fontSize: '0.8rem', color: '#2563EB', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.08em' }}>First Prize Winner</span>
            <h3 style={{ color: '#09543F', fontSize: '1.25rem', marginTop: '8px', marginBottom: '12px', fontWeight: '700' }}>
              Yi IDS 6.0 Hackathon
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
              Awarded First Prize along with a cash reward of INR 10,000 at the Young Indians Ideas Showcase (IDS 6.0) hackathon, recognizing our team's rapid prototyping and engineering capability.
            </p>
          </div>

          <div className="why-card" style={{ padding: '30px', borderRadius: '16px', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}>
            <span style={{ fontSize: '0.8rem', color: '#2563EB', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Selected Startup</span>
            <h3 style={{ color: '#09543F', fontSize: '1.25rem', marginTop: '8px', marginBottom: '12px', fontWeight: '700' }}>
              Eureka 2025 — IIT Bombay
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
              Our AI-powered legal platform was selected in the prestigious Eureka 2025 startup showcase hosted by IIT Bombay, validating our core technology among India's top innovations.
            </p>
          </div>

          <div className="why-card" style={{ padding: '30px', borderRadius: '16px', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}>
            <span style={{ fontSize: '0.8rem', color: '#2563EB', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Runner-Up</span>
            <h3 style={{ color: '#09543F', fontSize: '1.25rem', marginTop: '8px', marginBottom: '12px', fontWeight: '700' }}>
              Startup Arena Pitching
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6', margin: 0 }}>
              Secured the Runner-up position in the Startup Arena pitching showcase, demonstrating commercial viability, pitch traction, and scalable technical implementation.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-section" style={{ backgroundColor: 'transparent', borderTop: '1px solid #E5E7EB' }}>
        <div className="section-title-wrapper" style={{ marginBottom: '60px' }}>
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Engineered for Quality, Scale, and Long-Term Success</h2>
        </div>
        
        <div className="why-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {whyChooseUs.map((item, idx) => (
            <div className="why-card" key={idx} style={{ padding: '30px', borderRadius: '16px', border: '1px solid var(--color-border)', backgroundColor: '#FFFFFF' }}>
              <h3 className="why-card-title" style={{ color: '#09543F', fontSize: '1.2rem', marginBottom: '12px', fontWeight: '700' }}>{item.title}</h3>
              <p className="why-card-desc" style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
