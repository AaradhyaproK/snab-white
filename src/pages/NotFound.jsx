import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  React.useEffect(() => {
    document.title = "404 Page Not Found | SNAB Innovations";
  }, []);
  return (
    <div className="notfound-container">
      <div className="notfound-card">
        
        {/* Warning Badge */}
        <span className="notfound-badge">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 9v4M12 17h.01" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Error 404
        </span>

        {/* Vector Illustration */}
        <div className="notfound-illustration">
          <svg viewBox="0 0 200 200" width="200" height="200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer dotted orbit */}
            <circle cx="100" cy="100" r="80" stroke="#09543F" strokeWidth="1.5" strokeDasharray="6 6" opacity="0.25" />
            {/* Inner glowing core */}
            <circle cx="100" cy="100" r="45" fill="url(#coreGradient)" opacity="0.1" />
            <circle cx="100" cy="100" r="30" stroke="#09543F" strokeWidth="3" />
            {/* Planet rings */}
            <path d="M40 120c15-25 75-45 120-20M35 110c15-20 60-35 90-25" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
            {/* Tiny satellite */}
            <g transform="translate(145, 60)">
              <rect x="-10" y="-10" width="20" height="20" rx="4" fill="#09543F" />
              <line x1="-20" y1="0" x2="20" y2="0" stroke="#10B981" strokeWidth="2" />
              <circle cx="0" cy="-3" r="3" fill="#FFFFFF" />
            </g>
            {/* Definitions for gradient */}
            <defs>
              <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#09543F" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Text Details */}
        <div>
          <h1 className="notfound-title">Path Not Found</h1>
          <p className="notfound-desc" style={{ marginTop: '12px' }}>
            The pathway you request is currently offline or does not exist. 
            Let us guide you back to our verified platforms.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="notfound-btn-row">
          <Link className="btn btn-primary" to="/" style={{ textDecoration: 'none', padding: '12px 28px' }}>
            Return Home &rarr;
          </Link>
          <Link className="btn btn-secondary" to="/services" style={{ textDecoration: 'none', padding: '12px 28px', border: '1px solid var(--color-border)' }}>
            Our Services
          </Link>
        </div>

      </div>
    </div>
  );
}
