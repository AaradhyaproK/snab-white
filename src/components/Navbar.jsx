import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/snab-nobg.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`navbar ${isMenuOpen ? 'mobile-active' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo" aria-label="SNAB Innovations Home" onClick={() => setIsMenuOpen(false)}>
          <img src={logoImg} className="logo-icon" alt="SNAB Innovations Logo" width="32" height="32" style={{ objectFit: 'contain' }} />
          <span className="logo-text" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>snab</span>
        </Link>
        
        <nav className="nav-menu">
          <Link to="/" className="nav-item" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" className="nav-item" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/services" className="nav-item" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" className="nav-item" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
          <Link to="/blog" className="nav-item" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/careers" className="nav-item" onClick={() => setIsMenuOpen(false)}>Careers</Link>
          <Link to="/logs" className="nav-item" onClick={() => setIsMenuOpen(false)}>Logs</Link>
          <Link to="/contact" className="nav-item" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
        
        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary btn-nav">Book a Consultation <span className="arrow-right">→</span></Link>
        </div>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
