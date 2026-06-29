import React, { useState, useEffect } from 'react';

export default function TermsConditions() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'services', title: '1. Our Services' },
    { id: 'responsibilities', title: '2. User Responsibilities' },
    { id: 'interview', title: '3. InterviewXpert Terms' },
    { id: 'notary', title: '4. SNAB Notary Terms' },
    { id: 'ip', title: '5. Intellectual Property' },
    { id: 'payments', title: '6. Payments & Fees' },
    { id: 'delivery', title: '7. Project Delivery' },
    { id: 'confidentiality', title: '8. Confidentiality' },
    { id: 'liability', title: '9. Limitation of Liability' },
    { id: 'governance', title: '10. Availability & Law' }
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
          <span className="section-tag">Terms of Service</span>
          <h1 className="timeline-title" style={{ marginTop: '12px', marginBottom: '16px', fontSize: 'clamp(2rem, 5vw, 2.75rem)' }}>
            Terms & Conditions
          </h1>
          <p className="grey-text" style={{ fontSize: '1.05rem', maxWidth: '680px', margin: '0 0 24px 0' }}>
            Review the contractual terms, developer schedules, payment structures, and legal boundaries governing the SNAB Innovations ecosystem.
          </p>
          <div style={{ display: 'inline-flex', padding: '8px 16px', borderRadius: '100px', backgroundColor: '#E6F2ED', border: '1px solid rgba(9, 84, 63, 0.1)', color: '#09543F', fontSize: '0.85rem', fontWeight: '700' }}>
            Effective Date: January 1, 2026
          </div>
        </div>

        {/* Split Columns Grid */}
        <div className="legal-split-layout">
          
          {/* Left Column: Sticky Outline Sidebar */}
          <div className="legal-sidebar">
            <h4 style={{ fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-muted)', marginBottom: '12px', paddingLeft: '12px' }}>
              Service Terms
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
              <p style={{ margin: '0', lineHeight: '1.7' }}>
                These Terms & Conditions govern access to and use of the websites, applications, and services provided by SNAB Innovations, including InterviewXpert and SNAB Notary. By using our services, you agree to these Terms.
              </p>
            </div>

            {/* Section 1 */}
            <div id="services" className={`glass-card legal-scroll-card ${activeSection === 'services' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.4rem', fontWeight: '700', marginBottom: '24px' }}>
                1. Our Services
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '20px' }}>
                SNAB provides custom software architectures, AI agent programming, mobile platforms, web frameworks, DevOps orchestration pipelines, InterviewXpert screeners, and SNAB Notary documentation templates.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {["AI Agent Pipelines", "SaaS Systems", "Mobile Engineering", "Cloud Architecture", "Legal Template Support"].map((s, i) => (
                  <span key={i} className="industry-pill" style={{ fontSize: '0.75rem', padding: '6px 12px' }}>{s}</span>
                ))}
              </div>
            </div>

            {/* Section 2 */}
            <div id="responsibilities" className={`glass-card legal-scroll-card ${activeSection === 'responsibilities' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.4rem', fontWeight: '700', marginBottom: '24px' }}>
                2. User Responsibilities
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '16px' }}>
                Subscribers and platform clients guarantee to strictly prevent the following behaviors:
              </p>
              <ul style={{ paddingLeft: '20px', fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                <li>Violating regional or national Indian cyber regulations.</li>
                <li>Attempting injection code scripts or hacking database access gates.</li>
                <li>Misrepresenting business identities or GST numbers.</li>
                <li>Uploading unverified profiles without active candidate approvals.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div id="interview" className={`glass-card legal-scroll-card ${activeSection === 'interview' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                <img src="/brochure/logo-dark.png" alt="InterviewXpert" style={{ height: '36px', width: 'auto' }} />
              </div>
              <h3 style={{ color: '#09543F', fontSize: '1.4rem', fontWeight: '700', marginBottom: '16px' }}>
                3. InterviewXpert Terms
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Recruiters are responsible for securing proper candidate data authority. Automated AI profiling summaries serve exclusively as qualitative filters; candidates must not be filtered based solely on algorithmic summaries without human recruiter audits.
              </p>
              
              <div style={{ backgroundColor: '#F0F5FD', borderLeft: '4px solid #2563EB', padding: '20px', borderRadius: '0 12px 12px 0' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#1E40AF', margin: '0 0 6px 0', fontWeight: '700' }}>AI Decisions Disclaimer</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#1E40AF', lineHeight: '1.5' }}>
                  AI assessments and interview transcriptions are technical screenings to assist decision making and should not be the sole basis for candidate rejection.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div id="notary" className={`glass-card legal-scroll-card ${activeSection === 'notary' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.4rem', fontWeight: '700', marginBottom: '16px' }}>
                4. SNAB Notary Terms
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Documentation helpers provide structural templates. SNAB assumes no liability or validation oversight regarding the legal execution completeness of contracts generated on the platform.
              </p>
              
              <div style={{ backgroundColor: '#FDF2F2', borderLeft: '4px solid #EF4444', padding: '20px', borderRadius: '0 12px 12px 0' }}>
                <h4 style={{ fontSize: '0.9rem', color: '#991B1B', margin: '0 0 6px 0', fontWeight: '700' }}>Official Execution Notice</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', color: '#991B1B', lineHeight: '1.5' }}>
                  Subscribers remain fully responsible for executing agreements before a certified notary where legally required by the Registration Act of India.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div id="ip" className={`glass-card legal-scroll-card ${activeSection === 'ip' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.25rem', fontWeight: '700', marginBottom: '16px' }}>
                5. Intellectual Property
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                All software assets, logos, design files, dashboard codes, database schemas, and documentation are the exclusive properties of SNAB Innovations. Unauthorized copying, compiling, or decompiling is strictly prohibited.
              </p>
            </div>

            {/* Section 6 */}
            <div id="payments" className={`glass-card legal-scroll-card ${activeSection === 'payments' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.25rem', fontWeight: '700', marginBottom: '16px' }}>
                6. Payments & Fees
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                Fees are payable according to contract milestones. Payments are non-refundable after development processes commence. Overdue invoices can suspend active dashboard hosting channels.
              </p>
            </div>

            {/* Section 7 */}
            <div id="delivery" className={`glass-card legal-scroll-card ${activeSection === 'delivery' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.25rem', fontWeight: '700', marginBottom: '16px' }}>
                7. Project Delivery
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                Project timelines are professional estimates. Scope changes, delayed asset hangovers, third-party api drops, or force majeure events can affect deployment targets.
              </p>
            </div>

            {/* Section 8 */}
            <div id="confidentiality" className={`glass-card legal-scroll-card ${activeSection === 'confidentiality' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.25rem', fontWeight: '700', marginBottom: '16px' }}>
                8. Confidentiality
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                Both parties pledge to guard proprietary details, database values, and private software keys shared during project scoping, except under valid governmental legal mandates.
              </p>
            </div>

            {/* Section 9 */}
            <div id="liability" className={`glass-card legal-scroll-card ${activeSection === 'liability' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.25rem', fontWeight: '700', marginBottom: '16px' }}>
                9. Limitation of Liability
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                SNAB Innovations assumes no liability for indirect, collateral, or loss-of-revenue damages. Our absolute cumulative liability matches the payment value cleared by the client for that specific software module.
              </p>
            </div>

            {/* Section 10 */}
            <div id="governance" className={`glass-card legal-scroll-card ${activeSection === 'governance' ? 'active-highlight' : ''}`} style={{ padding: '40px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
              <h3 style={{ color: '#09543F', fontSize: '1.25rem', fontWeight: '700', marginBottom: '16px' }}>
                10. Availability & Governing Law
              </h3>
              <p className="grey-text" style={{ fontSize: '0.9rem', lineHeight: '1.7', margin: 0 }}>
                We target 99.9% uptime but provide services on an "as-available" basis. These Terms are governed by Indian law. All arbitration and lawsuits belong strictly within the courts of Nashik, Maharashtra.
              </p>
            </div>

            {/* Contact details footer card */}
            <div className="glass-card" style={{ padding: '36px', borderRadius: '20px', border: '1px solid var(--color-border)', backgroundColor: '#F9FAFB' }}>
              <h4 style={{ color: '#09543F', fontWeight: '700', fontSize: '1.1rem', marginBottom: '12px' }}>Legal Support Desk</h4>
              <p style={{ margin: '0 0 8px 0', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                For terms inquiries, billing audits, or corporate SLA agreements, contact:
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
