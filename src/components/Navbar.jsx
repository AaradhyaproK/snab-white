import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/snab-nobg.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      const progress = (window.pageYOffset / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`navbar ${isMenuOpen ? 'mobile-active' : ''}`} style={{ position: 'fixed', width: '100%', top: 0, left: 0 }}>
        <div className="navbar-container">
          <Link to="/" className="logo" aria-label="SNAB Innovations Home" onClick={() => setIsMenuOpen(false)}>
            <img src={logoImg} className="logo-icon" alt="SNAB Innovations Logo" width="32" height="32" style={{ objectFit: 'contain' }} />
            <span 
              className="logo-text" 
              style={{ 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em',
                fontWeight: '900',
                display: 'inline-flex'
              }}
            >
              {"snab".split("").map((char, idx) => {
                const thresholds = [15, 40, 65, 90];
                const isLit = scrollProgress >= thresholds[idx];
                return (
                  <span 
                    key={idx} 
                    style={{ 
                      color: isLit ? '#2563EB' : 'var(--color-text-main)',
                      transition: 'color 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)'
                    }}
                  >
                    {char}
                  </span>
                );
              })}
            </span>
          </Link>
          
          <nav className="nav-menu">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/services" className="nav-item">Services</Link>
            <Link to="/portfolio" className="nav-item">Portfolio</Link>
            <Link to="/blog" className="nav-item">Blog</Link>
            <Link to="/careers" className="nav-item">Careers</Link>
            <Link to="/logs" className="nav-item">Logs</Link>
            <Link to="/contact" className="nav-item">Contact</Link>
          </nav>
          
          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary btn-nav">Book a Consultation <span className="arrow-right">→</span></Link>
          </div>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            style={{ zIndex: 1000001 }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Unique Mobile Full-Screen Overlay */}
      <div className={`unique-mobile-overlay ${isMenuOpen ? 'active' : ''}`}>
        {/* Dedicated Close Button */}
        <button 
          className="overlay-close-btn"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Soft background watermark */}
        <div className="overlay-watermark">SNAB</div>
        
        <div className="overlay-container">
          <div className="overlay-left-col">
            <span className="overlay-meta-label">Navigation</span>
            <nav className="overlay-menu-list">
              <Link to="/" className="overlay-menu-link" onClick={() => setIsMenuOpen(false)}>
                <span className="overlay-num">01 /</span> Home
              </Link>
              <Link to="/about" className="overlay-menu-link" onClick={() => setIsMenuOpen(false)}>
                <span className="overlay-num">02 /</span> About Studio
              </Link>
              <Link to="/services" className="overlay-menu-link" onClick={() => setIsMenuOpen(false)}>
                <span className="overlay-num">03 /</span> Digital Services
              </Link>
              <Link to="/portfolio" className="overlay-menu-link" onClick={() => setIsMenuOpen(false)}>
                <span className="overlay-num">04 /</span> Case Studies
              </Link>
              <Link to="/blog" className="overlay-menu-link" onClick={() => setIsMenuOpen(false)}>
                <span className="overlay-num">05 /</span> Tech Blog
              </Link>
              <Link to="/careers" className="overlay-menu-link" onClick={() => setIsMenuOpen(false)}>
                <span className="overlay-num">06 /</span> Careers & Jobs
              </Link>
              <Link to="/logs" className="overlay-menu-link" onClick={() => setIsMenuOpen(false)}>
                <span className="overlay-num">07 /</span> Changelog
              </Link>
              <Link to="/contact" className="overlay-menu-link" onClick={() => setIsMenuOpen(false)}>
                <span className="overlay-num">08 /</span> Get In Touch
              </Link>
            </nav>
          </div>

          <div className="overlay-right-col">
            <div className="overlay-info-block">
              <span className="overlay-meta-label">Connect</span>
              <div className="overlay-social-links">
                <a href="https://x.com/snabInnovations" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
                <a href="https://instagram.com/snab_innovations" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            
            <div className="overlay-info-block">
              <span className="overlay-meta-label">Contact Details</span>
              <p className="overlay-info-text">info.snabinnovations@gmail.com</p>
              <p className="overlay-info-text" style={{ fontSize: '0.85rem' }}>+91 9545556045 / 8767401706</p>
              <p className="overlay-info-text" style={{ opacity: 0.5, fontSize: '0.8rem', marginTop: '8px' }}>© 2026 SNAB Innovations</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
