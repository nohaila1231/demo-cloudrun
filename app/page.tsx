"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("latest");
  const title =
    typeof process !== "undefined" ? process.env.NEXT_PUBLIC_TITLE : undefined;

  const posts = [
    {
      id: 1,
      category: "Déploiement",
      title: "Cloud Run atteint 99.99% de disponibilité",
      excerpt: "Google Cloud Run a atteint un nouveau record de disponibilité ce trimestre, confirmant sa position de leader dans le serverless computing.",
      author: "Équipe technique",
      date: "15 Juillet 2026",
      readTime: "4 min",
      status: "live"
    },
    {
      id: 2,
      category: "Performance",
      title: "Optimisation des temps de réponse sous 100ms",
      excerpt: "Grâce à l'utilisation de CDN Edge et de la mise en cache intelligente, les temps de réponse ont été réduits de 40%.",
      author: "Marie Dubois",
      date: "14 Juillet 2026",
      readTime: "6 min",
      status: "draft"
    },
    {
      id: 3,
      category: "Sécurité",
      title: "Nouvelle politique de sécurité Zero Trust",
      excerpt: "Mise en place d'une architecture Zero Trust avec authentification multi-facteurs pour tous les déploiements.",
      author: "Thomas Martin",
      date: "13 Juillet 2026",
      readTime: "8 min",
      status: "review"
    }
  ];

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">◆</span>
            <span className="logo-text">DevOps<span className="logo-highlight">HUB</span></span>
          </div>
          <nav className="nav">
            <a href="#" className="nav-link active">Accueil</a>
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Documentation</a>
            <a href="#" className="nav-link">À propos</a>
            <button className="nav-btn">Connexion</button>
          </nav>
          <button className="mobile-menu">☰</button>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="hero-background">
            <div className="hero-pattern" />
          </div>
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge-dot" />
              EN DIRECT • {new Date().toLocaleTimeString()}
            </div>
            <h1>
              Plateforme de déploiement
              <br />
              <span className="highlight">Next-Gen</span>
            </h1>
            <p className="hero-text">
              Suivez l'actualité de vos déploiements Cloud Run en temps réel
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">1,284</span>
                <span className="stat-label">Déploiements</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">99.9%</span>
                <span className="stat-label">Disponibilité</span>
              </div>
              <div className="hero-stat">
                <span className="stat-number">2.4s</span>
                <span className="stat-label">Temps moyen</span>
              </div>
            </div>
            <div className="hero-search">
              <input type="text" placeholder="Rechercher un déploiement..." className="search-input" />
              <button className="search-btn">Rechercher</button>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="content-header">
            <div className="tabs">
              <button 
                className={`tab ${activeTab === "latest" ? "active" : ""}`}
                onClick={() => setActiveTab("latest")}
              >
                Derniers déploiements
              </button>
              <button 
                className={`tab ${activeTab === "popular" ? "active" : ""}`}
                onClick={() => setActiveTab("popular")}
              >
                Populaires
              </button>
              <button 
                className={`tab ${activeTab === "archives" ? "active" : ""}`}
                onClick={() => setActiveTab("archives")}
              >
                Archives
              </button>
            </div>
            <div className="content-actions">
              <span className="posts-count">{posts.length} articles</span>
              <button className="new-post-btn">+ Nouveau</button>
            </div>
          </div>

          <div className="posts-grid">
            {posts.map((post, index) => (
              <article key={post.id} className={`post-card ${post.status}`}>
                <div className="post-status">
                  <span className={`status-badge ${post.status}`}>
                    {post.status === "live" && "● En direct"}
                    {post.status === "draft" && "○ Brouillon"}
                    {post.status === "review" && "◉ En révision"}
                  </span>
                  <span className="post-category">{post.category}</span>
                </div>
                <h2 className="post-title">{post.title}</h2>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-meta">
                  <div className="post-author">
                    <div className="author-avatar">
                      {post.author.charAt(0)}
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <div className="post-info">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="post-actions">
                  <button className="post-btn primary">Lire la suite</button>
                  <button className="post-btn secondary">
                    {title || "Déployer"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="features">
          <div className="features-header">
            <span className="features-badge">FONCTIONNALITÉS</span>
            <h2>Pourquoi choisir notre plateforme</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Déploiement rapide</h3>
              <p>Déployez vos applications en quelques secondes avec une infrastructure optimisée</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Sécurité renforcée</h3>
              <p>Chiffrement de bout en bout et authentification multi-facteurs intégrée</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytique en temps réel</h3>
              <p>Suivez vos métriques de performance et d'utilisation en direct</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Intégration continue</h3>
              <p>Pipeline CI/CD automatisé avec GitHub Actions et Cloud Run</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>DevOpsHUB</h4>
            <p>Plateforme de déploiement moderne pour les équipes cloud</p>
          </div>
          <div className="footer-section">
            <h4>Liens rapides</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Technologies</h4>
            <ul>
              <li>Google Cloud Run</li>
              <li>Next.js</li>
              <li>GitHub Actions</li>
              <li>Node.js {title || "20"}</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li>📍 Paris, France</li>
              <li>📧 contact@devopshub.io</li>
              <li>🐦 @devopshub</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 DevOpsHUB. Tous droits réservés.</span>
          <div className="footer-links">
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #FFFFFF;
          color: #1A1A1A;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>

      <style jsx>{`
        .app {
          min-height: 100vh;
          background: #FFFFFF;
        }

        .header {
          background: #1A1A1A;
          border-bottom: 3px solid #DC2626;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 72px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-icon {
          font-size: 1.8rem;
          color: #DC2626;
        }

        .logo-text {
          font-size: 1.4rem;
          font-weight: 700;
          color: #FFFFFF;
          letter-spacing: -0.5px;
        }

        .logo-highlight {
          color: #DC2626;
          margin-left: 2px;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          color: #A3A3A3;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s;
          padding: 0.5rem 0;
          border-bottom: 2px solid transparent;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #FFFFFF;
          border-bottom-color: #DC2626;
        }

        .nav-btn {
          background: #DC2626;
          color: #FFFFFF;
          border: none;
          padding: 0.5rem 1.5rem;
          border-radius: 6px;
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s;
        }

        .nav-btn:hover {
          background: #B91C1C;
        }

        .mobile-menu {
          display: none;
          background: none;
          border: none;
          color: #FFFFFF;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .hero {
          position: relative;
          background: linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%);
          padding: 4rem 2rem;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          opacity: 0.05;
        }

        .hero-pattern {
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 50%, #DC2626 1px, transparent 1px),
            radial-gradient(circle at 80% 50%, #DC2626 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .hero-content {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          text-align: center;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.4rem 1.2rem;
          background: rgba(220, 38, 38, 0.15);
          border: 1px solid rgba(220, 38, 38, 0.3);
          border-radius: 999px;
          color: #DC2626;
          font-size: 0.8rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #DC2626;
          animation: pulse 2s ease-in-out infinite;
        }

        h1 {
          font-size: 4rem;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          letter-spacing: -2px;
        }

        .highlight {
          background: linear-gradient(135deg, #DC2626 0%, #F87171 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-text {
          font-size: 1.2rem;
          color: #A3A3A3;
          margin-bottom: 3rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          margin-bottom: 3rem;
        }

        .hero-stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: #FFFFFF;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #737373;
        }

        .hero-search {
          display: flex;
          gap: 0.5rem;
          max-width: 500px;
          margin: 0 auto;
        }

        .search-input {
          flex: 1;
          padding: 0.75rem 1.2rem;
          border: 2px solid #404040;
          border-radius: 8px;
          background: #262626;
          color: #FFFFFF;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .search-input:focus {
          border-color: #DC2626;
        }

        .search-input::placeholder {
          color: #737373;
        }

        .search-btn {
          padding: 0.75rem 2rem;
          background: #DC2626;
          color: #FFFFFF;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .search-btn:hover {
          background: #B91C1C;
        }

        .content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 3rem 2rem;
        }

        .content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #F3F4F6;
        }

        .tabs {
          display: flex;
          gap: 0.5rem;
        }

        .tab {
          padding: 0.5rem 1.2rem;
          background: none;
          border: none;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 500;
          color: #737373;
          cursor: pointer;
          transition: all 0.2s;
        }

        .tab:hover {
          background: #F3F4F6;
          color: #1A1A1A;
        }

        .tab.active {
          background: #1A1A1A;
          color: #FFFFFF;
        }

        .content-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .posts-count {
          color: #737373;
          font-size: 0.9rem;
        }

        .new-post-btn {
          padding: 0.5rem 1.2rem;
          background: #DC2626;
          color: #FFFFFF;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s;
        }

        .new-post-btn:hover {
          background: #B91C1C;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .post-card {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s;
          animation: fadeIn 0.6s ease-out forwards;
        }

        .post-card:hover {
          border-color: #DC2626;
          box-shadow: 0 12px 40px rgba(220, 38, 38, 0.1);
          transform: translateY(-4px);
        }

        .post-card.draft {
          opacity: 0.6;
        }

        .post-card.draft:hover {
          opacity: 0.8;
        }

        .post-card.review {
          border-left: 4px solid #F59E0B;
        }

        .post-status {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .status-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
        }

        .status-badge.live {
          color: #16A34A;
          background: #DCFCE7;
        }

        .status-badge.draft {
          color: #737373;
          background: #F3F4F6;
        }

        .status-badge.review {
          color: #D97706;
          background: #FEF3C7;
        }

        .post-category {
          font-size: 0.75rem;
          color: #DC2626;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .post-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1A1A1A;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .post-excerpt {
          color: #6B7280;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .post-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid #F3F4F6;
          margin-bottom: 1rem;
        }

        .post-author {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .author-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #DC2626;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .post-info {
          display: flex;
          gap: 0.5rem;
          color: #9CA3AF;
          font-size: 0.85rem;
        }

        .post-actions {
          display: flex;
          gap: 0.5rem;
        }

        .post-btn {
          flex: 1;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .post-btn.primary {
          background: #1A1A1A;
          color: #FFFFFF;
          border: none;
        }

        .post-btn.primary:hover {
          background: #404040;
        }

        .post-btn.secondary {
          background: transparent;
          color: #DC2626;
          border: 1px solid #DC2626;
        }

        .post-btn.secondary:hover {
          background: #FEF2F2;
        }

        .features {
          background: #FAFAFA;
          padding: 4rem 2rem;
          border-top: 1px solid #E5E7EB;
        }

        .features-header {
          max-width: 1280px;
          margin: 0 auto 3rem;
          text-align: center;
        }

        .features-badge {
          display: inline-block;
          padding: 0.3rem 1rem;
          background: #FEF2F2;
          color: #DC2626;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 2px;
          border-radius: 999px;
          margin-bottom: 1rem;
        }

        .features-header h2 {
          font-size: 2.5rem;
          font-weight: 800;
          color: #1A1A1A;
        }

        .features-grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .feature-card {
          background: #FFFFFF;
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid #E5E7EB;
          transition: all 0.3s;
        }

        .feature-card:hover {
          border-color: #DC2626;
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(220, 38, 38, 0.08);
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1A1A1A;
          margin-bottom: 0.5rem;
        }

        .feature-card p {
          color: #6B7280;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .footer {
          background: #1A1A1A;
          color: #A3A3A3;
          padding: 3rem 2rem 1.5rem;
        }

        .footer-content {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .footer-section h4 {
          color: #FFFFFF;
          font-size: 1rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .footer-section p {
          line-height: 1.6;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section ul li {
          margin-bottom: 0.5rem;
        }

        .footer-section ul li a {
          color: #A3A3A3;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-section ul li a:hover {
          color: #DC2626;
        }

        .footer-bottom {
          max-width: 1280px;
          margin: 0 auto;
          padding-top: 1.5rem;
          border-top: 1px solid #404040;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-links a {
          color: #A3A3A3;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: #DC2626;
        }

        @media (max-width: 1024px) {
          .posts-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .footer-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .nav {
            display: none;
          }
          .mobile-menu {
            display: block;
          }
          h1 {
            font-size: 2.5rem;
          }
          .hero-stats {
            gap: 2rem;
            flex-wrap: wrap;
          }
          .hero-search {
            flex-direction: column;
          }
          .posts-grid {
            grid-template-columns: 1fr;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
          .footer-content {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
          .content-header {
            flex-direction: column;
            gap: 1rem;
            align-items: stretch;
          }
          .tabs {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </div>
  );
}