import React, { useState } from 'react';
import { useCollection } from '../hooks/useCollection';

const DEFAULT_FAQS = [
  {
    question: "What services do you provide?",
    answer: "We offer end-to-end tech solutions including custom AI & Machine Learning applications, software development, modern web and mobile apps, DevOps consulting, cloud architecture deployments, UI/UX design wireframes, and cybersecurity audits."
  },
  {
    question: "Do you work with startups?",
    answer: "Yes, absolutely! We love helping startups from initial idea validation, scoping, MVP prototyping to successful launch and cloud scale-out."
  },
  {
    question: "Do you provide maintenance?",
    answer: "Yes, we offer long-term support plans including server logs monitoring, security updates, database management, cloud optimization audits, and rapid bug-fixing guarantees."
  },
  {
    question: "Can you modernize existing software?",
    answer: "Definitely. We specialize in software modernization: replacing legacy code structures, cloud migrations (moving to AWS/GCP/Azure), API redesigns, and speed optimizations."
  },
  {
    question: "Which industries do you work with?",
    answer: "We serve a wide variety of domains: Healthcare, Education, Retail, Logistics, SaaS platforms, Finance, E-Commerce, Manufacturing, Hospitality, and Startups."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { data: faqData } = useCollection("faqs", DEFAULT_FAQS);

  const handleToggle = (index, e) => {
    e.preventDefault();
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-header">Questions, answered.</h2>
        
        <div className="faq-accordion-group">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <details 
                key={item.id || idx} 
                className={`faq-item ${isOpen ? 'open' : ''}`}
                open={isOpen}
              >
                <summary 
                  className="faq-question"
                  onClick={(e) => handleToggle(idx, e)}
                >
                  <span>{item.question}</span>
                  <svg 
                    className="faq-chevron" 
                    viewBox="0 0 24 24" 
                    width="20" 
                    height="20" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
