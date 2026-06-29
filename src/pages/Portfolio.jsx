import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: "AI Powered Lawyer Recommendation System",
      desc: "Selected for Eureka 2025 at IIT Bombay and Runner-up in Startup Arena. Directs users to matched advocates based on case type and coordinates. Features AI analysis metrics and encrypted client-lawyer chat channels.",
      tags: ["React JS", "Firebase Backend", "Eureka 2025", "Google Translator API"],
      demo: "#",
      github: "#",
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#09543F" strokeWidth="1.5">
          <path d="M12 2v20M17 5H7M19 8H5M12 5L8 10h8l-4-5z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 17a3 3 0 003 3h10a3 3 0 003-3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "InterviewXpert Hiring Platform",
      desc: "Enabled companies to conduct automated technical interviews with faster hiring decisions, standardized assessments, live coding compilation, and recruiter dashboards.",
      tags: ["AI Assessments", "Real-Time WebSockets", "React.js Interface", "Docker Sandbox"],
      demo: "#",
      brochure: "/brochure/Brocher-interviewxpert.pdf",
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#09543F" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "AI Powered Interview Platform",
      desc: "An advanced, remote technical screening platform designed to assess engineering candidates. Conducts real-time evaluations, video question feedback, coding assessment parsing, and automated ranking metrics.",
      tags: ["Gemini API", "AssemblyAI", "React JS", "Firebase", "Cloudinary"],
      demo: "#",
      github: "#",
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#09543F" strokeWidth="1.5">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "SPPU Bulk Result Analyzer",
      desc: "An engineering automation script parsing thousands of raw university result sheets at once. Instantly generates toppers tracking, pass/fail matrices, class pointer averages, and exportable Excel dashboards.",
      tags: ["Python Backend", "PyPDF Analysis", "Matplotlib Visuals", "Excel Export"],
      demo: "#",
      github: "#",
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#09543F" strokeWidth="1.5">
          <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="8" y="2" width="8" height="4" rx="1" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12h6M9 16h6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Roommate Finder",
      desc: "A matching application matching roommates based on age, habits, education, and hobbies. Integrates localized mapping services to suggest nearby verified student hostels and configurations.",
      tags: ["React JS", "Matching Algorithm", "Location suger", "Hostel Map"],
      demo: "#",
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#09543F" strokeWidth="1.5">
          <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "IEDC Official Website",
      desc: "The public interface and records hub for the Innovation and Entrepreneurship Development Cell. Directs startup applications, tracks project timelines, and lists incubation timelines.",
      tags: ["React JS", "Vite Compiler", "Tailwind CSS"],
      demo: "#",
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#09543F" strokeWidth="1.5">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Tech Guru Registration Platform",
      desc: "Engineered a high-concurrency event registration system managing 4,000+ candidate submissions. Built optimized JSON storage buffers to scale request queues under massive traffic loads.",
      tags: ["JavaScript Core", "JSON Storage Buffer", "High-Scale Traffic"],
      demo: "#",
      icon: (
        <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="#09543F" strokeWidth="1.5">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="section-title-wrapper">
        <span className="section-tag">Our Portfolio</span>
        <h2 className="section-title">Success Stories of Impact and Innovation</h2>
      </div>
      
      <div className="portfolio-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
        {projects.map((proj, idx) => (
          <div className="portfolio-card" key={idx}>
            <div className="portfolio-art">
              {proj.icon}
            </div>
            <div className="portfolio-content">
              <div>
                <h3 className="portfolio-project-title">{proj.title}</h3>
                <p className="portfolio-project-desc">{proj.desc}</p>
              </div>
              
              <div className="scoring-tags">
                {proj.tags.map((tag, tagIdx) => (
                  <span className="tag" key={tagIdx}>{tag}</span>
                ))}
              </div>

              {/* B2B Clean Typographic Action Links */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '16px', borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                {proj.demo && (
                  <a 
                    href={proj.demo} 
                    style={{ 
                      fontSize: '0.8rem', 
                      color: '#09543F', 
                      textDecoration: 'none', 
                      fontWeight: '700',
                      transition: 'opacity 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                  >
                    Live Demo &rarr;
                  </a>
                )}
                {proj.github && (
                  <a 
                    href={proj.github} 
                    style={{ 
                      fontSize: '0.8rem', 
                      color: 'var(--color-text-muted)', 
                      textDecoration: 'none', 
                      fontWeight: '700',
                      transition: 'opacity 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                  >
                    GitHub Code &↗;
                  </a>
                )}
                {proj.brochure && (
                  <a 
                    href={proj.brochure} 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ 
                      fontSize: '0.8rem', 
                      color: '#2563EB', 
                      textDecoration: 'none', 
                      fontWeight: '700',
                      transition: 'opacity 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = '0.7'}
                    onMouseLeave={(e) => e.target.style.opacity = '1'}
                  >
                    View Brochure &rarr;
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
