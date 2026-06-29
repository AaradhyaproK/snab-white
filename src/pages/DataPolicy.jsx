import React, { useState, useEffect } from 'react';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'collect', title: '1. Information We Collect' },
    { id: 'usage', title: '2. How We Use Information' },
    { id: 'interview', title: '3. InterviewXpert Policy' },
    { id: 'notary', title: '4. SNAB Notary Policy' },
    { id: 'cookies', title: '5. Cookie Protocols' },
    { id: 'security', title: '6. Data Safeguards' },
    { id: 'sharing', title: '7. Sharing Disclosures' },
    { id: 'retention', title: '8. Retention Matrices' },
    { id: 'rights', title: '9. Your Rights' },
    { id: 'international', title: '10. Transfers & Changes' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -40% 0px', // Observes the center band of the viewport
        threshold: 0
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="about-section" style={{ minHeight: '100vh', padding: '140px 24px 80px', position: 'relative' }}>
      
      {/* Background visual highlight */}
      <div style={{ 
        position: 'absolute', 
        top: '10%', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: '600px', 
        height: '600px', 
        background: 'radial-gradient(circle, rgba(9, 84, 63, 0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Modern Header Banner */}
        <div className="glass-card" style={{ padding: '48px', borderRadius: '24px', border: '1px solid var(--color-border)', marginBottom: '48px', background: 'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)' }}>
          <span className="section-tag">Governance & Privacy</span>
          <h1 className="timeline-title" style={{ marginTop: '12px', marginBottom: '16px', fontSize: 'clamp(2rem, 5vw, 2.75rem)' }}>
            Privacy Policy
          </h1>
          <p className="grey-text" style={{ fontSize: '1.05rem', maxWidth: '680px', margin: '0 0 24px 0' }}>
            We protect your data and verify transparency. Review our data collection parameters, processing objectives, and candidate compliance outlines.
          </p>
          <div style={{ display: 'inline-flex', padding: '8px 16px', borderRadius: '100px', backgroundColor: '#E6F2ED', border: '1px solid rgba(9, 84, 63, 0.1)', color: '#09543F', fontSize: '0.85rem', fontWeight: '700' }}>
            Effective Date: January 1, 2026
          </div>
        </div>

        {/* Split Columns Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '48px', alignItems: 'flex-start' }} className="why-grid">
          
          {/* Left Column: Sticky Outline Sidebar */}
          <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '8px' }} className="desktop-only">
            <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: '12px', paddingLeft: '12px' }}>
              Policy Sections
            </h4>
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`tech-tab-btn ${activeSection === sec.id ? 'active-outline' : ''}`}
                style={{ 
                  textAlign: 'left', 
                  padding: '12px 16px', 
                  fontSize: '0.85rem', 
                  width: '100%', 
                  border: '1px solid transparent',
                  background: 'transparent',
                  fontWeight: '600'
                }}
              >
                {sec.title}
              </button>
            ))}
          </div>

          {/* Right Column: Content Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            
            <div className="glass-card" style={{ padding: '36px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <p style={{ margin: '0 0 16px 0', lineHeight: '1.7' }}>
                Welcome to SNAB Innovations ("SNAB", "we", "our", or "us"). We provide technology services and operate multiple digital platforms. This Privacy Policy explains how we collect, use, store, and protect your personal information.
              </p>
            </div>

            {/* Section 1 */}
            <div id="collect" className={`glass-card legal-scroll-card ${activeSection === 'collect' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.4rem', fontWeight: '700', marginBottom: '24px' }}>
                1. Information We Collect
              </h3>
              
              <div style={{ display: 'grid', gap: '20px' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-text-main)', marginBottom: '8px' }}>Personal Data Input</h4>
                  <p className="grey-text" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                    Full Name, Work Email, Phone Number, Company Name, Job Title, GST details, Billing coordinates, Identity Verification records (like government IDs for legal document preparation), resumes, and skills metrics.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-text-main)', marginBottom: '8px' }}>Technical Parameters</h4>
                  <p className="grey-text" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                    IP address logs, browser descriptors, device metrics, cookies, time zones, referral sources, and platform analytics sequences.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-text-main)', marginBottom: '8px' }}>AI Model Logs</h4>
                  <p className="grey-text" style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
                    Audio interview records, coding execution compiler reports, chat logs, prompt history grids, and automated evaluation metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="usage" className={`glass-card legal-scroll-card ${activeSection === 'usage' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.4rem', fontWeight: '700', marginBottom: '24px' }}>
                2. How We Use Your Information
              </h3>
              <p className="grey-text" style={{ marginBottom: '20px', fontSize: '0.9rem', lineHeight: '1.7' }}>
                We process details to construct secure software solutions, coordinate live interviews, run digital notary pipelines, process payments securely, verify credentials, prevent platform abuse, and align security features.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {["Service Delivery", "Hiring Analytics", "Payment Processing", "AI Training Tuning", "Compliance Logs"].map((u, i) => (
                  <span key={i} className="industry-pill" style={{ fontSize: '0.75rem', padding: '6px 12px' }}>{u}</span>
                ))}
              </div>
            </div>

            {/* Section 3 */}
            <div id="interview" className={`glass-card legal-scroll-card ${activeSection === 'interview' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                <img src="/brochure/logo-dark.png" alt="InterviewXpert" style={{ height: '36px', width: 'auto' }} />
              </div>
              <h3 style={{ color: '#09543F', fontSize: '1.4rem', fontWeight: '700', marginBottom: '16px' }}>
                3. InterviewXpert Privacy Details
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '24px' }}>
                InterviewXpert processes CV configurations, interview recordings, candidate tracking indexes, and technical compiler results.
              </p>
              
              <div style={{ backgroundColor: '#F0F5FD', borderLeft: '4px solid #2563EB', padding: '20px', borderRadius: '0 12px 12px 0' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#1E40AF', margin: '0 0 6px 0', fontWeight: '700' }}>Recruiter Obligation Warning</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#1E40AF', lineHeight: '1.5' }}>
                  Recruiters are legally responsible for verifying candidate consent before uploading profiles or starting technical screen runs. Candidates retain data edit/deletion rights.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div id="notary" className={`glass-card legal-scroll-card ${activeSection === 'notary' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.4rem', fontWeight: '700', marginBottom: '16px' }}>
                4. SNAB Notary Legal Scope
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Collects documentation proof, lease terms, stamp codes, and signatures exclusively to execute custom document formatting operations requested by the subscriber.
              </p>
              
              <div style={{ backgroundColor: '#FDF2F2', borderLeft: '4px solid #EF4444', padding: '20px', borderRadius: '0 12px 12px 0' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#991B1B', margin: '0 0 6px 0', fontWeight: '700' }}>Official Government Notary Disclaimer</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#991B1B', lineHeight: '1.5' }}>
                  SNAB Notary provides template preparation and formatting support. We do not claim to represent a government notary public. Users must finalize execution in front of competent authorities.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="cookies" className={`glass-card legal-scroll-card ${activeSection === 'cookies' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.25rem', fontWeight: '700', marginBottom: '16px' }}>
                5. Cookie Protocols
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                We deploy standard cookie files to remember account logins, support dashboard session stability, and map performance indicators. Cookies can be restricted in browser settings.
              </p>
            </div>

            {/* Section 6 */}
            <div id="security" className={`glass-card legal-scroll-card ${activeSection === 'security' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.25rem', fontWeight: '700', marginBottom: '16px' }}>
                6. Data Safeguards
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                Infrastructure features HTTPS protection, SSL/TLS keys, encrypted databases, role-based API access parameters, and routine backups. However, no digital architecture can pledge 100% security bounds.
              </p>
            </div>

            {/* Section 7 */}
            <div id="sharing" className={`glass-card legal-scroll-card ${activeSection === 'sharing' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.25rem', fontWeight: '700', marginBottom: '16px' }}>
                7. Sharing Disclosures
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                We never sell user details. Information passes exclusively to storage hosts (like AWS/GCP), payment processors, communication gateways, and authorized courts under formal legal subpoenas.
              </p>
            </div>

            {/* Section 8 */}
            <div id="retention" className={`glass-card legal-scroll-card ${activeSection === 'retention' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.25rem', fontWeight: '700', marginBottom: '16px' }}>
                8. Retention Matrices
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                Records persist exclusively to resolve audit metrics, meet contract deadlines, or fulfill regulatory obligations. Users can request deletion of eligible profiles.
              </p>
            </div>

            {/* Section 9 */}
            <div id="rights" className={`glass-card legal-scroll-card ${activeSection === 'rights' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.25rem', fontWeight: '700', marginBottom: '16px' }}>
                9. Your Rights
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                You maintain rights to inspect your personal records, edit layout inaccuracies, restrict profile processing limits, withdraw authorization, or request a complete backup copy.
              </p>
            </div>

            {/* Section 10 */}
            <div id="international" className={`glass-card legal-scroll-card ${activeSection === 'international' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.25rem', fontWeight: '700', marginBottom: '16px' }}>
                10. International Transfers & Policy Updates
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                Data can pass across international nodes. We update this privacy sheet periodically, notifying users of material upgrades by revising the effective stamp above.
              </p>
            </div>

            {/* Contact details footer card */}
            <div className="glass-card" style={{ padding: '36px', borderRadius: '20px', border: '1px solid var(--color-border)', backgroundColor: '#F9FAFB' }}>
              <h4 style={{ color: '#09543F', fontWeight: '700', fontSize: '1.1rem', marginBottom: '12px' }}>Legal Support Desk</h4>
              <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                Direct all privacy questions, records extraction requests, and compliance filings to:
              </p>
              <p style={{ margin: '0 0 6px 0', fontSize: '0.9rem' }}><strong>SNAB Innovations</strong></p>
              <p style={{ margin: '0 0 6px 0', fontSize: '0.9rem' }}>Office: Office No. 5/6, Janki Plaza, Dwarka Circle, Nashik – 422006</p>
              <p style={{ margin: '0 0 6px 0', fontSize: '0.9rem' }}>Email: info.snabinnovations@gmail.com</p>
              <p style={{ margin: '0', fontSize: '0.9rem' }}>Phone: +91 9545556045 / +91 8767401706</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
