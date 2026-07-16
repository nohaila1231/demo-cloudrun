"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);
  
  const schoolName = typeof process !== "undefined" ? process.env.NEXT_PUBLIC_SCHOOL_NAME : "Lycée International";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const news = [
    {
      id: 1,
      category: "Événement",
      title: "Journée Portes Ouvertes 2026",
      excerpt: "Venez découvrir notre établissement le samedi 25 mars 2026 de 9h à 17h. Rencontrez nos enseignants et visitez nos locaux.",
      date: "15 Mars 2026",
      author: "Mme Dupont",
      image: "🏫"
    },
    {
      id: 2,
      category: "Résultat",
      title: "100% de réussite au Bac 2025",
      excerpt: "Félicitations à tous nos élèves pour leur excellence ! 15 mentions Très Bien et 25 mentions Bien.",
      date: "12 Mars 2026",
      author: "M. Martin",
      image: "🎓"
    },
    {
      id: 3,
      category: "Projet",
      title: "Lancement du Club Robotique",
      excerpt: "Un nouveau club de robotique voit le jour. Inscriptions ouvertes à tous les élèves à partir de la 4ème.",
      date: "10 Mars 2026",
      author: "Mme Lambert",
      image: "🤖"
    }
  ];

  const events = [
    { time: "09:00", title: "Cours de Mathématiques", room: "Salle 201" },
    { time: "10:30", title: "Atelier Sciences", room: "Labo 3" },
    { time: "14:00", title: "Réunion Parents-Professeurs", room: "Amphithéâtre" }
  ];

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <span className="logo-icon">📚</span>
            <div>
              <span className="logo-text">{schoolName}</span>
              <span className="logo-sub">Établissement d'excellence</span>
            </div>
          </div>
          <nav className="nav">
            <a href="#" className="nav-link active">Accueil</a>
            <a href="#" className="nav-link">Notre École</a>
            <a href="#" className="nav-link">Formations</a>
            <a href="#" className="nav-link">Vie Scolaire</a>
            <a href="#" className="nav-link">Contact</a>
          </nav>
          <button className="menu-btn">☰</button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <div className={`hero-badge ${isLoaded ? "fade-in" : ""}`}>
              <span className="badge-dot" />
              Rentrée 2026 - Inscriptions ouvertes
            </div>
            <h1 className={isLoaded ? "fade-in" : ""}>
              L'excellence
              <br />
              <span className="highlight">au cœur de l'éducation</span>
            </h1>
            <p className="hero-text">
              Un environnement d'apprentissage innovant pour former les leaders de demain
            </p>
            <div className="hero-actions">
              <button className="btn-primary">📝 S'inscrire</button>
              <button className="btn-secondary">📖 En savoir plus</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Réussite au Bac</span>
              </div>
              <div className="stat">
                <span className="stat-number">1200+</span>
                <span className="stat-label">Élèves</span>
              </div>
              <div className="stat">
                <span className="stat-number">45</span>
                <span className="stat-label">Enseignants</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">🏛️</div>
          </div>
        </section>

        {/* News Section */}
        <section className="news-section">
          <div className="section-header">
            <h2>📰 Actualités</h2>
            <a href="#" className="view-all">Voir tout →</a>
          </div>
          <div className="news-grid">
            {news.map((item, index) => (
              <article 
                key={item.id} 
                className={`news-card ${isLoaded ? "fade-in" : ""}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="news-image">{item.image}</div>
                <div className="news-content">
                  <span className="news-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                  <div className="news-meta">
                    <span>👤 {item.author}</span>
                    <span>📅 {item.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Quick Info */}
        <section className="info-section">
          <div className="info-card">
            <div className="info-icon">📅</div>
            <h3>Emploi du temps</h3>
            <p>Consultez les emplois du temps de votre classe</p>
            <button className="info-btn">Voir</button>
          </div>
          <div className="info-card">
            <div className="info-icon">📊</div>
            <h3>Notes & Résultats</h3>
            <p>Accédez à vos bulletins et résultats</p>
            <button className="info-btn">Accéder</button>
          </div>
          <div className="info-card">
            <div className="info-icon">📱</div>
            <h3>Espace Parents</h3>
            <p>Suivez la scolarité de votre enfant</p>
            <button className="info-btn">Se connecter</button>
          </div>
          <div className="info-card">
            <div className="info-icon">🎯</div>
            <h3>Orientation</h3>
            <p>Conseils et accompagnement personnalisé</p>
            <button className="info-btn">En savoir plus</button>
          </div>
        </section>

        {/* Today's Events */}
        <section className="events-section">
          <h2>📌 Aujourd'hui à l'école</h2>
          <div className="events-list">
            {events.map((event, index) => (
              <div key={index} className={`event-item ${isLoaded ? "fade-in" : ""}`}>
                <div className="event-time">{event.time}</div>
                <div className="event-info">
                  <span className="event-title">{event.title}</span>
                  <span className="event-room">{event.room}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-col">
            <h4>{schoolName}</h4>
            <p>123 Rue de l'Éducation<br />75000 Paris</p>
            <p>📞 01 23 45 67 89<br />✉️ contact@ecole.fr</p>
          </div>
          <div className="footer-col">
            <h4>Liens rapides</h4>
            <ul>
              <li><a href="#">Calendrier</a></li>
              <li><a href="#">Restaurant scolaire</a></li>
              <li><a href="#">CDI</a></li>
              <li><a href="#">Association sportive</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Formations</h4>
            <ul>
              <li><a href="#">Seconde</a></li>
              <li><a href="#">Première</a></li>
              <li><a href="#">Terminale</a></li>
              <li><a href="#">BTS</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Suivez-nous</h4>
            <div className="social-links">
              <a href="#">📱</a>
              <a href="#">🐦</a>
              <a href="#">📷</a>
              <a href="#">💼</a>
            </div>
            <p className="newsletter">📧 Newsletter</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 {schoolName}. Tous droits réservés.</span>
          <div className="footer-links">
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
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
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
          background: #F8FAFC;
          color: #1E293B;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <style jsx>{`
        .app {
          min-height: 100vh;
        }

        .header {
          background: #1E293B;
          padding: 0 2rem;
          height: 72px;
          display: flex;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .header-container {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon {
          font-size: 2rem;
        }

        .logo-text {
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
          display: block;
        }

        .logo-sub {
          font-size: 0.7rem;
          color: #94A3B8;
          display: block;
        }

        .nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: #CBD5E1;
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.2s;
          padding: 0.5rem 0;
          border-bottom: 2px solid transparent;
        }

        .nav-link:hover,
        .nav-link.active {
          color: white;
          border-bottom-color: #3B82F6;
        }

        .menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
        }

        .hero {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          min-height: 500px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.4rem 1rem;
          background: #DBEAFE;
          color: #1D4ED8;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          opacity: 0;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #3B82F6;
          animation: pulse 2s ease-in-out infinite;
        }

        h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: #0F172A;
          opacity: 0;
        }

        .highlight {
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-text {
          font-size: 1.2rem;
          color: #64748B;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .btn-primary, .btn-secondary {
          padding: 0.75rem 2rem;
          border-radius: 10px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }

        .btn-primary {
          background: #3B82F6;
          color: white;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .btn-primary:hover {
          background: #2563EB;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: #F1F5F9;
          color: #1E293B;
        }

        .btn-secondary:hover {
          background: #E2E8F0;
        }

        .hero-stats {
          display: flex;
          gap: 3rem;
        }

        .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: 700;
          color: #0F172A;
        }

        .stat-label {
          font-size: 0.85rem;
          color: #64748B;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-placeholder {
          font-size: 15rem;
          line-height: 1;
          background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
          padding: 2rem;
          border-radius: 20px;
          width: 100%;
          text-align: center;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .news-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .section-header h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #0F172A;
        }

        .view-all {
          color: #3B82F6;
          text-decoration: none;
          font-weight: 500;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .news-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          transition: all 0.3s;
          opacity: 0;
        }

        .news-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.1);
        }

        .news-image {
          font-size: 4rem;
          padding: 2rem;
          text-align: center;
          background: linear-gradient(135deg, #EFF6FF, #DBEAFE);
        }

        .news-content {
          padding: 1.5rem;
        }

        .news-category {
          display: inline-block;
          padding: 0.2rem 0.8rem;
          background: #DBEAFE;
          color: #1D4ED8;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .news-content h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #0F172A;
        }

        .news-content p {
          color: #64748B;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .news-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.8rem;
          color: #94A3B8;
        }

        .info-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem 2rem 4rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .info-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid #E2E8F0;
          transition: all 0.3s;
        }

        .info-card:hover {
          border-color: #3B82F6;
          transform: translateY(-4px);
        }

        .info-icon {
          font-size: 2.5rem;
          margin-bottom: 0.75rem;
        }

        .info-card h3 {
          font-size: 1rem;
          margin-bottom: 0.5rem;
          color: #0F172A;
        }

        .info-card p {
          font-size: 0.9rem;
          color: #64748B;
          margin-bottom: 1rem;
        }

        .info-btn {
          padding: 0.5rem 1.5rem;
          background: #F1F5F9;
          border: none;
          border-radius: 6px;
          color: #1E293B;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .info-btn:hover {
          background: #3B82F6;
          color: white;
        }

        .events-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem 4rem;
        }

        .events-section h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 2rem;
        }

        .events-list {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .event-item {
          display: flex;
          padding: 1.2rem 2rem;
          border-bottom: 1px solid #F1F5F9;
          gap: 2rem;
          align-items: center;
          opacity: 0;
        }

        .event-item:last-child {
          border-bottom: none;
        }

        .event-time {
          font-weight: 700;
          color: #3B82F6;
          min-width: 80px;
        }

        .event-info {
          display: flex;
          justify-content: space-between;
          flex: 1;
          align-items: center;
        }

        .event-title {
          font-weight: 500;
          color: #0F172A;
        }

        .event-room {
          color: #94A3B8;
          font-size: 0.9rem;
        }

        .footer {
          background: #0F172A;
          color: #94A3B8;
          padding: 3rem 2rem 1.5rem;
          margin-top: 2rem;
        }

        .footer-content {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 2rem;
        }

        .footer-col h4 {
          color: white;
          margin-bottom: 1rem;
          font-size: 1rem;
        }

        .footer-col p {
          line-height: 1.8;
          font-size: 0.9rem;
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col ul li {
          margin-bottom: 0.5rem;
        }

        .footer-col ul li a {
          color: #94A3B8;
          text-decoration: none;
          transition: color 0.2s;
          font-size: 0.9rem;
        }

        .footer-col ul li a:hover {
          color: #3B82F6;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .social-links a {
          text-decoration: none;
          font-size: 1.5rem;
          color: #94A3B8;
          transition: color 0.2s;
        }

        .social-links a:hover {
          color: white;
        }

        .newsletter {
          font-size: 0.9rem;
          color: #64748B;
        }

        .footer-bottom {
          max-width: 1280px;
          margin: 0 auto;
          padding-top: 1.5rem;
          border-top: 1px solid #1E293B;
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
          color: #94A3B8;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: white;
        }

        @media (max-width: 1024px) {
          .hero {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2rem;
          }
          .hero-stats {
            justify-content: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .news-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .info-section {
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
          .menu-btn {
            display: block;
          }
          h1 {
            font-size: 2.5rem;
          }
          .news-grid {
            grid-template-columns: 1fr;
          }
          .info-section {
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
          .event-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }
          .event-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.25rem;
          }
          .hero {
            padding: 2rem 1rem;
          }
          .image-placeholder {
            font-size: 8rem;
            min-height: 200px;
          }
        }
      `}</style>
    </div>
  );
}