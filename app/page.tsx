"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const title =
    typeof process !== "undefined" ? process.env.NEXT_PUBLIC_TITLE : undefined;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="4" y="4" width="24" height="24" rx="6" fill="#2563EB" />
              <path d="M10 16L14 20L22 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>CloudDeploy</span>
          </div>
          <div className="nav-links">
            <a href="#">Dashboard</a>
            <a href="#">Deployments</a>
            <a href="#">Settings</a>
            <button className="btn-outline">Documentation</button>
          </div>
        </div>
      </nav>

      <main className="main-content">
        <div className="hero-section">
          <div className="hero-badge">
            <span className="status-dot" />
            Système opérationnel
          </div>
          <h1>Déploiement réussi</h1>
          <p className="hero-subtitle">
            Votre application est maintenant disponible sur Google Cloud Run
          </p>
          <div className="hero-actions">
            <button className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Accéder à l'application
            </button>
            <button className="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 4V20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 12L12 16L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Voir les logs
            </button>
          </div>
        </div>

        <div className="stats-grid">
          <div className={`stat-card ${isLoaded ? "fade-in" : ""}`}>
            <div className="stat-icon blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="9" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 9V7C8 5.89543 8.89543 5 10 5H14C15.1046 5 16 5.89543 16 7V9" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="stat-content">
              <span className="stat-label">Temps de déploiement</span>
              <span className="stat-value">2.4s</span>
              <span className="stat-change positive">-12% plus rapide</span>
            </div>
          </div>

          <div className={`stat-card ${isLoaded ? "fade-in" : ""}`} style={{ animationDelay: "0.1s" }}>
            <div className="stat-icon green">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 12L11 15L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="stat-content">
              <span className="stat-label">Statut</span>
              <span className="stat-value success">Actif</span>
              <span className="stat-change">100% uptime</span>
            </div>
          </div>

          <div className={`stat-card ${isLoaded ? "fade-in" : ""}`} style={{ animationDelay: "0.2s" }}>
            <div className="stat-icon purple">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="stat-content">
              <span className="stat-label">Version</span>
              <span className="stat-value">v2.4.1</span>
              <span className="stat-change">Dernière version</span>
            </div>
          </div>

          <div className={`stat-card ${isLoaded ? "fade-in" : ""}`} style={{ animationDelay: "0.3s" }}>
            <div className="stat-icon orange">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="stat-content">
              <span className="stat-label">Runtime</span>
              <span className="stat-value">{title || "—"}</span>
              <span className="stat-change">Node.js 20</span>
            </div>
          </div>
        </div>

        <div className="deployment-details">
          <div className="details-header">
            <h2>Détails du déploiement</h2>
            <span className="deployment-id">#DEP-2026-0715</span>
          </div>
          
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Plateforme</span>
              <span className="detail-value">Google Cloud Run</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Région</span>
              <span className="detail-value">europe-west1</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">CI/CD</span>
              <span className="detail-value">GitHub Actions</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Déployé par</span>
              <span className="detail-value">westfield-team</span>
            </div>
          </div>
        </div>

        <div className="pipeline-section">
          <h3>Pipeline de déploiement</h3>
          <div className="pipeline-steps">
            {[
              { name: "Build", status: "done", time: "1.2s" },
              { name: "Test", status: "done", time: "3.8s" },
              { name: "Deploy", status: "active", time: "2.4s" },
              { name: "Verify", status: "pending", time: "..." }
            ].map((step, i) => (
              <div key={step.name} className={`pipeline-step ${step.status}`}>
                <div className="step-indicator">
                  {step.status === "done" && (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#10B981"/>
                      <path d="M8 12L11 15L16 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  )}
                  {step.status === "active" && (
                    <div className="spinner" />
                  )}
                  {step.status === "pending" && (
                    <div className="pending-dot" />
                  )}
                </div>
                <div className="step-content">
                  <span className="step-name">{step.name}</span>
                  <span className="step-time">{step.time}</span>
                </div>
                {i < 3 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </div>

        <div className="quick-actions">
          <button className="action-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 4V16M12 16L8 12M12 16L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4 16L4 20H20V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Redéployer
          </button>
          <button className="action-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Historique
          </button>
          <button className="action-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            Configuration
          </button>
        </div>
      </main>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background: #F8FAFC;
          color: #0A0E1A;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <style jsx>{`
        .app {
          min-height: 100vh;
          background: linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%);
        }

        .navbar {
          background: white;
          border-bottom: 1px solid #E2E8F0;
          padding: 0 2rem;
          height: 72px;
          display: flex;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(8px);
        }

        .nav-container {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 600;
          font-size: 1.2rem;
          color: #1E293B;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links a {
          color: #64748B;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: #2563EB;
        }

        .btn-outline {
          background: transparent;
          border: 1px solid #E2E8F0;
          padding: 0.5rem 1.25rem;
          border-radius: 8px;
          color: #64748B;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-outline:hover {
          border-color: #2563EB;
          color: #2563EB;
        }

        .main-content {
          max-width: 1280px;
          margin: 0 auto;
          padding: 3rem 2rem;
        }

        .hero-section {
          text-align: center;
          padding: 3rem 0 4rem;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.4rem 1rem;
          background: #DCFCE7;
          color: #16A34A;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 1.5rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22C55E;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        h1 {
          font-size: 3.5rem;
          font-weight: 700;
          color: #0A0E1A;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: #64748B;
          margin-bottom: 2.5rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.75rem 2rem;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }

        .btn-primary {
          background: #2563EB;
          color: white;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .btn-primary:hover {
          background: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }

        .btn-secondary {
          background: white;
          color: #1E293B;
          border: 1px solid #E2E8F0;
        }

        .btn-secondary:hover {
          background: #F8FAFC;
          border-color: #CBD5E1;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          gap: 1rem;
          opacity: 0;
        }

        .stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stat-icon.blue { background: #DBEAFE; color: #2563EB; }
        .stat-icon.green { background: #DCFCE7; color: #16A34A; }
        .stat-icon.purple { background: #F3E8FF; color: #9333EA; }
        .stat-icon.orange { background: #FEF3C7; color: #D97706; }

        .stat-content {
          flex: 1;
        }

        .stat-label {
          display: block;
          font-size: 0.8rem;
          color: #94A3B8;
          margin-bottom: 2px;
        }

        .stat-value {
          font-size: 1.4rem;
          font-weight: 600;
          color: #0A0E1A;
        }

        .stat-value.success {
          color: #16A34A;
        }

        .stat-change {
          font-size: 0.75rem;
          color: #94A3B8;
          display: block;
          margin-top: 2px;
        }

        .stat-change.positive {
          color: #16A34A;
        }

        .deployment-details {
          background: white;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
          padding: 2rem;
          margin-bottom: 3rem;
        }

        .details-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #F1F5F9;
        }

        .details-header h2 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #0A0E1A;
        }

        .deployment-id {
          font-family: 'Courier New', monospace;
          font-size: 0.85rem;
          color: #94A3B8;
          background: #F8FAFC;
          padding: 0.3rem 0.8rem;
          border-radius: 6px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .detail-label {
          font-size: 0.8rem;
          color: #94A3B8;
          font-weight: 500;
        }

        .detail-value {
          font-size: 1rem;
          font-weight: 500;
          color: #0A0E1A;
        }

        .pipeline-section {
          background: white;
          border-radius: 12px;
          border: 1px solid #E2E8F0;
          padding: 2rem;
          margin-bottom: 3rem;
        }

        .pipeline-section h3 {
          font-size: 1rem;
          font-weight: 600;
          color: #0A0E1A;
          margin-bottom: 1.5rem;
        }

        .pipeline-steps {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          position: relative;
        }

        .pipeline-step {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          position: relative;
        }

        .step-indicator {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spinner {
          width: 24px;
          height: 24px;
          border: 3px solid #DBEAFE;
          border-top-color: #2563EB;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        .pending-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #E2E8F0;
        }

        .step-content {
          display: flex;
          flex-direction: column;
        }

        .step-name {
          font-weight: 500;
          font-size: 0.95rem;
          color: #0A0E1A;
        }

        .step-time {
          font-size: 0.8rem;
          color: #94A3B8;
        }

        .step-connector {
          flex: 1;
          height: 2px;
          background: #E2E8F0;
          margin: 0 1rem;
          align-self: center;
        }

        .pipeline-step.done .step-name { color: #16A34A; }
        .pipeline-step.active .step-name { color: #2563EB; }

        .quick-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0.7rem 1.5rem;
          background: white;
          border: 1px solid #E2E8F0;
          border-radius: 8px;
          color: #1E293B;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .action-btn:hover {
          border-color: #2563EB;
          color: #2563EB;
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .details-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 0 1rem;
          }
          .nav-links {
            display: none;
          }
          h1 {
            font-size: 2.5rem;
          }
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .details-grid {
            grid-template-columns: 1fr;
          }
          .pipeline-steps {
            flex-direction: column;
            gap: 1rem;
          }
          .step-connector {
            display: none;
          }
          .main-content {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </div>
  );
}