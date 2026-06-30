import React, { useState } from 'react';
import { useCollection } from '../hooks/useCollection';

const DEFAULT_POSTS = [
  {
    id: 1,
    category: "ai",
    categoryLabel: "AI & ML",
    title: "The Future of Generative AI in Enterprise Workflows",
    excerpt: "Explore how generative models are transforming coding, data reporting, customer operations, and system logic integrations across enterprise layers.",
    date: "June 25, 2026",
    readTime: "5 min read",
    authorName: "Dr. Anya S.",
    authorInitials: "AS",
    body: "Generative AI is shifting from an exploratory toy to a core operational engine. Companies are embedding large language models (LLMs) directly into database triggers, automated API routers, and front-end interface builders. The key to successful integration lies in structured outputs and guardrails. Tools like LangChain and custom validation schemas allow systems to generate SQL, format JSON APIs, and write code queries reliably. In this post, we discuss the core patterns for building resilient, agentic workflows that minimize hallucination and scale predictably."
  },
  {
    id: 2,
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    title: "Migrating to Serverless: AWS Best Practices",
    excerpt: "A comprehensive guide to transitioning from legacy monolithic virtual machines to serverless architectures using Lambda, API Gateway, and DynamoDB.",
    date: "June 18, 2026",
    readTime: "8 min read",
    authorName: "Vikram R.",
    authorInitials: "VR",
    body: "Monolith architectures are expensive and hard to scale. Serverless environments scale automatically with demand, charging you only for the exact compute milliseconds consumed. However, serverless migration requires a shift in engineering philosophy. Cold starts must be minimized, APIs should be stateless, and database connection pools must be managed with proxies. In this guide, we walk through constructing a secure CI/CD pipeline using GitHub Actions and Terraform to deploy serverless apps across multi-region configurations."
  },
  {
    id: 3,
    category: "software",
    categoryLabel: "Software",
    title: "Why UI/UX Can Make or Break Your SaaS Product",
    excerpt: "Discover the critical relationship between interface design, user onboarding retention, clear dashboards, and SaaS customer conversion metrics.",
    date: "June 10, 2026",
    readTime: "4 min read",
    authorName: "Sarah K.",
    authorInitials: "SK",
    body: "A product is only as good as the user's ability to use it. No matter how advanced your AI models are or how fast your APIs respond, poor user onboarding and cluttered layouts will drive users away. Premium SaaS products leverage micro-interactions, responsive dashboard visualizations, and clean vertical grids to reduce cognitive load. We analyze three case studies of products that increased user retention by over 40% simply by simplifying their dashboard layouts and optimizing form input auto-fills."
  },
  {
    id: 4,
    category: "software",
    categoryLabel: "Software",
    title: "Building Scalable APIs with Node.js and PostgreSQL",
    excerpt: "How to design database indexes, structure connection pooling, and format response caching to build secure APIs supporting thousands of requests.",
    date: "May 28, 2026",
    readTime: "6 min read",
    authorName: "Dr. Anya S.",
    authorInitials: "AS",
    body: "High-traffic applications require responsive database backends. Node.js is excellent for asynchronous IO, but it can easily bottleneck if PostgreSQL queries run unindexed or if connection pools dry up. We outline how to utilize pg-pool effectively, write optimized indexing strategies (like B-Tree and GIN indexes), and leverage Redis as an in-memory query cache. Implementing these strategies can drop API response latencies from 500ms down to less than 20ms."
  },
  {
    id: 5,
    category: "ai",
    categoryLabel: "AI & ML",
    title: "Unlocking NLP: Building Chatbots that Understand Context",
    excerpt: "Move beyond keyword matching to design context-aware conversation agents leveraging retrieval-augmented generation and vector semantic caches.",
    date: "June 05, 2026",
    readTime: "5 min read",
    authorName: "Dr. Anya S.",
    authorInitials: "AS",
    body: "Traditional rule-based chatbots fail when users deviate from fixed paths. Context-aware NLP agents leverage vector databases (like pgvector or Pinecone) to perform semantic search across product documentation or historical tickets, returning highly accurate context to LLM prompts. By pairing semantically retrieved vectors with structured prompts, we construct chat systems that handle colloquial phrasing, retain multi-turn conversational history, and gracefully transition to live human operators when required."
  },
  {
    id: 6,
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    title: "Mastering Docker & Kubernetes for Zero-Downtime Releases",
    excerpt: "How to containerize applications, configure rolling update strategies, and set up load balancing checks inside Kubernetes for zero-downtime launches.",
    date: "May 15, 2026",
    readTime: "7 min read",
    authorName: "Vikram R.",
    authorInitials: "VR",
    body: "Deploying changes manually often introduces configuration drift and server downtime. Containerizing applications with Docker guarantees they run identically in local, staging, and production environments. When orchestrating these containers with Kubernetes, we write rolling update deployment configurations that launch new pod instances, run health checkups, redirect incoming load balance traffic, and decommission older pods automatically. This setup guarantees zero-downtime, continuous releases for your users."
  },
  {
    id: 7,
    category: "software",
    categoryLabel: "Software",
    title: "The Checklist for Launching Your SaaS MVP",
    excerpt: "A structured engineering guide outlining security audits, rate-limiting configurations, logging setup, and stripe keys testing for your launch.",
    date: "April 28, 2026",
    readTime: "4 min read",
    authorName: "Sarah K.",
    authorInitials: "SK",
    body: "Launching a Minimum Viable Product (MVP) is exciting, but skipping crucial engineering checks can lead to system crashes or billing exploits. Before exposing your SaaS API, ensure you configure rate-limiting headers to prevent spam, set up log monitoring alerts (using Winston or Sentry) to trace errors, audit CORS configurations to allow only trusted origins, and verify subscription webhooks are secure. We provide a downloadable launch checklist mapping out these critical steps."
  },
  {
    id: 8,
    category: "cloud",
    categoryLabel: "Cloud & DevOps",
    title: "Securing Infrastructure: Prepping for SOC2 Compliance",
    excerpt: "A DevOps playbook to audit database permissions, encrypt network connections, and configure GitHub actions roles to pass SOC2 Type II compliance.",
    date: "April 12, 2026",
    readTime: "6 min read",
    authorName: "Vikram R.",
    authorInitials: "VR",
    body: "SOC2 Type II compliance is a requirement for signing enterprise SaaS agreements. Preparing your infrastructure requires documenting database access policies, enforcing SSL encryption across all REST payloads, setting up CloudTrail audit logs, and configuring OpenID Connect (OIDC) roles inside GitHub Actions to avoid storing long-lived cloud credentials. We detail how to implement these automated security configurations using Terraform scripts to pass your security audit on the first try."
  }
];

const renderBlogIcon = (category) => {
  const normCat = category || 'software';
  if (normCat === 'ai') {
    return (
      <svg viewBox="0 0 100 100" width="80" height="80">
        <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
        <path d="M30 50L45 65L70 35" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="50" cy="50" r="12" fill="none" stroke="#E6F2ED" strokeWidth="2"/>
      </svg>
    );
  }
  if (normCat === 'cloud') {
    return (
      <svg viewBox="0 0 100 100" width="80" height="80">
        <rect x="25" y="25" width="50" height="50" rx="8" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
        <path d="M35 50h30M50 35v30" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 100 100" width="80" height="80">
      <circle cx="50" cy="50" r="30" fill="none" stroke="#FFFFFF" strokeWidth="2"/>
      <path d="M50 20v60M20 50h60" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
    </svg>
  );
};

export default function Blog() {
  const [activeTab, setActiveTab] = useState('all');
  const [readingPost, setReadingPost] = useState(null);
  const { data: posts } = useCollection("blogs", DEFAULT_POSTS);

  React.useEffect(() => {
    document.title = "Articles & Blogs | SNAB Innovations";
  }, []);

  const filteredPosts = activeTab === 'all' 
    ? posts 
    : posts.filter(post => post.category === activeTab);

  return (
    <section className="blog-section">
      <div className="section-title-wrapper">
        <span className="section-tag">Insights & Blog</span>
        <h2 className="section-title">Latest Technology Trends and Product Guides</h2>
      </div>

      {/* Tabs Selector */}
      <div className="blog-tabs-filter">
        <button 
          className={`tech-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Articles
        </button>
        <button 
          className={`tech-tab-btn ${activeTab === 'ai' ? 'active' : ''}`}
          onClick={() => setActiveTab('ai')}
        >
          AI & Machine Learning
        </button>
        <button 
          className={`tech-tab-btn ${activeTab === 'software' ? 'active' : ''}`}
          onClick={() => setActiveTab('software')}
        >
          Software Development
        </button>
        <button 
          className={`tech-tab-btn ${activeTab === 'cloud' ? 'active' : ''}`}
          onClick={() => setActiveTab('cloud')}
        >
          Cloud & DevOps
        </button>
      </div>

      {/* Grid List */}
      <div className="blog-grid">
        {filteredPosts.map((post, idx) => (
          <div className="blog-card" key={post.id || idx}>
            <div className="blog-card-cover">
              {renderBlogIcon(post.category)}
            </div>
            
            <div className="blog-card-content">
              <div>
                <div className="blog-card-meta">
                  <span className="blog-card-tag">{post.categoryLabel || post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 
                  className="blog-card-title"
                  onClick={() => setReadingPost(post)}
                >
                  {post.title}
                </h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
              </div>

              <div className="blog-card-footer">
                <div className="blog-author">
                  <div className="blog-author-avatar">{post.authorInitials || "SN"}</div>
                  <span className="blog-author-name">{post.authorName || "SNAB Staff"}</span>
                </div>
                <button 
                  className="blog-read-link"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                  onClick={() => setReadingPost(post)}
                >
                  Read More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Article Modal */}
      {readingPost && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(18, 27, 24, 0.6)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '20px'
          }}
          onClick={() => setReadingPost(null)}
        >
          <div 
            className="glass-card"
            style={{
              backgroundColor: '#FFFFFF',
              width: '100%',
              maxWidth: '700px',
              borderRadius: '24px',
              padding: '40px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
              position: 'relative',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: '#F3F4F6',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                color: '#4B5563'
              }}
              onClick={() => setReadingPost(null)}
            >
              ✕
            </button>
            <span className="blog-card-tag" style={{ display: 'block', marginBottom: '12px', fontWeight: 'bold' }}>
              {readingPost.categoryLabel || readingPost.category}
            </span>
            <h2 className="timeline-title" style={{ fontSize: '1.75rem', marginBottom: '16px', lineHeight: '1.3' }}>
              {readingPost.title}
            </h2>
            <div className="blog-card-meta" style={{ marginBottom: '24px' }}>
              <span>Published: {readingPost.date}</span>
              <span>{readingPost.readTime}</span>
            </div>
            
            <p className="grey-text" style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '24px' }}>
              {readingPost.body}
            </p>
            
            <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="blog-author-avatar" style={{ width: '40px', height: '40px', fontSize: '0.9rem' }}>
                {readingPost.authorInitials || "SN"}
              </div>
              <div>
                <strong style={{ display: 'block' }}>{readingPost.authorName || "SNAB Staff"}</strong>
                <span className="grey-text" style={{ fontSize: '0.8rem' }}>Technology Strategist @ SNAB</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
