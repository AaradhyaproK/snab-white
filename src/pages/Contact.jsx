import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  React.useEffect(() => {
    document.title = "Contact Us | SNAB Innovations";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const name = e.target.elements.name.value;
      const email = e.target.elements.email.value;
      const projectType = e.target.elements.projectType.value;
      const message = e.target.elements.message.value;

      await addDoc(collection(db, "contactSubmissions"), {
        name,
        email,
        projectType,
        message,
        createdAt: new Date().toISOString()
      });

      setFormSubmitted(true);
    } catch (err) {
      console.error("Error saving contact submission:", err);
      setSubmitError(err.message || "Failed to submit message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid">
        
        {/* Info Column */}
        <div className="contact-info-side">
          <span className="section-tag">Get in Touch</span>
          <h2 className="contact-info-title">Let's Turn Your Vision into Reality</h2>
          <p className="grey-text" style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '32px' }}>
            Whether you have a specific software spec ready to build or just want to explore how AI can automate your operations, our consulting team is here to help.
          </p>
          
          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="contact-label">Email</span>
              <div className="contact-value">
                <a href="mailto:info.snabinnovations@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                  info.snabinnovations@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="contact-label">Phone</span>
              <div className="contact-value">
                <a href="tel:9545556045" style={{ color: 'inherit', textDecoration: 'none' }}>9545556045</a> / <a href="tel:8767401706" style={{ color: 'inherit', textDecoration: 'none' }}>8767401706</a>
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <span className="contact-label">Office Address</span>
              <div className="contact-value">
                Office No. 5/6, Janki Plaza, Dwarka Circle, Nashik – 422006
              </div>
            </div>
          </div>

          {/* Map Location */}
          <div style={{ marginTop: '30px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--color-border)', height: '220px' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.1983050868205!2d73.79633887588047!3d19.99964172289658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb2f4df6cf6f%3A0xc3c5f49e4918e7c!2sDwarka%20Circle%2C%20Nashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719574510000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SNAB Nashik Office Map Location"
            ></iframe>
          </div>
        </div>

        {/* Form Column */}
        <div>
          {formSubmitted ? (
            <div className="contact-form" style={{ textAlign: 'center', padding: '60px 40px' }}>
              <div className="contact-icon" style={{ margin: '0 auto 24px', width: '60px', height: '60px' }}>✓</div>
              <h3 className="process-detail-title">Request Submitted!</h3>
              <p className="grey-text" style={{ marginTop: '12px' }}>
                Thank you for reaching out. A technology strategist from SNAB Innovations will review your message and contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="process-item-title" style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Schedule a Consultation</h3>
              
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input 
                  className="form-input" 
                  type="text" 
                  id="name"
                  name="name" 
                  required 
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Work Email</label>
                <input 
                  className="form-input" 
                  type="email" 
                  id="email"
                  name="email" 
                  required 
                  placeholder="john@company.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="projectType">How Can We Help?</label>
                <select 
                  className="form-input" 
                  id="projectType"
                  name="projectType"
                  defaultValue="ai"
                >
                  <option value="ai">AI & Machine Learning Solutions</option>
                  <option value="software">Custom Software Development</option>
                  <option value="web">Web & E-Commerce Platforms</option>
                  <option value="mobile">Mobile App Development</option>
                  <option value="cloud">Cloud Migration & DevOps</option>
                  <option value="other">General Tech Consulting</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Briefly Outline Your Idea</label>
                <textarea 
                  className="form-input" 
                  id="message"
                  name="message" 
                  rows="4" 
                  required
                  placeholder="Tell us about the project goals, timelines, and key integrations..."
                ></textarea>
              </div>

              {submitError && (
                <div style={{ color: '#EF4444', fontSize: '0.85rem', marginBottom: '12px', fontWeight: '600' }}>
                  {submitError}
                </div>
              )}

              <button 
                className="btn btn-primary" 
                type="submit" 
                disabled={isSubmitting}
                style={{ width: '100%', marginTop: '10px', opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
              >
                {isSubmitting ? 'Sending Request...' : 'Submit Request'} <span className="arrow-right">→</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
