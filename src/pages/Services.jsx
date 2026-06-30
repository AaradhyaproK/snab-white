import React, { useState } from 'react';
import ServicesComponent from '../components/Services';

// Dictionary of custom vector SVGs for technologies (clean, solid, professional B2B style)
const techLogos = {
  "React": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <circle cx="50" cy="50" r="8" fill="#09543F"/>
      <ellipse cx="50" cy="50" rx="38" ry="13" stroke="#09543F" strokeWidth="3.5" transform="rotate(0 50 50)"/>
      <ellipse cx="50" cy="50" rx="38" ry="13" stroke="#09543F" strokeWidth="3.5" transform="rotate(60 50 50)"/>
      <ellipse cx="50" cy="50" rx="38" ry="13" stroke="#09543F" strokeWidth="3.5" transform="rotate(120 50 50)"/>
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <circle cx="50" cy="50" r="44" fill="#111B18"/>
      <path d="M70 70 L38 30 A3.5 3.5 0 0 0 34 33 L34 67 A3.5 3.5 0 0 0 41 67 L41 42 L64 72 A3.5 3.5 0 0 0 70 70 Z" fill="#FFFFFF"/>
      <rect x="62" y="32" width="5" height="24" rx="2.5" fill="#FFFFFF"/>
    </svg>
  ),
  "Angular": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M50 8 L85 20 L78 78 L50 94 L22 78 L15 20 Z" fill="#09543F"/>
      <path d="M50 16 L28 72 L37 72 L42 60 L58 60 L63 72 L72 72 Z" fill="#FFFFFF"/>
      <path d="M50 25 L45 50 L55 50 Z" fill="#09543F"/>
    </svg>
  ),
  "Vue.js": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M50 82 L90 14 L72 14 L50 52 L28 14 L10 14 Z" fill="#09543F"/>
      <path d="M50 82 L76 38 L67 38 L50 67 L33 38 L24 38 Z" fill="#111B18"/>
    </svg>
  ),
  "HTML5": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M16 12 L84 12 L77 78 L50 88 L23 78 Z" fill="#09543F"/>
      <path d="M50 18 L76 18 L73 52 L50 52 Z" fill="#FFFFFF"/>
      <path d="M50 60 L67 60 L64 74 L50 79 Z" fill="#FFFFFF" opacity="0.9"/>
      <path d="M50 18 L24 18 L27 52 L50 52 Z" fill="#063F2F"/>
      <path d="M50 60 L33 60 L36 74 L50 79 Z" fill="#063F2F"/>
    </svg>
  ),
  "CSS3": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M16 12 L84 12 L77 78 L50 88 L23 78 Z" fill="#09543F"/>
      <path d="M50 18 L76 18 L73 52 L50 52 Z" fill="#FFFFFF"/>
      <path d="M50 60 L67 60 L64 74 L50 79 Z" fill="#FFFFFF" opacity="0.9"/>
      <path d="M50 18 L24 18 L27 52 L50 52 Z" fill="#063F2F"/>
      <path d="M50 60 L33 60 L36 74 L50 79 Z" fill="#063F2F"/>
    </svg>
  ),
  "Tailwind CSS": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M16 52 C16 38, 30 32, 38 32 C46 32, 48 38, 56 38 C64 38, 68 32, 76 32 C84 32, 84 38, 84 46 C84 60, 70 66, 62 66 C54 66, 52 60, 44 60 C36 60, 32 66, 24 66 C16 66, 16 60, 16 52 Z" fill="#09543F"/>
      <path d="M22 66 C22 52, 36 46, 44 46 C52 46, 54 52, 62 52 C70 52, 74 46, 82 46 C90 46, 90 52, 90 60 C90 74, 76 80, 68 80 C60 80, 58 74, 50 74 C42 74, 38 80, 30 80 C22 80, 22 74, 22 66 Z" fill="#09543F" opacity="0.75"/>
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" fill="#09543F"/>
      <path d="M50 20 L76 35 L76 65 L50 80 L24 65 L24 35 Z" fill="#FFFFFF"/>
      <path d="M50 32 L64 40 L64 56 L50 64 L36 56 L36 40 Z" fill="#09543F"/>
    </svg>
  ),
  "Python": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M48 10 C32 10, 26 16, 26 26 L26 38 L48 38 L48 42 L18 42 C10 42, 10 48, 10 60 L10 68 C10 78, 16 84, 26 84 C34 84, 38 84, 48 84 L48 72 C48 62, 54 56, 64 56 L72 56 L72 38 C72 26, 66 10, 48 10 Z" fill="#09543F"/>
      <path d="M52 90 C68 90, 74 84, 74 74 L74 62 L52 62 L52 58 L82 58 C90 58, 90 52, 90 40 L90 32 C90 22, 84 16, 74 16 C66 16, 62 16, 52 16 L52 28 C52 38, 46 44, 36 44 L28 44 L28 62 C28 74, 34 90, 52 90 Z" fill="#09543F" opacity="0.6"/>
      <circle cx="36" cy="24" r="3.5" fill="#FFFFFF"/>
      <circle cx="64" cy="76" r="3.5" fill="#FFFFFF"/>
    </svg>
  ),
  "Java": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M22 68 C35 74, 65 74, 78 68 C80 67, 82 65, 80 63 C78 61, 74 60, 68 62 C58 64, 42 64, 32 62 C26 60, 22 61, 20 63 C18 65, 20 67, 22 68 Z" fill="#09543F"/>
      <path d="M26 82 C38 88, 62 88, 74 82 C76 81, 78 79, 76 77 C74 75, 70 74, 64 76 C56 78, 44 78, 36 76 C30 74, 26 75, 24 77 C22 79, 24 81, 26 82 Z" fill="#09543F" opacity="0.8"/>
      <path d="M48 20 C48 20, 56 32, 44 48 C40 53, 44 60, 54 54 C60 50, 52 38, 52 38" stroke="#09543F" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M58 14 C58 14, 66 26, 54 42 C50 47, 54 54, 64 48 C70 44, 62 32, 62 32" stroke="#09543F" strokeWidth="4.5" strokeLinecap="round" opacity="0.7"/>
    </svg>
  ),
  ".NET": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <circle cx="50" cy="50" r="44" stroke="#09543F" strokeWidth="5"/>
      <path d="M30 35 L42 65 L48 50 L52 50 L58 65 L70 35" stroke="#09543F" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "PHP": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <ellipse cx="50" cy="50" rx="44" ry="26" fill="#09543F"/>
      <path d="M30 62 L38 38 L48 38 C54 38, 56 42, 54 46 C52 50, 48 52, 42 52 L36 52 M58 62 L66 38 L76 38 C82 38, 84 42, 82 46 C80 50, 76 52, 70 52 L64 52" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round"/>
    </svg>
  ),
  "PostgreSQL": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M68 28 C68 22, 60 16, 48 16 C32 16, 22 28, 22 46 C22 66, 32 78, 48 78 C54 78, 62 76, 68 70 L64 64 C60 68, 54 70, 48 70 C36 70, 30 60, 30 46 C30 32, 36 22, 48 22 C56 22, 62 26, 62 32 Z" fill="#09543F"/>
      <path d="M68 28 L68 56 C68 62, 64 66, 58 66 L52 66 C52 66, 56 62, 56 56 L56 42 C56 34, 62 28, 68 28 Z" fill="#09543F" opacity="0.75"/>
      <circle cx="48" cy="38" r="4" fill="#09543F"/>
    </svg>
  ),
  "MySQL": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M16 48 L42 22 L84 32 L68 78 L28 72 Z" fill="#09543F"/>
      <path d="M42 22 C36 30, 36 44, 46 54 C54 62, 68 64, 76 58" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round"/>
    </svg>
  ),
  "MongoDB": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M50 10 C50 10, 24 32, 24 54 C24 74, 38 88, 50 90 C62 88, 76 74, 76 54 C76 32, 50 10, 50 10 Z" fill="#09543F"/>
      <path d="M50 10 L50 90" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  ),
  "Redis": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M14 28 L50 14 L86 28 L50 42 Z" fill="#09543F"/>
      <path d="M14 48 L50 36 L86 48 L50 60 Z" fill="#09543F" opacity="0.8"/>
      <path d="M14 68 L50 56 L86 68 L50 80 Z" fill="#09543F" opacity="0.6"/>
    </svg>
  ),
  "AWS": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M22 64 C22 64, 44 76, 78 64" stroke="#09543F" strokeWidth="5.5" strokeLinecap="round"/>
      <path d="M70 56 L78 64 L68 72" stroke="#09543F" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M42 24 C34 24, 28 30, 28 38 L28 50 C28 58, 34 64, 42 64 C50 64, 56 58, 56 50 L56 38 C56 30, 50 24, 42 24 Z M42 34 C44 34, 46 36, 46 40 L46 48 C46 52, 44 54, 42 54 C40 54, 38 52, 38 48 L38 40 C38 36, 40 34, 42 34 Z" fill="#09543F" opacity="0.75"/>
    </svg>
  ),
  "Azure": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M18 78 L52 14 L82 24 L48 88 Z" fill="#09543F"/>
      <path d="M18 78 L52 64 L82 24 Z" fill="#09543F" opacity="0.5"/>
    </svg>
  ),
  "Google Cloud": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M24 64 L50 20 L76 64 Z" stroke="#09543F" strokeWidth="5.5" strokeLinejoin="round"/>
      <circle cx="50" cy="20" r="8" fill="#09543F"/>
      <circle cx="24" cy="64" r="8" fill="#09543F"/>
      <circle cx="76" cy="64" r="8" fill="#09543F"/>
    </svg>
  ),
  "Cloud Migration": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M22 60 C16 60, 10 52, 12 42 C14 32, 24 24, 34 26 C40 18, 54 14, 66 18 C78 22, 84 32, 82 44 C88 46, 92 52, 90 60 C88 68, 78 72, 70 70" stroke="#09543F" strokeWidth="4.5" strokeLinecap="round"/>
      <path d="M50 78 L50 48 M42 56 L50 48 L58 56" stroke="#09543F" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "Serverless": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M56 12 L24 52 L48 52 L44 88 L76 48 L52 48 Z" fill="#09543F"/>
    </svg>
  ),
  "Docker": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M12 52 C12 36, 26 28, 48 28 C70 28, 84 36, 84 52 C84 68, 70 76, 48 76 C26 76, 12 68, 12 52 Z" fill="#09543F"/>
      <rect x="36" y="38" width="10" height="10" fill="#FFFFFF" rx="2"/>
      <rect x="50" y="38" width="10" height="10" fill="#FFFFFF" rx="2"/>
      <rect x="43" y="49" width="10" height="10" fill="#FFFFFF" rx="2"/>
    </svg>
  ),
  "Kubernetes": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M50 6 L88 24 L88 68 L50 94 L12 68 L12 24 Z" stroke="#09543F" strokeWidth="4.5" strokeLinejoin="round"/>
      <circle cx="50" cy="50" r="14" stroke="#09543F" strokeWidth="4"/>
      <path d="M50 6 L50 36 M12 24 L38 42 M88 24 L62 42 M12 68 L38 58 M88 68 L62 58 M50 94 L50 64" stroke="#09543F" strokeWidth="4.5"/>
    </svg>
  ),
  "Jenkins": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <circle cx="50" cy="50" r="44" stroke="#09543F" strokeWidth="5"/>
      <path d="M32 50 L45 62 L68 38" stroke="#09543F" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  "GitHub Actions": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <circle cx="50" cy="24" r="10" fill="#09543F"/>
      <circle cx="28" cy="66" r="10" fill="#09543F"/>
      <circle cx="72" cy="66" r="10" fill="#09543F"/>
      <path d="M50 24 L28 66 L72 66 Z" stroke="#09543F" strokeWidth="4.5" strokeLinejoin="round"/>
    </svg>
  ),
  "Terraform": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <rect x="22" y="16" width="24" height="24" fill="#09543F" rx="4"/>
      <rect x="54" y="16" width="24" height="24" fill="#09543F" rx="4" opacity="0.6"/>
      <rect x="22" y="48" width="24" height="24" fill="#09543F" rx="4" opacity="0.8"/>
      <rect x="54" y="48" width="24" height="24" fill="#09543F" rx="4"/>
    </svg>
  ),
  "OpenAI APIs": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <circle cx="50" cy="50" r="44" stroke="#09543F" strokeWidth="4.5"/>
      <circle cx="50" cy="50" r="14" fill="#09543F"/>
      <circle cx="50" cy="28" r="8" fill="#09543F" opacity="0.7"/>
      <circle cx="50" cy="72" r="8" fill="#09543F" opacity="0.7"/>
      <circle cx="28" cy="50" r="8" fill="#09543F" opacity="0.7"/>
      <circle cx="72" cy="50" r="8" fill="#09543F" opacity="0.7"/>
    </svg>
  ),
  "LangChain": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <rect x="18" y="38" width="34" height="24" rx="12" stroke="#09543F" strokeWidth="5.5"/>
      <rect x="48" y="38" width="34" height="24" rx="12" stroke="#09543F" strokeWidth="5.5"/>
    </svg>
  ),
  "TensorFlow": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M50 10 L84 28 L84 64 L50 82 L16 64 L16 28 Z" fill="#09543F"/>
      <path d="M50 10 L50 82 M16 28 L84 64 M16 64 L84 28" stroke="#FFFFFF" strokeWidth="4"/>
    </svg>
  ),
  "PyTorch": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <path d="M50 14 C32 14, 18 28, 18 46 C18 64, 50 86, 50 86 C50 86, 82 64, 82 46 C82 28, 68 14, 50 14 Z" fill="#09543F"/>
      <circle cx="50" cy="42" r="10" fill="#FFFFFF"/>
    </svg>
  ),
  "Hugging Face": (
    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
      <circle cx="50" cy="50" r="44" fill="#09543F"/>
      {/* Smiling eyes */}
      <path d="M34 46 Q40 40 46 46" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
      <path d="M54 46 Q60 40 66 46" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round"/>
      {/* Smiling mouth */}
      <path d="M36 60 Q50 72 64 60" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round"/>
    </svg>
  )
};

export default function Services() {
  const [activeTab, setActiveTab] = useState('frontend');

  React.useEffect(() => {
    document.title = "Our Services | SNAB Innovations";
  }, []);

  const techCategories = {
    frontend: {
      label: "Frontend",
      skills: ["React", "Next.js", "Angular", "Vue.js", "HTML5", "CSS3", "Tailwind CSS"]
    },
    backend: {
      label: "Backend",
      skills: ["Node.js", "Python", "Java", ".NET", "PHP"]
    },
    databases: {
      label: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    cloud: {
      label: "Cloud",
      skills: ["AWS", "Azure", "Google Cloud", "Cloud Migration", "Serverless"]
    },
    devops: {
      label: "DevOps",
      skills: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions", "Terraform"]
    },
    ai: {
      label: "AI & ML",
      skills: ["OpenAI APIs", "LangChain", "TensorFlow", "PyTorch", "Hugging Face"]
    }
  };

  return (
    <>
      <ServicesComponent />

      {/* Technologies We Use Section */}
      <section className="tech-section" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="tech-container">
          <div className="section-title-wrapper" style={{ textAlign: 'center' }}>
            <span className="section-tag">Technology Stack</span>
            <h2 className="section-title">Our Modern Engineering Arsenal</h2>
          </div>
          
          {/* Tab buttons */}
          <div className="tech-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {Object.keys(techCategories).map((key) => (
              <button 
                key={key}
                className={`tech-tab-btn ${activeTab === key ? 'active' : ''}`}
                onClick={() => setActiveTab(key)}
              >
                {techCategories[key].label}
              </button>
            ))}
          </div>

          {/* Tab content skills grid */}
          <div className="tech-items-grid">
            {techCategories[activeTab].skills.map((skill, idx) => (
              <div className="tech-item" key={idx}>
                <div className="tech-item-logo-wrapper" style={{ height: '54px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                  {techLogos[skill] || (
                    <svg viewBox="0 0 100 100" width="44" height="44" fill="none">
                      <circle cx="50" cy="50" r="40" fill="var(--color-accent-light)"/>
                      <text x="50%" y="56%" dominantBaseline="middle" textAnchor="middle" fill="#09543F" fontWeight="bold" fontSize="24" fontFamily="var(--font-sans)">
                        {skill[0]}
                      </text>
                    </svg>
                  )}
                </div>
                <span className="tech-item-label" style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-text-main)', textAlign: 'center', display: 'block' }}>
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
