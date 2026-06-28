import React, { useState, useEffect } from 'react';

export default function InteractiveBlueprint() {
  const [activeTab, setActiveTab] = useState('ai');
  const [simulationStep, setSimulationStep] = useState(-1);
  const [isSimulating, setIsSimulating] = useState(false);

  const pipelines = {
    ai: {
      title: "AI Agent & Prompt Pipeline",
      subtitle: "How our custom LLM agents retrieve context and validate output dynamically.",
      steps: [
        { label: "User Prompt Input", desc: "User requests fiscal data synthesis or translation." },
        { label: "Vector Search Sync", desc: "Embeddings scan Pinecone/Postgres databases for matched context." },
        { label: "PII Guardrail Shield", desc: "Filter scripts analyze input vectors to prevent security data leaks." },
        { label: "Structured LLM Output", desc: "Gemini models formulate validated JSON objects return packets." }
      ]
    },
    cloud: {
      title: "Elastic Cloud Scaling Infrastructure",
      subtitle: "High-concurrency AWS routing designed for high traffic handling.",
      steps: [
        { label: "DNS Edge Route 53", desc: "Incoming API request reaches local server edge endpoints." },
        { label: "AWS ALB Balancer", desc: "Traffic gets load balanced across available compute nodes." },
        { label: "PgBouncer Queue Pool", desc: "Database connections get pooled to handle up to 5k queries/sec." },
        { label: "Auto-Scale Replica", desc: "Cloud nodes automatically scale up resources based on workload metrics." }
      ]
    },
    web: {
      title: "Vite & CD Edge Web Delivery",
      subtitle: "Ultra-fast Next.js/Vite compilations deployed globally.",
      steps: [
        { label: "Git Push Commit", desc: "Engineering team commits codebase updates to repository." },
        { label: "Automated Linter Build", desc: "CI/CD pipelines build assets and test code integrity." },
        { label: "Vercel CDN Edge", desc: "Assets compile and propagate to global cloud edge servers." },
        { label: "Instant Page Load", desc: "Browser downloads optimized index packages in milliseconds." }
      ]
    }
  };

  const currentPipeline = pipelines[activeTab];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(0);
  };

  useEffect(() => {
    if (!isSimulating) return;
    if (simulationStep >= currentPipeline.steps.length) {
      const timer = setTimeout(() => {
        setIsSimulating(false);
        setSimulationStep(-1);
      }, 1000);
      return () => clearTimeout(timer);
    }

    const interval = setTimeout(() => {
      setSimulationStep(prev => prev + 1);
    }, 800);

    return () => clearTimeout(interval);
  }, [simulationStep, isSimulating, activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsSimulating(false);
    setSimulationStep(-1);
  };

  return (
    <section className="about-section" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="about-grid" style={{ alignItems: 'center' }}>
        
        {/* Left column: Explanations and tab triggers */}
        <div>
          <span className="section-tag">Interactive Blueprint</span>
          <h2 className="section-title" style={{ marginTop: '12px', marginBottom: '20px' }}>
            Visualizing Our Tech Engine
          </h2>
          <p className="grey-text" style={{ fontSize: '1rem', marginBottom: '32px', lineHeight: '1.6' }}>
            We design high-performance, robust software architectures. Choose a category below to test our logic and trace how data moves through our custom system stacks.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              onClick={() => handleTabChange('ai')}
              style={{
                textAlign: 'left',
                padding: '20px',
                borderRadius: '16px',
                border: '1px solid',
                borderColor: activeTab === 'ai' ? '#09543F' : 'var(--color-border)',
                backgroundColor: activeTab === 'ai' ? 'var(--color-accent-light)' : '#FFFFFF',
                cursor: 'pointer',
                transition: 'var(--transition-normal)'
              }}
            >
              <h4 style={{ margin: 0, color: '#09543F', fontSize: '1rem' }}>
                AI Agent Orchestration
              </h4>
              <p className="grey-text" style={{ margin: '4px 0 0', fontSize: '0.85rem' }}>
                Context synthesis, security guardrails, and validation.
              </p>
            </button>

            <button
              onClick={() => handleTabChange('cloud')}
              style={{
                textAlign: 'left',
                padding: '20px',
                borderRadius: '16px',
                border: '1px solid',
                borderColor: activeTab === 'cloud' ? '#09543F' : 'var(--color-border)',
                backgroundColor: activeTab === 'cloud' ? 'var(--color-accent-light)' : '#FFFFFF',
                cursor: 'pointer',
                transition: 'var(--transition-normal)'
              }}
            >
              <h4 style={{ margin: 0, color: '#09543F', fontSize: '1rem' }}>
                High-Concurrency Cloud Systems
              </h4>
              <p className="grey-text" style={{ margin: '4px 0 0', fontSize: '0.85rem' }}>
                ALB routing, connection pooling, and replica scaling.
              </p>
            </button>

            <button
              onClick={() => handleTabChange('web')}
              style={{
                textAlign: 'left',
                padding: '20px',
                borderRadius: '16px',
                border: '1px solid',
                borderColor: activeTab === 'web' ? '#09543F' : 'var(--color-border)',
                backgroundColor: activeTab === 'web' ? 'var(--color-accent-light)' : '#FFFFFF',
                cursor: 'pointer',
                transition: 'var(--transition-normal)'
              }}
            >
              <h4 style={{ margin: 0, color: '#09543F', fontSize: '1rem' }}>
                Fast CDN Web Delivery
              </h4>
              <p className="grey-text" style={{ margin: '4px 0 0', fontSize: '0.85rem' }}>
                Git triggers, CI/CD automated tests, and edge deployments.
              </p>
            </button>
          </div>
        </div>

        {/* Right column: The interactive flow visual console */}
        <div className="hero-planner-card glass-card" style={{ padding: '36px', minHeight: '440px', display: 'flex', flexDirection: 'column' }}>
          <div>
            <span className="blog-card-tag" style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>Simulation Console</span>
            <h3 className="process-item-title" style={{ fontSize: '1.25rem', marginTop: '4px' }}>{currentPipeline.title}</h3>
            <p className="grey-text" style={{ fontSize: '0.85rem', marginTop: '2px', lineHeight: '1.4' }}>{currentPipeline.subtitle}</p>
          </div>

          <div className="process-card-divider" style={{ margin: '16px 0' }}></div>

          {/* Staggered flow nodes representation */}
          <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
            {currentPipeline.steps.map((step, idx) => {
              const isActive = idx === simulationStep;
              const isCompleted = idx < simulationStep;
              
              return (
                <div 
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    opacity: isSimulating && !isActive && !isCompleted ? 0.35 : 1,
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div 
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      border: '2px solid',
                      borderColor: isActive || isCompleted ? '#09543F' : 'var(--color-border)',
                      backgroundColor: isCompleted ? '#09543F' : isActive ? 'var(--color-accent-light)' : '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      color: isCompleted ? '#FFFFFF' : '#09543F',
                      flexShrink: 0,
                      boxShadow: isActive ? '0 0 12px rgba(9, 84, 63, 0.4)' : 'none',
                      animation: isActive ? 'pulse 1.5s infinite' : 'none'
                    }}
                  >
                    {isCompleted ? '✓' : idx + 1}
                  </div>

                  <div>
                    <h5 
                      style={{ 
                        margin: 0, 
                        fontSize: '0.9rem', 
                        fontWeight: '700',
                        color: isActive ? '#09543F' : 'var(--color-text-main)' 
                      }}
                    >
                      {step.label}
                    </h5>
                    <p className="grey-text" style={{ margin: '2px 0 0', fontSize: '0.8rem', lineHeight: '1.4' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="process-card-divider" style={{ margin: '16px 0' }}></div>

          <button
            onClick={runSimulation}
            disabled={isSimulating}
            className="btn btn-primary"
            style={{ width: '100%', padding: '12px' }}
          >
            {isSimulating ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <svg className="spinner" width="16" height="16" viewBox="0 0 50 50" style={{ animation: 'spin 1s linear infinite' }}>
                  <circle cx="25" cy="25" r="20" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeDasharray="80" strokeDashoffset="20" />
                </svg>
                Running Simulation...
              </span>
            ) : (
              <>Run Pipeline Simulation &rarr;</>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
