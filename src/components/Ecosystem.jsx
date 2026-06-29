import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Ecosystem() {
  const [activeTab, setActiveTab] = useState('innovations');

  const branches = {
    innovations: {
      tagline: "AI & Software Engineering",
      title: "SNAB Innovations",
      subtitle: "Building Intelligent Digital Products",
      desc: "We design and develop enterprise-grade software powered by Artificial Intelligence, cloud-native architecture, automation, and scalable engineering. Whether you're launching an MVP or modernizing enterprise infrastructure, we become your long-term technology partner.",
      listLabel: "Core Capabilities",
      items: [
        "AI Applications", "SaaS Development", "Enterprise Software", 
        "Mobile Applications", "Cloud Infrastructure", "DevOps Automation", 
        "UI/UX Engineering", "API Development", "Business Automation"
      ],
      ctaText: "Start Your Project",
      ctaLink: "/contact"
    },
    interview: {
      tagline: "Intelligent Hiring Platform",
      title: "InterviewXpert",
      subtitle: "Hire Better. Faster. Smarter.",
      desc: "InterviewXpert is SNAB's AI-powered technical interview platform helping companies identify top talent with structured assessments and automated candidate evaluation.",
      listLabel: "Key Features",
      items: [
        "AI Interview Assistant", "Live Coding Interviews", "Technical Assessments", 
        "Resume Analysis", "Candidate Ranking", "Video Interview Platform", 
        "HR Dashboard", "Recruiter Analytics", "Automated Feedback Reports"
      ],
      targetLabel: "Perfect For",
      targets: ["Startups", "HR Teams", "Recruitment Agencies", "Enterprises", "Campus Hiring", "Remote Hiring"],
      ctaText: "Schedule a Demo",
      ctaLink: "/contact"
    },
    notary: {
      tagline: "Digital Legal Support",
      title: "SNAB Notary",
      subtitle: "Digital Documentation Made Simple",
      desc: "SNAB Notary streamlines document verification, drafting, and legal support for individuals and businesses. Our digital-first approach simplifies documentation while reducing turnaround time.",
      listLabel: "Documentation Services",
      items: [
        "Notary Assistance", "Affidavit Preparation", "Rental Agreements", 
        "Business Agreements", "Partnership Documents", "Stamp Paper Services", 
        "Legal Documentation Support", "Digital Verification Guidance"
      ],
      ctaText: "Request Notary Services",
      ctaLink: "/contact"
    }
  };

  const activeBranch = branches[activeTab];

  return (
    <section className="about-section" id="ecosystem" style={{ borderTop: '1px solid var(--color-border)', backgroundColor: 'transparent' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Block */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span className="section-tag">Ecosystem Platform</span>
          <h2 className="timeline-title" style={{ marginTop: '12px', marginBottom: '16px' }}>
            The SNAB Ecosystem
          </h2>
          <p className="grey-text" style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Instead of offering isolated services, SNAB has built a connected ecosystem that helps businesses operate faster, hire smarter, and manage documentation seamlessly.
          </p>
        </div>

        {/* Dynamic Tab Triggers */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {Object.keys(branches).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`tech-tab-btn ${activeTab === key ? 'active' : ''}`}
              style={{ padding: '12px 28px', fontSize: '1rem', fontWeight: '700' }}
            >
              {branches[key].title}
            </button>
          ))}
        </div>

        {/* Tab Detail Card */}
        <div className="glass-card" style={{ padding: '40px', borderRadius: '24px', border: '1px solid var(--color-border)' }}>
          <div className="about-grid" style={{ alignItems: 'flex-start', gap: '48px' }}>
            
            {/* Left Column: Details */}
            <div>
              <span className="blog-card-tag" style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.75rem', fontWeight: 'bold' }}>
                {activeBranch.tagline}
              </span>
              <h3 className="process-item-title" style={{ fontSize: '1.8rem', marginTop: '8px', marginBottom: '8px', color: '#09543F' }}>
                {activeBranch.subtitle}
              </h3>
              <p className="grey-text" style={{ fontSize: '1rem', lineHeight: '1.7', marginBottom: '32px' }}>
                {activeBranch.desc}
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to={activeBranch.ctaLink} className="btn btn-primary" style={{ display: 'inline-flex', padding: '12px 28px' }}>
                  {activeBranch.ctaText} <span className="arrow-right">→</span>
                </Link>
                {activeTab === 'interview' && (
                  <a 
                    href="/brochure/Brocher-interviewxpert.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary" 
                    style={{ display: 'inline-flex', padding: '12px 28px', backgroundColor: '#FFFFFF' }}
                  >
                    View Brochure &rarr;
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Grid Lists */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div>
                <h4 style={{ margin: '0 0 16px 0', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>
                  {activeBranch.listLabel}
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {activeBranch.items.map((item, idx) => (
                    <span 
                      key={idx} 
                      className="industry-pill" 
                      style={{ 
                        margin: 0, 
                        fontSize: '0.85rem', 
                        padding: '8px 16px', 
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

              {activeBranch.targets && (
                <div>
                  <h4 style={{ margin: '0 0 16px 0', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)' }}>
                    {activeBranch.targetLabel}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {activeBranch.targets.map((target, idx) => (
                      <span 
                        key={idx} 
                        className="industry-pill" 
                        style={{ 
                          margin: 0, 
                          fontSize: '0.85rem', 
                          padding: '8px 16px', 
                          backgroundColor: '#E6F2ED',
                          border: '1px solid rgba(9, 84, 63, 0.1)',
                          color: '#09543F',
                          fontWeight: '600'
                        }}
                      >
                        {target}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
