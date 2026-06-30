import React, { useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc 
} from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useCollection } from '../hooks/useCollection';
const renderAdminIcon = (type, strokeColor = "currentColor", size = 18) => {
  switch (type) {
    case 'projects':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={strokeColor} strokeWidth="2">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'blogs':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={strokeColor} strokeWidth="2">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'jobs':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={strokeColor} strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'faqs':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={strokeColor} strokeWidth="2">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'testimonials':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={strokeColor} strokeWidth="2">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'timeline':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={strokeColor} strokeWidth="2">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'industries':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={strokeColor} strokeWidth="2">
          <rect x="3" y="3" width="7" height="9" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="3" width="7" height="5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="14" y="12" width="7" height="9" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="3" y="16" width="7" height="5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'submissions':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={strokeColor} strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'applications':
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={strokeColor} strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
};

export default function Admin() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState('projects');

  React.useEffect(() => {
    document.title = "CMS Console | SNAB Innovations";
  }, []);

  // Form edit states
  const [editingId, setEditingId] = useState(null);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Fields for each collection type
  const [projectForm, setProjectForm] = useState({ title: '', desc: '', tags: '', demo: '', github: '', brochure: '', iconType: 'tech' });
  const [blogForm, setBlogForm] = useState({ category: 'ai', categoryLabel: 'AI & ML', title: '', excerpt: '', date: '', readTime: '', authorName: '', authorInitials: '', body: '' });
  const [jobForm, setJobForm] = useState({ title: '', location: 'Remote (Global)', type: 'Full-Time', salary: '', tags: '' });
  const [faqForm, setFaqForm] = useState({ question: '', answer: '' });
  const [testimonialForm, setTestimonialForm] = useState({ quote: '', author: '', title: '', avatarFill: '#F1F5F9', avatarColor: '#475569', avatarBody: '#334155' });
  const [timelineForm, setTimelineForm] = useState({ phase: '', tag: '', title: '', desc: '', bullets: '' });
  const [industryForm, setIndustryForm] = useState({ name: '' });

  // Query database items for edit tables
  const { data: dbProjects, error: errProjects } = useCollection("projects", []);
  const { data: dbBlogs, error: errBlogs } = useCollection("blogs", []);
  const { data: dbJobs, error: errJobs } = useCollection("jobs", []);
  const { data: dbFaqs, error: errFaqs } = useCollection("faqs", []);
  const { data: dbTestimonials, error: errTestimonials } = useCollection("testimonials", []);
  const { data: dbTimeline, error: errTimeline } = useCollection("timeline", [], "phase", "asc");
  const { data: dbIndustries, error: errIndustries } = useCollection("industries", []);
  const { data: dbSubmissions, error: errSubmissions } = useCollection("contactSubmissions", [], "createdAt", "desc");
  const { data: dbApplications, error: errApplications } = useCollection("applications", [], "appliedAt", "desc");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setAuthError(err.message || 'Invalid email or password.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  const showFeedback = (success, error = '') => {
    setSuccessMsg(success);
    setErrorMsg(error);
    setTimeout(() => {
      setSuccessMsg('');
      setErrorMsg('');
    }, 4000);
  };

  // CRUD Operators
  const handleSave = async (e, collectionName, formData, setFormDefault) => {
    e.preventDefault();
    try {
      // Preprocess comma separated tags/bullets
      const processed = { ...formData };
      if (processed.tags && typeof processed.tags === 'string') {
        processed.tags = processed.tags.split(',').map(t => t.trim()).filter(Boolean);
      }
      if (processed.bullets && typeof processed.bullets === 'string') {
        processed.bullets = processed.bullets.split(',').map(b => b.trim()).filter(Boolean);
      }
      if (processed.items && typeof processed.items === 'string') {
        processed.items = processed.items.split(',').map(i => i.trim()).filter(Boolean);
      }

      if (editingId) {
        const docRef = doc(db, collectionName, editingId);
        await updateDoc(docRef, processed);
        showFeedback("Document updated successfully!");
        setEditingId(null);
      } else {
        await addDoc(collection(db, collectionName), processed);
        showFeedback("New document added successfully!");
      }
      setFormDefault();
    } catch (err) {
      console.error(err);
      showFeedback('', err.message || 'Write operation blocked by rules.');
    }
  };

  const handleEdit = (item, type) => {
    setEditingId(item.id);
    if (type === 'projects') {
      setProjectForm({
        title: item.title || '',
        desc: item.desc || '',
        tags: Array.isArray(item.tags) ? item.tags.join(', ') : '',
        demo: item.demo || '',
        github: item.github || '',
        brochure: item.brochure || '',
        iconType: item.iconType || 'tech'
      });
    } else if (type === 'blogs') {
      setBlogForm({
        category: item.category || 'ai',
        categoryLabel: item.categoryLabel || 'AI & ML',
        title: item.title || '',
        excerpt: item.excerpt || '',
        date: item.date || '',
        readTime: item.readTime || '',
        authorName: item.authorName || '',
        authorInitials: item.authorInitials || '',
        body: item.body || ''
      });
    } else if (type === 'jobs') {
      setJobForm({
        title: item.title || '',
        location: item.location || 'Remote (Global)',
        type: item.type || 'Full-Time',
        salary: item.salary || '',
        tags: Array.isArray(item.tags) ? item.tags.join(', ') : ''
      });
    } else if (type === 'faqs') {
      setFaqForm({
        question: item.question || '',
        answer: item.answer || ''
      });
    } else if (type === 'testimonials') {
      setTestimonialForm({
        quote: item.quote || '',
        author: item.author || '',
        title: item.title || '',
        avatarFill: item.avatarFill || '#F1F5F9',
        avatarColor: item.avatarColor || '#475569',
        avatarBody: item.avatarBody || '#334155'
      });
    } else if (type === 'timeline') {
      setTimelineForm({
        phase: item.phase || '',
        tag: item.tag || '',
        title: item.title || '',
        desc: item.desc || '',
        bullets: Array.isArray(item.bullets) ? item.bullets.join(', ') : ''
      });
    } else if (type === 'industries') {
      setIndustryForm({
        name: item.name || ''
      });
    }
  };

  const handleDelete = async (id, collectionName) => {
    if (!window.confirm("Are you sure you want to delete this record?")) return;
    try {
      await deleteDoc(doc(db, collectionName, id));
      showFeedback("Record deleted successfully.");
      if (editingId === id) setEditingId(null);
    } catch (err) {
      console.error(err);
      showFeedback('', err.message || 'Delete operation blocked by rules.');
    }
  };

  if (authLoading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#F9FAFB' }}>
        <p className="grey-text" style={{ fontSize: '1.2rem', fontWeight: '600' }}>Loading Admin Console...</p>
      </div>
    );
  }

  // Render Login Panel if unauthenticated
  if (!user) {
    return (
      <section className="about-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '140px 24px 80px' }}>
        <div className="glass-card" style={{ maxWidth: '440px', width: '100%', padding: '40px', borderRadius: '24px', border: '1px solid var(--color-border)' }}>
          <span className="section-tag" style={{ display: 'block', marginBottom: '8px' }}>Security Login</span>
          <h2 className="timeline-title" style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Admin Console</h2>
          <p className="grey-text" style={{ fontSize: '0.85rem', marginBottom: '24px' }}>
            Access corporate content tools. Sign in with authorized Firebase credentials.
          </p>

          {authError && (
            <div style={{ padding: '12px', borderRadius: '8px', backgroundColor: '#FDF2F2', border: '1px solid #F87171', color: '#991B1B', fontSize: '0.8rem', marginBottom: '20px', lineHeight: '1.4' }}>
              <strong>Login Blocked:</strong> {authError}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label className="form-label" htmlFor="adminEmail">Email Address</label>
              <input 
                className="form-input" 
                type="email" 
                id="adminEmail" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@snab.com" 
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="adminPassword">Password</label>
              <input 
                className="form-input" 
                type="password" 
                id="adminPassword" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
              />
            </div>
            <button className="btn btn-primary" type="submit" style={{ width: '100%', marginTop: '12px' }}>
              Verify Identity &rarr;
            </button>
          </form>
        </div>
      </section>
    );
  }

  // Admin Dashboard Workspace
  return (
    <section className="about-section" style={{ minHeight: '100vh', padding: '140px 24px 80px', backgroundColor: '#FAFBFB' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header segment */}
        <div className="glass-card" style={{ padding: '36px', borderRadius: '24px', border: '1px solid var(--color-border)', marginBottom: '32px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px', backgroundColor: '#FFFFFF' }}>
          <div>
            <span className="section-tag" style={{ background: '#E6F2ED', color: '#09543F' }}>Management Hub</span>
            <h1 className="timeline-title" style={{ fontSize: '2rem', marginTop: '6px', marginBottom: '6px' }}>CMS Dashboard</h1>
            <p className="grey-text" style={{ fontSize: '0.85rem' }}>
              Signed in as: <strong>{user.email}</strong>
            </p>
          </div>
          <button className="admin-btn-action admin-btn-delete" onClick={handleLogout} style={{ padding: '10px 20px', borderRadius: '12px', fontSize: '0.85rem' }}>
            Sign Out
          </button>
        </div>

        {/* Global Feedback Notifications */}
        {successMsg && (
          <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#ECFDF5', border: '1px solid #10B981', color: '#065F46', fontWeight: '600', marginBottom: '24px', fontSize: '0.9rem' }}>
            ✓ {successMsg}
          </div>
        )}
        {errorMsg && (
          <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#FDF2F2', border: '1px solid #EF4444', color: '#991B1B', fontWeight: '600', marginBottom: '24px', fontSize: '0.9rem' }}>
            ✕ Error: {errorMsg}
          </div>
        )}

        {errSubmissions && activeTab === 'submissions' && (
          <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#FDF2F2', border: '1px solid #EF4444', color: '#991B1B', fontWeight: '600', marginBottom: '24px', fontSize: '0.85rem' }}>
            ✕ Security Access Blocked: {errSubmissions.message}
            <div style={{ fontSize: '0.75rem', fontWeight: 'normal', marginTop: '6px' }}>
              Your current login credentials do not have admin permissions to read contact submissions. Make sure your database security rules allow read access.
            </div>
          </div>
        )}

        {errApplications && activeTab === 'applications' && (
          <div style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#FDF2F2', border: '1px solid #EF4444', color: '#991B1B', fontWeight: '600', marginBottom: '24px', fontSize: '0.85rem' }}>
            ✕ Security Access Blocked: {errApplications.message}
            <div style={{ fontSize: '0.75rem', fontWeight: 'normal', marginTop: '6px' }}>
              Your current login credentials do not have admin permissions to read job applications. Check your firestore.rules definitions.
            </div>
          </div>
        )}

        {/* Metrics Summary Row */}
        <div className="admin-metrics-row">
          <div className="admin-metric-card">
            <div className="admin-metric-icon">
              {renderAdminIcon('projects', '#09543F', 20)}
            </div>
            <div>
              <div className="admin-metric-title">Projects</div>
              <div className="admin-metric-value">{dbProjects.length}</div>
            </div>
          </div>
          <div className="admin-metric-card">
            <div className="admin-metric-icon">
              {renderAdminIcon('blogs', '#09543F', 20)}
            </div>
            <div>
              <div className="admin-metric-title">Articles</div>
              <div className="admin-metric-value">{dbBlogs.length}</div>
            </div>
          </div>
          <div className="admin-metric-card">
            <div className="admin-metric-icon">
              {renderAdminIcon('jobs', '#09543F', 20)}
            </div>
            <div>
              <div className="admin-metric-title">Open Jobs</div>
              <div className="admin-metric-value">{dbJobs.length}</div>
            </div>
          </div>
          <div className="admin-metric-card">
            <div className="admin-metric-icon">
              {renderAdminIcon('submissions', '#09543F', 20)}
            </div>
            <div>
              <div className="admin-metric-title">Queries & Apps</div>
              <div className="admin-metric-value">{dbSubmissions.length + dbApplications.length}</div>
            </div>
          </div>
        </div>

        {/* Main Hub Split Grid */}
        <div className="admin-hub-layout">
          
          {/* Navigation Sidebar */}
          <div className="admin-nav-sidebar">
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'rgba(17, 27, 24, 0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '0 16px 8px' }}>
              Collections
            </span>
            {[
              { id: 'projects', label: 'Projects' },
              { id: 'blogs', label: 'Blogs' },
              { id: 'jobs', label: 'Jobs' },
              { id: 'faqs', label: 'FAQs' },
              { id: 'testimonials', label: 'Testimonials' },
              { id: 'timeline', label: 'Timeline' },
              { id: 'industries', label: 'Industries' }
            ].map(t => (
              <button
                key={t.id}
                className={`admin-nav-item ${activeTab === t.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(t.id);
                  setEditingId(null);
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {renderAdminIcon(t.id, activeTab === t.id ? '#FFFFFF' : 'var(--color-text-muted)', 16)}
                </span>
                <span style={{ marginLeft: '12px' }}>{t.label}</span>
              </button>
            ))}
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: 'rgba(17, 27, 24, 0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 16px 8px' }}>
              Submissions
            </span>
            {[
              { id: 'submissions', label: 'Queries' },
              { id: 'applications', label: 'Applications' }
            ].map(t => (
              <button
                key={t.id}
                className={`admin-nav-item ${activeTab === t.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(t.id);
                  setEditingId(null);
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {renderAdminIcon(t.id, activeTab === t.id ? '#FFFFFF' : 'var(--color-text-muted)', 16)}
                </span>
                <span style={{ marginLeft: '12px' }}>{t.label}</span>
              </button>
            ))}
          </div>

          {/* Workspace Content */}
          <div className="admin-workspace-grid">
            
            {/* Form Section */}
            <div className="admin-form-card">
              <h3 style={{ color: '#09543F', fontSize: '1.25rem', fontWeight: '700', marginBottom: '24px' }}>
                {editingId ? 'Edit Selected Record' : `Add New ${activeTab.slice(0, -1).toUpperCase()}`}
              </h3>

              {activeTab === 'projects' && (
                <form onSubmit={(e) => handleSave(e, "projects", projectForm, () => setProjectForm({ title: '', desc: '', tags: '', demo: '', github: '', brochure: '', iconType: 'tech' }))}>
                  <div className="form-group">
                    <label className="form-label">Project Title</label>
                    <input className="form-input" required value={projectForm.title} onChange={e => setProjectForm({...projectForm, title: e.target.value})} placeholder="e.g. Roommate Finder" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Icon Vector Type</label>
                    <select className="form-input" value={projectForm.iconType} onChange={e => setProjectForm({...projectForm, iconType: e.target.value})}>
                      <option value="lawyer">Lawyer Scale</option>
                      <option value="notary">Notary Contract</option>
                      <option value="interview">InterviewXpert Logo</option>
                      <option value="result">Result Graph</option>
                      <option value="roommate">Home Finder</option>
                      <option value="iedc">Incubation Network</option>
                      <option value="tech">Default Settings</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Description Excerpt</label>
                    <textarea className="form-input" required rows="3" value={projectForm.desc} onChange={e => setProjectForm({...projectForm, desc: e.target.value})} placeholder="Outline the tech stack details, competition awards, or delivery metrics..." />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Keywords / Tags (Comma separated)</label>
                    <input className="form-input" value={projectForm.tags} onChange={e => setProjectForm({...projectForm, tags: e.target.value})} placeholder="React JS, Firebase, Tailwind CSS" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Live Demo Link</label>
                    <input className="form-input" value={projectForm.demo} onChange={e => setProjectForm({...projectForm, demo: e.target.value})} placeholder="https://example.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">GitHub Link</label>
                    <input className="form-input" value={projectForm.github} onChange={e => setProjectForm({...projectForm, github: e.target.value})} placeholder="https://github.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Brochure PDF Path</label>
                    <input className="form-input" value={projectForm.brochure} onChange={e => setProjectForm({...projectForm, brochure: e.target.value})} placeholder="/brochure/Brocher-interviewxpert.pdf" />
                  </div>
                  <button className="admin-btn-save" type="submit" style={{ width: '100%', marginTop: '12px' }}>
                    Save Project &rarr;
                  </button>
                </form>
              )}

              {activeTab === 'blogs' && (
                <form onSubmit={(e) => handleSave(e, "blogs", blogForm, () => setBlogForm({ category: 'ai', categoryLabel: 'AI & ML', title: '', excerpt: '', date: '', readTime: '', authorName: '', authorInitials: '', body: '' }))}>
                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <select className="form-input" value={blogForm.category} onChange={e => setBlogForm({...blogForm, category: e.target.value, categoryLabel: e.target.value === 'ai' ? 'AI & ML' : e.target.value === 'cloud' ? 'Cloud & DevOps' : 'Software'})}>
                      <option value="ai">AI & ML</option>
                      <option value="cloud">Cloud & DevOps</option>
                      <option value="software">Software Development</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Read Time</label>
                    <input className="form-input" required value={blogForm.readTime} onChange={e => setBlogForm({...blogForm, readTime: e.target.value})} placeholder="e.g. 5 min read" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Publish Date</label>
                    <input className="form-input" required value={blogForm.date} onChange={e => setBlogForm({...blogForm, date: e.target.value})} placeholder="e.g. June 25, 2026" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Author Full Name</label>
                    <input className="form-input" required value={blogForm.authorName} onChange={e => setBlogForm({...blogForm, authorName: e.target.value, authorInitials: e.target.value.split(' ').map(n=>n[0]).join('')})} placeholder="Dr. Anya S." />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Initials</label>
                    <input className="form-input" required value={blogForm.authorInitials} onChange={e => setBlogForm({...blogForm, authorInitials: e.target.value})} placeholder="AS" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Blog Title</label>
                    <input className="form-input" required value={blogForm.title} onChange={e => setBlogForm({...blogForm, title: e.target.value})} placeholder="The Future of Generative AI..." />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Short Excerpt</label>
                    <textarea className="form-input" required rows="2" value={blogForm.excerpt} onChange={e => setBlogForm({...blogForm, excerpt: e.target.value})} placeholder="Enter brief overview summary..." />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Main Article Body</label>
                    <textarea className="form-input" required rows="4" value={blogForm.body} onChange={e => setBlogForm({...blogForm, body: e.target.value})} placeholder="Write details..." />
                  </div>
                  <button className="admin-btn-save" type="submit" style={{ width: '100%', marginTop: '12px' }}>
                    Save Blog &rarr;
                  </button>
                </form>
              )}

              {activeTab === 'jobs' && (
                <form onSubmit={(e) => handleSave(e, "jobs", jobForm, () => setJobForm({ title: '', location: 'Remote (Global)', type: 'Full-Time', salary: '', tags: '' }))}>
                  <div className="form-group">
                    <label className="form-label">Role Title</label>
                    <input className="form-input" required value={jobForm.title} onChange={e => setJobForm({...jobForm, title: e.target.value})} placeholder="Senior Full-Stack Developer" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Location</label>
                    <input className="form-input" required value={jobForm.location} onChange={e => setJobForm({...jobForm, location: e.target.value})} placeholder="Remote (Global)" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Work Type</label>
                    <input className="form-input" required value={jobForm.type} onChange={e => setJobForm({...jobForm, type: e.target.value})} placeholder="Full-Time" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Salary Details</label>
                    <input className="form-input" required value={jobForm.salary} onChange={e => setJobForm({...jobForm, salary: e.target.value})} placeholder="e.g. $90,000 – $120,000 / year" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Required Skills (Comma separated)</label>
                    <input className="form-input" value={jobForm.tags} onChange={e => setJobForm({...jobForm, tags: e.target.value})} placeholder="React, Node.js, PostgreSQL" />
                  </div>
                  <button className="admin-btn-save" type="submit" style={{ width: '100%', marginTop: '12px' }}>
                    Save Job Position &rarr;
                  </button>
                </form>
              )}

              {activeTab === 'faqs' && (
                <form onSubmit={(e) => handleSave(e, "faqs", faqForm, () => setFaqForm({ question: '', answer: '' }))}>
                  <div className="form-group">
                    <label className="form-label">Question Text</label>
                    <input className="form-input" required value={faqForm.question} onChange={e => setFaqForm({...faqForm, question: e.target.value})} placeholder="e.g. What services do you provide?" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Answer Details</label>
                    <textarea className="form-input" required rows="4" value={faqForm.answer} onChange={e => setFaqForm({...faqForm, answer: e.target.value})} placeholder="Explain services, hours, or support procedures..." />
                  </div>
                  <button className="admin-btn-save" type="submit" style={{ width: '100%', marginTop: '12px' }}>
                    Save FAQ &rarr;
                  </button>
                </form>
              )}

              {activeTab === 'testimonials' && (
                <form onSubmit={(e) => handleSave(e, "testimonials", testimonialForm, () => setTestimonialForm({ quote: '', author: '', title: '', avatarFill: '#F1F5F9', avatarColor: '#475569', avatarBody: '#334155' }))}>
                  <div className="form-group">
                    <label className="form-label">Quote Content</label>
                    <textarea className="form-input" required rows="3" value={testimonialForm.quote} onChange={e => setTestimonialForm({...testimonialForm, quote: e.target.value})} placeholder="Excellent communication..." />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Author Name</label>
                    <input className="form-input" required value={testimonialForm.author} onChange={e => setTestimonialForm({...testimonialForm, author: e.target.value})} placeholder="e.g. Startup Founder" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Author Title / Subtitle</label>
                    <input className="form-input" required value={testimonialForm.title} onChange={e => setTestimonialForm({...testimonialForm, title: e.target.value})} placeholder="e.g. Seed Stage FinTech" />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '12px' }}>
                    <div className="form-group">
                      <label className="form-label">Avatar BG</label>
                      <input className="form-input" type="color" value={testimonialForm.avatarFill} onChange={e => setTestimonialForm({...testimonialForm, avatarFill: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Avatar Head</label>
                      <input className="form-input" type="color" value={testimonialForm.avatarColor} onChange={e => setTestimonialForm({...testimonialForm, avatarColor: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Avatar Body</label>
                      <input className="form-input" type="color" value={testimonialForm.avatarBody} onChange={e => setTestimonialForm({...testimonialForm, avatarBody: e.target.value})} />
                    </div>
                  </div>
                  <button className="admin-btn-save" type="submit" style={{ width: '100%', marginTop: '12px' }}>
                    Save Testimonial &rarr;
                  </button>
                </form>
              )}

              {activeTab === 'timeline' && (
                <form onSubmit={(e) => handleSave(e, "timeline", timelineForm, () => setTimelineForm({ phase: '', tag: '', title: '', desc: '', bullets: '' }))}>
                  <div className="form-group">
                    <label className="form-label">Phase ID</label>
                    <input className="form-input" required value={timelineForm.phase} onChange={e => setTimelineForm({...timelineForm, phase: e.target.value})} placeholder="e.g. 01" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Tag Name</label>
                    <input className="form-input" required value={timelineForm.tag} onChange={e => setTimelineForm({...timelineForm, tag: e.target.value})} placeholder="e.g. Phase One" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phase Title</label>
                    <input className="form-input" required value={timelineForm.title} onChange={e => setTimelineForm({...timelineForm, title: e.target.value})} placeholder="Discovery & Consultation" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Process Description</label>
                    <textarea className="form-input" required rows="3" value={timelineForm.desc} onChange={e => setTimelineForm({...timelineForm, desc: e.target.value})} placeholder="Outline constraints..." />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Bullets/Milestones (Comma separated)</label>
                    <input className="form-input" value={timelineForm.bullets} onChange={e => setTimelineForm({...timelineForm, bullets: e.target.value})} placeholder="Concept brainstorming, Feasibility studies" />
                  </div>
                  <button className="admin-btn-save" type="submit" style={{ width: '100%', marginTop: '12px' }}>
                    Save Timeline Phase &rarr;
                  </button>
                </form>
              )}

              {activeTab === 'industries' && (
                <form onSubmit={(e) => handleSave(e, "industries", industryForm, () => setIndustryForm({ name: '' }))}>
                  <div className="form-group">
                    <label className="form-label">Industry Sector Name</label>
                    <input className="form-input" required value={industryForm.name} onChange={e => setIndustryForm({...industryForm, name: e.target.value})} placeholder="e.g. FinTech" />
                  </div>
                  <button className="admin-btn-save" type="submit" style={{ width: '100%', marginTop: '12px' }}>
                    Save Industry &rarr;
                  </button>
                </form>
              )}

              {activeTab === 'submissions' && (
                <div style={{ padding: '24px', borderRadius: '16px', backgroundColor: '#E6F2ED', border: '1px solid #09543F', color: '#09543F' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {renderAdminIcon('submissions', '#09543F', 18)} Visitor Inquiries
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.6' }}>
                    Customer messages submitted via the Contact page are logged automatically in Firestore. You can review customer details or purge them directly from the list panel.
                  </p>
                </div>
              )}

              {activeTab === 'applications' && (
                <div style={{ padding: '24px', borderRadius: '16px', backgroundColor: '#E6F2ED', border: '1px solid #09543F', color: '#09543F' }}>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '1rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {renderAdminIcon('applications', '#09543F', 18)} Candidate Profiles
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.6' }}>
                    Applications sent from the Careers section register dynamically in this tab. Click resume links to inspect qualifications or manage job applicants.
                  </p>
                </div>
              )}

            </div>

            {/* List & Actions Section */}
            <div className="admin-list-card">
              <h3 style={{ color: '#09543F', fontSize: '1.25rem', fontWeight: '700', marginBottom: '24px' }}>
                Existing {activeTab.toUpperCase()} Records
              </h3>

              <div className="admin-table-container">
                <table className="admin-premium-table">
                  <thead>
                    <tr>
                      <th>Title/Author</th>
                      <th>Overview/Content</th>
                      <th style={{ width: '120px' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activeTab === 'projects' && dbProjects.map((p) => (
                      <tr key={p.id}>
                        <td style={{ fontWeight: '600' }}>{p.title}</td>
                        <td style={{ color: 'var(--color-text-muted)' }}>{p.desc?.slice(0, 80)}...</td>
                        <td>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <button className="admin-btn-action admin-btn-edit" onClick={() => handleEdit(p, 'projects')}>Edit</button>
                            <button className="admin-btn-action admin-btn-delete" onClick={() => handleDelete(p.id, 'projects')}>Del</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {activeTab === 'blogs' && dbBlogs.map((b) => (
                      <tr key={b.id}>
                        <td style={{ fontWeight: '600' }}>{b.title}</td>
                        <td style={{ color: 'var(--color-text-muted)' }}>{b.excerpt?.slice(0, 80)}...</td>
                        <td>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <button className="admin-btn-action admin-btn-edit" onClick={() => handleEdit(b, 'blogs')}>Edit</button>
                            <button className="admin-btn-action admin-btn-delete" onClick={() => handleDelete(b.id, 'blogs')}>Del</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {activeTab === 'jobs' && dbJobs.map((j) => (
                      <tr key={j.id}>
                        <td style={{ fontWeight: '600' }}>{j.title}</td>
                        <td style={{ color: 'var(--color-text-muted)' }}>{j.location} | {j.salary}</td>
                        <td>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <button className="admin-btn-action admin-btn-edit" onClick={() => handleEdit(j, 'jobs')}>Edit</button>
                            <button className="admin-btn-action admin-btn-delete" onClick={() => handleDelete(j.id, 'jobs')}>Del</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {activeTab === 'faqs' && dbFaqs.map((f) => (
                      <tr key={f.id}>
                        <td style={{ fontWeight: '600' }}>{f.question}</td>
                        <td style={{ color: 'var(--color-text-muted)' }}>{f.answer?.slice(0, 80)}...</td>
                        <td>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <button className="admin-btn-action admin-btn-edit" onClick={() => handleEdit(f, 'faqs')}>Edit</button>
                            <button className="admin-btn-action admin-btn-delete" onClick={() => handleDelete(f.id, 'faqs')}>Del</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {activeTab === 'testimonials' && dbTestimonials.map((t) => (
                      <tr key={t.id}>
                        <td style={{ fontWeight: '600' }}>{t.author}</td>
                        <td style={{ color: 'var(--color-text-muted)' }}>{t.quote?.slice(0, 80)}...</td>
                        <td>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <button className="admin-btn-action admin-btn-edit" onClick={() => handleEdit(t, 'testimonials')}>Edit</button>
                            <button className="admin-btn-action admin-btn-delete" onClick={() => handleDelete(t.id, 'testimonials')}>Del</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {activeTab === 'timeline' && dbTimeline.map((step) => (
                      <tr key={step.id}>
                        <td style={{ fontWeight: '600' }}>{step.phase} - {step.title}</td>
                        <td style={{ color: 'var(--color-text-muted)' }}>{step.desc?.slice(0, 80)}...</td>
                        <td>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <button className="admin-btn-action admin-btn-edit" onClick={() => handleEdit(step, 'timeline')}>Edit</button>
                            <button className="admin-btn-action admin-btn-delete" onClick={() => handleDelete(step.id, 'timeline')}>Del</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {activeTab === 'industries' && dbIndustries.map((ind) => (
                      <tr key={ind.id}>
                        <td style={{ fontWeight: '600' }}>{ind.name}</td>
                        <td style={{ color: 'var(--color-text-muted)' }}>-</td>
                        <td>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            <button className="admin-btn-action admin-btn-edit" onClick={() => handleEdit(ind, 'industries')}>Edit</button>
                            <button className="admin-btn-action admin-btn-delete" onClick={() => handleDelete(ind.id, 'industries')}>Del</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {activeTab === 'submissions' && dbSubmissions.map((s) => (
                      <tr key={s.id}>
                        <td>
                          <div style={{ fontWeight: '600' }}>{s.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 'normal' }}>{s.email}</div>
                          <span className="job-pill" style={{ fontSize: '0.65rem', marginTop: '4px', display: 'inline-block' }}>{(s.projectType || 'other').toUpperCase()}</span>
                        </td>
                        <td>
                          <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.5' }}>{s.message}</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
                            Received: {s.createdAt ? new Date(s.createdAt).toLocaleString() : 'N/A'}
                          </div>
                        </td>
                        <td>
                          <button className="admin-btn-action admin-btn-delete" onClick={() => handleDelete(s.id, 'contactSubmissions')}>Delete</button>
                        </td>
                      </tr>
                    ))}
                    {activeTab === 'applications' && dbApplications.map((app) => (
                      <tr key={app.id}>
                        <td>
                          <div style={{ fontWeight: '600' }}>{app.fullName}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 'normal' }}>{app.email}</div>
                          <span className="job-pill job-pill-accent" style={{ fontSize: '0.65rem', marginTop: '4px', display: 'inline-block' }}>{app.jobTitle}</span>
                        </td>
                        <td>
                          <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.5', marginBottom: '8px' }}>{app.coverLetter}</div>
                          {app.resumeLink && (
                            <a 
                              href={app.resumeLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              style={{ color: '#2563EB', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.8rem' }}
                            >
                              📄 View Resume / Profile &rarr;
                            </a>
                          )}
                          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', marginTop: '8px' }}>
                            Applied: {app.appliedAt ? new Date(app.appliedAt).toLocaleString() : 'N/A'}
                          </div>
                        </td>
                        <td>
                          <button className="admin-btn-action admin-btn-delete" onClick={() => handleDelete(app.id, 'applications')}>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
