import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Logs from './pages/Logs';
import PrivacyPolicy from './pages/DataPolicy';
import TermsConditions from './pages/TermsConditions';
import Admin from './pages/Admin';
import BackgroundDecorations from './components/BackgroundDecorations';
import ChatAssistant from './components/ChatAssistant';
import './App.css';

// Utility helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Micro-interactivity scroll observer hook for animating entry blocks
function EntryAnimations() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animTargets = document.querySelectorAll(
      '.testimonial-card, .service-card, .portfolio-card, .why-card, .mv-card, .value-item, .contact-form, .process-card, .blog-card, .perk-card, .job-card'
    );
    
    animTargets.forEach((card) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, [location.pathname]); // Re-observe targets when navigating to different pages

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <EntryAnimations />
      <BackgroundDecorations />
      <ChatAssistant />
      <Navbar />
      <Routes>
        <Route path="/" element={<div className="page-container"><Home /></div>} />
        <Route path="/about" element={<div className="page-container"><About /></div>} />
        <Route path="/services" element={<div className="page-container"><Services /></div>} />
        <Route path="/portfolio" element={<div className="page-container"><Portfolio /></div>} />
        <Route path="/contact" element={<div className="page-container"><Contact /></div>} />
        <Route path="/blog" element={<div className="page-container"><Blog /></div>} />
        <Route path="/careers" element={<div className="page-container"><Careers /></div>} />
        <Route path="/logs" element={<div className="page-container"><Logs /></div>} />
        <Route path="/privacy-policy" element={<div className="page-container"><PrivacyPolicy /></div>} />
        <Route path="/terms-conditions" element={<div className="page-container"><TermsConditions /></div>} />
        <Route path="/admin/secure" element={<div className="page-container"><Admin /></div>} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
