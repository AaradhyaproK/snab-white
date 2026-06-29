import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useCollection } from '../hooks/useCollection';

const DEFAULT_PERKS = [
  {
    title: "Remote-First Work",
    desc: "Collaborate with talented professionals from anywhere in the world. We offer complete location flexibility."
  },
  {
    title: "Learning Budget",
    desc: "Annual allowance for technical books, online courses, certification exams, and tech conferences."
  },
  {
    title: "Flexible Hours",
    desc: "We prioritize outputs over inputs. Configure your working schedule to align with your personal productivity peaks."
  },
  {
    title: "Modern Tech Stack",
    desc: "No technical debt holding you back. Build platforms with modern tools like Next.js, FastAPI, Kubernetes, and LangChain."
  }
];

const DEFAULT_JOBS = [
  {
    title: "AI Research Engineer",
    location: "Remote (Global)",
    type: "Full-Time",
    salary: "$120,000 – $150,000 / year",
    tags: ["AI & ML", "Python", "LangChain", "LLMs"]
  },
  {
    title: "Senior Full-Stack Developer",
    location: "Remote (Global)",
    type: "Full-Time",
    salary: "$90,000 – $120,000 / year",
    tags: ["Software", "React", "Node.js", "PostgreSQL"]
  },
  {
    title: "UI/UX Product Designer",
    location: "Remote (Global)",
    type: "Full-Time",
    salary: "$80,000 – $100,000 / year",
    tags: ["Design", "Figma", "Prototyping", "User Research"]
  },
  {
    title: "DevOps Solution Architect",
    location: "Remote (Global)",
    type: "Full-Time",
    salary: "$110,000 – $135,000 / year",
    tags: ["Cloud", "AWS", "Kubernetes", "Terraform"]
  },
  {
    title: "AI Product Manager",
    location: "Remote (Global)",
    type: "Full-Time",
    salary: "$115,000 – $140,000 / year",
    tags: ["Product", "Agile", "AI Strategy", "Analytics"]
  },
  {
    title: "QA Automation Engineer",
    location: "Remote (Global)",
    type: "Full-Time",
    salary: "$75,000 – $95,000 / year",
    tags: ["Testing", "Selenium", "Cypress", "CI/CD"]
  },
  {
    title: "Security & Compliance Specialist",
    location: "Remote (Global)",
    type: "Full-Time",
    salary: "$95,000 – $120,000 / year",
    tags: ["Cybersec", "SOC2", "HIPAA", "Audits"]
  },
  {
    title: "Technical Writer",
    location: "Remote (Global)",
    type: "Part-Time",
    salary: "$45,000 – $60,000 / year",
    tags: ["Content", "Documentation", "API Guides", "Markdown"]
  }
];

const renderPerkIcon = (title) => {
  const normTitle = title?.toLowerCase() || '';
  if (normTitle.includes('remote') || normTitle.includes('work') || normTitle.includes('location')) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (normTitle.includes('learning') || normTitle.includes('budget') || normTitle.includes('course')) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (normTitle.includes('hour') || normTitle.includes('flexible') || normTitle.includes('time')) {
    return (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default function Careers() {
  const [applyingJob, setApplyingJob] = useState(null);
  const [resumeSubmitted, setResumeSubmitted] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [applyError, setApplyError] = useState('');

  // Form states
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [coverLetter, setCoverLetter] = useState('');

  const { data: perks } = useCollection("perks", DEFAULT_PERKS);
  const { data: jobs } = useCollection("jobs", DEFAULT_JOBS);

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    setIsApplying(true);
    setApplyError('');
    try {
      await addDoc(collection(db, "applications"), {
        jobTitle: applyingJob.title,
        fullName: applicantName,
        email: applicantEmail,
        resumeLink: resumeLink,
        coverLetter: coverLetter,
        appliedAt: new Date().toISOString()
      });
      setResumeSubmitted(true);
    } catch (err) {
      console.error("Error writing application to Firestore:", err);
      setApplyError(err.message || 'Failed to submit application. Please try again.');
    } finally {
      setIsApplying(false);
    }
  };

  return (
    <section className="careers-section">
      <div className="section-title-wrapper">
        <span className="section-tag">Join Our Team</span>
        <h2 className="section-title">Build the Future of Enterprise Solutions</h2>
      </div>

      {/* Perks grid */}
      <div className="perks-grid">
        {perks.map((p, idx) => (
          <div className="perk-card" key={p.id || idx}>
            <div className="perk-icon">{renderPerkIcon(p.title)}</div>
            <h3 className="perk-title">{p.title}</h3>
            <p className="perk-desc">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Open Roles section */}
      <div className="section-title-wrapper" style={{ marginBottom: '40px' }}>
        <h2 className="section-title" style={{ fontSize: '2rem' }}>Active Open Positions</h2>
      </div>

      <div className="jobs-list">
        {jobs.map((job, idx) => (
          <div className="job-card" key={job.id || idx}>
            <div className="job-info-col">
              <h3 className="job-title">{job.title}</h3>
              <div className="job-tags-row">
                <span className="job-pill job-pill-accent">{job.location}</span>
                <span className="job-pill">{job.type}</span>
                {job.tags && job.tags.map((tag, tIdx) => (
                  <span className="job-pill" key={tIdx}>{tag}</span>
                ))}
              </div>
              <span className="job-salary">{job.salary}</span>
            </div>
            
            <div className="job-action-col">
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setApplyingJob(job);
                  setResumeSubmitted(false);
                  setApplicantName('');
                  setApplicantEmail('');
                  setResumeLink('');
                  setCoverLetter('');
                  setApplyError('');
                }}
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Apply Modal */}
      {applyingJob && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(18, 27, 24, 0.6)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '20px'
          }}
          onClick={() => setApplyingJob(null)}
        >
          <div 
            className="glass-card"
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              maxWidth: '550px',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: '#F3F4F6',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: '#4B5563'
              }}
              onClick={() => setApplyingJob(null)}
            >
              ✕
            </button>

            {resumeSubmitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div className="contact-icon" style={{ margin: '0 auto 20px', width: '60px', height: '60px' }}>✓</div>
                <h3 className="process-item-title" style={{ fontSize: '1.5rem', marginBottom: '12px' }}>Application Received!</h3>
                <p className="grey-text">
                  Thank you, <strong>{applicantName}</strong>. Your resume application for the <strong>{applyingJob.title}</strong> role has been successfully registered. Our talent acquisition team will review your application soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="contact-form" style={{ background: 'none', border: 'none', padding: 0, boxShadow: 'none' }}>
                <span className="blog-card-tag" style={{ display: 'block', marginBottom: '8px' }}>Join SNAB Innovations</span>
                <h3 className="process-detail-title" style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Applying for {applyingJob.title}</h3>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="fullName">Full Name</label>
                  <input 
                    className="form-input"
                    type="text" 
                    id="fullName"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="applicantEmail">Email Address</label>
                  <input 
                    className="form-input"
                    type="email" 
                    id="applicantEmail"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="resumeLink">Resume / LinkedIn Profile Link</label>
                  <input 
                    className="form-input"
                    type="url" 
                    id="resumeLink"
                    required
                    value={resumeLink}
                    onChange={(e) => setResumeLink(e.target.value)}
                    placeholder="https://linkedin.com/in/janedoe"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="coverLetter">Why are you a good fit?</label>
                  <textarea 
                    className="form-input"
                    id="coverLetter"
                    rows="3"
                    value={coverLetter}
                    onChange={(e) => setCoverLetter(e.target.value)}
                    placeholder="Briefly state your experience with this tech stack..."
                  ></textarea>
                </div>

                {applyError && (
                  <div style={{ color: '#EF4444', fontSize: '0.85rem', marginBottom: '12px', fontWeight: '600' }}>
                    {applyError}
                  </div>
                )}

                <button className="btn btn-primary" type="submit" disabled={isApplying} style={{ width: '100%', marginTop: '12px', opacity: isApplying ? 0.7 : 1 }}>
                  {isApplying ? 'Submitting Application...' : 'Submit Application'} <span className="arrow-right">→</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
