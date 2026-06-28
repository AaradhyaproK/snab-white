import React, { useEffect, useRef, useState } from 'react';

export default function Timeline() {
  const steps = [
    {
      phase: "01",
      tag: "Phase One",
      title: "Discovery & Consultation",
      desc: "Our journey begins with a deep dive. We host a consultation to outline your vision, evaluate feasibility, define target users, and establish high-level project goals.",
      bullets: ["Initial concept brainstorming", "Feasibility & technology advice", "Aligning business requirements"]
    },
    {
      phase: "02",
      tag: "Phase Two",
      title: "Requirement Analysis",
      desc: "We analyze technical constraints and compile functional requirements. We create a software specification sheet mapping out exactly what needs to be built.",
      bullets: ["Functional specifications document", "User stories mapping", "API architecture drafting"]
    },
    {
      phase: "03",
      tag: "Phase Three",
      title: "Planning & Strategy",
      desc: "Our architects map out database schemas, select the optimal cloud infrastructure, outline milestones, and structure delivery sprint plans.",
      bullets: ["Tech stack finalization", "Database diagram drafting", "Sprint timelines & milestones setting"]
    },
    {
      phase: "04",
      tag: "Phase Four",
      title: "UI/UX Design",
      desc: "Our designers deliver wireframes, interactive user flows, and beautiful layout designs, ensuring high-fidelity aesthetics aligned with best practices.",
      bullets: ["Wireframing & prototypes", "Premium visual styling direction", "Interactive click-through mockups"]
    },
    {
      phase: "05",
      tag: "Phase Five",
      title: "Development",
      desc: "Our engineers write clean, scalable code in iterative sprints, maintaining transparency with regular demo reviews and automated build deployments.",
      bullets: ["Agile 2-week development sprints", "Frequent demo walk-throughs", "Continuous Integration pipelines"]
    },
    {
      phase: "06",
      tag: "Phase Six",
      title: "Testing & QA",
      desc: "Rigorous automation and manual testing check code logic, security configurations, api responses, and cross-browser visual compatibility.",
      bullets: ["Manual user acceptance testing", "Automated system test cases", "Security & performance checkups"]
    },
    {
      phase: "07",
      tag: "Phase Seven",
      title: "Deployment",
      desc: "We launch your product using secure, automated deployment pipelines directly into AWS, GCP, or Azure, guaranteeing zero-downtime releases.",
      bullets: ["Production cloud configurations", "CI/CD automated deployment script", "DNS, SSL, and analytics setups"]
    },
    {
      phase: "08",
      tag: "Phase Eight",
      title: "Maintenance & Support",
      desc: "We provide long-term maintenance, monitoring services, performance optimization audits, and feature scale additions to support growth.",
      bullets: ["24/7 server monitoring & alert logs", "Monthly dependency & security updates", "New feature rollouts & integrations"]
    }
  ];

  const trackRef = useRef(null);
  const trayRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!trackRef.current || !trayRef.current) return;

      const trackRect = trackRef.current.getBoundingClientRect();
      const trackTop = trackRect.top;
      const trackHeight = trackRect.height;
      const viewportHeight = window.innerHeight;

      // Calculate current scroll progress ratio inside the vertical track [0, 1]
      let progress = -trackTop / (trackHeight - viewportHeight);
      progress = Math.max(0, Math.min(1, progress));

      // Calculate absolute horizontal offset translate pixels
      const trayWidth = trayRef.current.scrollWidth;
      const maxTranslate = trayWidth - window.innerWidth + 160;

      setTranslateX(progress * Math.max(0, maxTranslate));

      // Map progress to steps index (0 to 7) to determine which is active
      const activeIdx = Math.min(Math.max(Math.round(progress * (steps.length - 1)), 0), steps.length - 1);
      setActiveIndex(activeIdx);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  if (isMobile) {
    return (
      <section className="timeline-section" id="process">
        <div className="section-title-wrapper" style={{ padding: '0 24px' }}>
          <span className="section-tag">Development Process</span>
          <h2 className="section-title">How We Turn Ideas into Intelligent Solutions</h2>
        </div>
        
        <div className="process-cards-grid" style={{ padding: '0 24px' }}>
          {steps.map((step, idx) => (
            <div className="process-card" key={idx}>
              <div className="process-card-header">
                <span className="process-card-tag">{step.tag}</span>
                <span className="process-card-number">{step.phase}</span>
              </div>
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-desc">{step.desc}</p>
              <div className="process-card-divider"></div>
              <ul className="process-card-list">
                {step.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="process-card-list-item">
                    <span className="process-card-bullet-dot"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <div ref={trackRef} className="horizontal-scroll-track" id="process">
      <div className="sticky-scroll-container">
        <div className="section-title-wrapper horizontal-header">
          <span className="section-tag">Development Process</span>
          <h2 className="section-title">How We Turn Ideas into Intelligent Solutions</h2>
        </div>
        
        <div 
          ref={trayRef} 
          className="horizontal-scroll-tray"
          style={{ transform: `translate3d(-${translateX}px, 0, 0)` }}
        >
          {steps.map((step, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div 
                className="process-card horizontal-card" 
                key={idx}
                style={{
                  borderColor: isActive ? '#09543F' : 'var(--color-border)',
                  boxShadow: isActive ? '0 12px 30px rgba(9, 84, 63, 0.08)' : '0 4px 15px var(--color-shadow)',
                  transform: isActive ? 'scale(1.02)' : 'scale(1)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <div className="process-card-header">
                  <span 
                    className="process-card-tag"
                    style={{
                      color: isActive ? '#09543F' : 'var(--color-text-muted)',
                      fontWeight: isActive ? '700' : '500',
                      transition: 'color 0.4s ease'
                    }}
                  >
                    {step.tag}
                  </span>
                  <span 
                    className="process-card-number"
                    style={{
                      color: isActive ? '#09543F' : 'rgba(17, 27, 24, 0.15)',
                      textShadow: isActive ? '0 0 16px rgba(9, 84, 63, 0.15)' : 'none',
                      transform: isActive ? 'scale(1.15) translate3d(0, -2px, 0)' : 'scale(1)',
                      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      display: 'inline-block'
                    }}
                  >
                    {step.phase}
                  </span>
                </div>
                <h3 
                  className="process-card-title"
                  style={{
                    color: isActive ? '#09543F' : 'var(--color-text-main)',
                    transition: 'color 0.4s ease'
                  }}
                >
                  {step.title}
                </h3>
                <p className="process-card-desc">{step.desc}</p>
                <div className="process-card-divider"></div>
                <ul className="process-card-list">
                  {step.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="process-card-list-item">
                      <span 
                        className="process-card-bullet-dot"
                        style={{
                          backgroundColor: isActive ? '#09543F' : 'var(--color-text-muted)',
                          transform: isActive ? 'scale(1.3)' : 'scale(1)',
                          transition: 'all 0.4s ease'
                        }}
                      ></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
