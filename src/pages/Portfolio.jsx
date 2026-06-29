import React from 'react';
import { useCollection } from '../hooks/useCollection';

const DEFAULT_PROJECTS = [
  {
    title: "AI Powered Lawyer Recommendation System",
    desc: "Selected for Eureka 2025 at IIT Bombay and Runner-up in Startup Arena. Directs users to matched advocates based on case type and coordinates. Features AI analysis metrics and encrypted client-lawyer chat channels.",
    tags: ["React JS", "Firebase Backend", "Eureka 2025", "Google Translator API"],
    demo: "#",
    github: "#",
    iconType: "lawyer"
  },
  {
    title: "NotaryXpert SaaS",
    desc: "A specialized SaaS platform digitizing legal documentation and notary operations. Modernizes legal drafting to reduce paperwork latency by up to 90% using automated PDF generation and IOT fingerprint authentications.",
    tags: ["React.js", "PHP Backend", "MySQL", "IOT Fingerprint Integration"],
    demo: "https://notery.interviewxpert.in/",
    iconType: "notary"
  },
  {
    title: "AI Powered Interview Platform",
    desc: "An advanced, remote technical screening platform designed to assess engineering candidates. Conducts real-time evaluations, video question feedback, coding assessment parsing, and automated ranking metrics.",
    tags: ["Gemini API", "AssemblyAI", "React JS", "Firebase", "Cloudinary"],
    demo: "https://interviewxpert.in",
    brochure: "/brochure/Brocher-interviewxpert.pdf",
    github: "#",
    iconType: "interview"
  },
  {
    title: "AI Automated Aptitude Result Platform",
    desc: "A comprehensive grading and analysis engine compiling aptitude metrics, speed test data, and skills gap analysis dashboards for recruitment cohorts.",
    tags: ["React JS", "FastAPI", "MongoDB", "ChartJS"],
    demo: "https://result.interviewxpert.in",
    iconType: "result"
  },
  {
    title: "Dynamic Roommate Finder Portal",
    desc: "An interactive rental network matching verified roommates based on budget, lifestyle traits, and location preferences.",
    tags: ["React JS", "Node JS", "Express API", "Socket.io"],
    demo: "https://roommate.interviewxpert.in",
    iconType: "roommate"
  },
  {
    title: "IEDC Sandip University Incubation Network",
    desc: "The official platform for Innovation, Entrepreneurship, and Development Cell at Sandip University. Houses registration tools, hackathon timelines, and mentorship allocations.",
    tags: ["HTML & CSS", "JavaScript", "BootStrap", "NodeJS"],
    demo: "https://iedc.sandipuniversity.edu.in",
    iconType: "iedc"
  }
];

const renderProjectIcon = (iconType) => {
  switch (iconType) {
    case 'lawyer':
      return (
        <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#09543F" strokeWidth="1.5">
          <path d="M12 2v20M17 5H7M19 8H5M12 5L8 10h8l-4-5z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 17a3 3 0 003 3h10a3 3 0 003-3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'notary':
      return (
        <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#09543F" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'interview':
      return (
        <img 
          src="/brochure/logo-dark.png" 
          alt="InterviewXpert Logo" 
          style={{ width: '64px', height: '64px', objectFit: 'contain' }}
        />
      );
    case 'result':
      return (
        <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#09543F" strokeWidth="1.5">
          <path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'roommate':
      return (
        <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#09543F" strokeWidth="1.5">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="13" r="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'iedc':
      return (
        <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#09543F" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12h8M12 8v8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#09543F" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 21h8M12 17v4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
  }
};

export default function Portfolio() {
  const { data: projects } = useCollection("projects", DEFAULT_PROJECTS);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-title-wrapper" style={{ marginBottom: '56px', textAlign: 'center' }}>
        <span className="section-tag">Our Portfolio</span>
        <h2 className="section-title">Scale-Out Systems & Verified Products</h2>
      </div>

      <div className="portfolio-grid">
        {projects.map((proj, idx) => (
          <div className="portfolio-card" key={proj.id || idx}>
            <div className="portfolio-art">
              {renderProjectIcon(proj.iconType || 'tech')}
            </div>

            <div className="portfolio-content">
              <div>
                <h3 className="portfolio-project-title">{proj.title}</h3>
                <p className="portfolio-project-desc">{proj.desc}</p>
                
                <div className="scoring-tags">
                  {proj.tags && proj.tags.map((tag, tIdx) => (
                    <span className="tag" key={tIdx}>{tag}</span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px', borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  {proj.github && proj.github !== "#" && (
                    <a href={proj.github} className="portfolio-action-btn" target="_blank" rel="noopener noreferrer" title="View Source" style={{ color: '#6B7280', transition: 'color 0.2s' }}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                  {proj.demo && proj.demo !== "#" && (
                    <a href={proj.demo} className="portfolio-action-btn" target="_blank" rel="noopener noreferrer" title="Live Demo" style={{ color: '#09543F', transition: 'color 0.2s' }}>
                      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>

                {proj.brochure && (
                  <a 
                    href={proj.brochure} 
                    download 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#09543F',
                      textDecoration: 'none',
                      fontWeight: '700',
                      fontSize: '0.8rem',
                      transition: 'opacity 0.2s'
                    }}
                    className="download-brochure-link"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Brochure
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
