import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Ecosystem() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const branches = [
    {
      id: 'innovations',
      tagline: "AI & Software Engineering",
      title: "SNAB Innovations",
      desc: "We design and develop enterprise-grade software powered by Artificial Intelligence, cloud-native architecture, automation, and scalable engineering.",
      listLabel: "Core Capabilities",
      items: [
        "AI Applications", "SaaS Development", "Enterprise Software", 
        "Mobile Apps", "Cloud Systems", "DevOps Pipelines"
      ],
      ctaText: "Start Project",
      ctaLink: "/contact",
      slideDirection: 'left' // Slides from left
    },
    {
      id: 'interview',
      tagline: "Intelligent Hiring Platform",
      title: "InterviewXpert",
      desc: "An AI-powered technical interview platform helping companies identify top talent with structured assessments and automated candidate evaluations.",
      listLabel: "Key Features",
      items: [
        "AI Interviewer", "Live Coding Tasks", "Resume Analysis", 
        "Candidate Rankings", "Video Assessments", "HR Analytics"
      ],
      ctaText: "Visit Site",
      ctaLink: "https://interviewxpert.in",
      brochure: "/brochure/Brocher-interviewxpert.pdf",
      slideDirection: 'up' // Slides from bottom
    },
    {
      id: 'notary',
      tagline: "Digital Legal Support",
      title: "SNAB Notary",
      desc: "Streamlines document verification, drafting, and legal support for businesses. Reduces document preparation latency by up to 90%.",
      listLabel: "Legal Services",
      items: [
        "Notary Assistance", "Rental Agreements", "Business Contracts", 
        "Stamp Services", "Affidavits", "Partnership Deeds"
      ],
      ctaText: "Visit Site",
      ctaLink: "https://notery.interviewxpert.in/",
      slideDirection: 'right' // Slides from right
    }
  ];

  return (
    <section className="about-section" id="ecosystem" style={{ borderTop: '1px solid var(--color-border)', backgroundColor: 'transparent' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header Block */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <span className="section-tag">Ecosystem Platform</span>
          <h2 className="timeline-title" style={{ marginTop: '12px', marginBottom: '16px' }}>
            The SNAB Ecosystem
          </h2>
          <p className="grey-text" style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Instead of offering isolated services, SNAB has built a connected ecosystem that helps businesses operate faster, hire smarter, and manage documentation seamlessly.
          </p>
        </div>

        {/* Scroll-driven Side-by-Side Horizontal Row */}
        <div className="ecosystem-scroll-row">
          {branches.map((branch, idx) => (
            <div
              key={branch.id}
              ref={(el) => (cardRefs.current[idx] = el)}
              className={`ecosystem-scroll-card slide-${branch.slideDirection}`}
            >
              <div className="ecosystem-card-inner">
                {/* Upper Card Segment */}
                <div>
                  <span className="blog-card-tag" style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.7rem', fontWeight: 'bold' }}>
                    {branch.tagline}
                  </span>
                  
                  {branch.id === 'interview' ? (
                    <div style={{ marginTop: '12px', marginBottom: '16px', height: '40px', display: 'flex', alignItems: 'center' }}>
                      <img 
                        src="/brochure/logo-dark.png" 
                        alt="InterviewXpert Logo" 
                        style={{ height: '36px', width: 'auto', objectFit: 'contain' }} 
                      />
                    </div>
                  ) : (
                    <h3 className="process-item-title" style={{ fontSize: '1.45rem', marginTop: '12px', marginBottom: '16px', color: '#09543F', height: '40px', display: 'flex', alignItems: 'center' }}>
                      {branch.title}
                    </h3>
                  )}
                  
                  <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '24px', minHeight: '68px' }}>
                    {branch.desc}
                  </p>

                  <h4 style={{ margin: '0 0 12px 0', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>
                    {branch.listLabel}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {branch.items.map((item, itemIdx) => (
                      <span 
                        key={itemIdx} 
                        className="industry-pill" 
                        style={{ 
                          margin: 0, 
                          fontSize: '0.75rem', 
                          padding: '6px 12px', 
                          backgroundColor: 'var(--color-bg)',
                          border: '1px solid var(--color-border)',
                          color: 'var(--color-text-main)',
                          fontWeight: '600'
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Lower Card Segment (Buttons Actions) */}
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: 'auto', borderTop: '1px solid var(--color-border)', paddingTop: '20px' }}>
                  {branch.ctaLink.startsWith('http') ? (
                    <a 
                      href={branch.ctaLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-primary" 
                      style={{ display: 'inline-flex', padding: '10px 20px', fontSize: '0.85rem' }}
                    >
                      {branch.ctaText} &rarr;
                    </a>
                  ) : (
                    <Link to={branch.ctaLink} className="btn btn-primary" style={{ display: 'inline-flex', padding: '10px 20px', fontSize: '0.85rem' }}>
                      {branch.ctaText} &rarr;
                    </Link>
                  )}
                  {branch.brochure && (
                    <a 
                      href={branch.brochure} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-secondary" 
                      style={{ display: 'inline-flex', padding: '10px 20px', fontSize: '0.85rem', backgroundColor: '#FFFFFF' }}
                    >
                      Brochure &rarr;
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
