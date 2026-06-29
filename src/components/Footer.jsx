import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/snab-nobg.png';

export default function Footer() {
  return (
    <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Giant footer watermark background */}
      <div className="footer-watermark">SNAB</div>

      <div className="footer-container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div className="footer-grid">
          {/* Logo, Address and Tagline Column */}
          <div className="footer-logo-side">
            <Link to="/" className="logo" style={{ color: '#FFFFFF' }}>
              <img src={logoImg} className="logo-icon" alt="SNAB Innovations Logo" width="30" height="30" style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              <span className="logo-text" style={{ color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>snab</span>
            </Link>
            <p className="footer-tagline" style={{ margin: '8px 0 0' }}>
              Innovating Today. Empowering Tomorrow.
            </p>
            <p className="footer-tagline" style={{ fontSize: '0.85rem', color: '#9CA3AF', margin: '12px 0 0', lineHeight: '1.5' }}>
              <strong>Office:</strong> Office No. 5 or 6, Janki Plaza, Dwarka Circle, Nashik - 422006
            </p>
            <p className="footer-tagline" style={{ fontSize: '0.85rem', color: '#9CA3AF', margin: '6px 0 0' }}>
              <strong>Phone:</strong> 9545556045 / 8767401706
            </p>
            <p className="footer-tagline" style={{ fontSize: '0.85rem', color: '#9CA3AF', margin: '6px 0 0' }}>
              <strong>Email:</strong> info.snabinnovations@gmail.com
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-col">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/careers" className="footer-link">Careers</Link></li>
              <li><Link to="/logs" className="footer-link">Logs</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-col">
              <li><Link to="/services" className="footer-link">AI Solutions</Link></li>
              <li><Link to="/services" className="footer-link">Software Development</Link></li>
              <li><Link to="/services" className="footer-link">Web Development</Link></li>
              <li><Link to="/services" className="footer-link">Mobile Apps</Link></li>
              <li><Link to="/services" className="footer-link">Cloud Services</Link></li>
              <li><Link to="/services" className="footer-link">DevOps</Link></li>
              <li><Link to="/services" className="footer-link">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Follow Us Column */}
          <div>
            <h4 className="footer-col-title">Follow Us</h4>
            <ul className="footer-links-col">
              <li><a href="#linkedin" className="footer-link">LinkedIn</a></li>
              <li><a href="https://github.com" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://x.com/snabInnovations" className="footer-link" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
              <li><a href="https://instagram.com/snab_innovations" className="footer-link" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SNAB Innovations. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-conditions">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
