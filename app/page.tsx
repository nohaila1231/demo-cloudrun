"use client";
export default function Home() {
  const title =
    typeof process !== "undefined" ? process.env.NEXT_PUBLIC_TITLE : undefined;

  return (
    <main className="page">
      {/* Cercles décoratifs flottants */}
      <div className="deco-circle circle-1"></div>
      <div className="deco-circle circle-2"></div>
      <div className="deco-circle circle-3"></div>
      <div className="deco-circle circle-4"></div>
      
      {/* Formes organiques flottantes */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* Oiseaux */}
      <div className="birds">
        <span>🕊️</span>
        <span>🕊️</span>
        <span>🕊️</span>
      </div>

      {/* Contenu principal */}
      <div className="content">
        <div className="hero">
          <div className="badge">✨ ACCUEIL DOUX ✨</div>
          
          <h1>
            <span className="title-line">Les Petits</span>
            <span className="title-line">Nuages</span>
            <span className="title-emoji">☁️</span>
          </h1>

          <p className="description">
            Un lieu tout doux où les tout-petits<br />
            s&rsquo;éveillent en toute sérénité
          </p>

          <div className="cta-group">
            <button className="btn-primary">
              Visiter la crèche
              <span className="btn-arrow">→</span>
            </button>
            <button className="btn-secondary">
              📞 Nous appeler
            </button>
          </div>

          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">mois - 4 ans</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">7h30</span>
              <span className="stat-label">- 19h00</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">🌿</span>
              <span className="stat-label">{title || "Les Petits Nuages"}</span>
            </div>
          </div>
        </div>

        {/* Icônes flottantes */}
        <div className="floating-icons">
          <div className="icon-wrap" style={{ animationDelay: "0s" }}>🧸</div>
          <div className="icon-wrap" style={{ animationDelay: "1.5s" }}>🎨</div>
          <div className="icon-wrap" style={{ animationDelay: "3s" }}>🌈</div>
          <div className="icon-wrap" style={{ animationDelay: "4.5s" }}>🌸</div>
        </div>
      </div>

      {/* Footer avec le rythme de la journée */}
      <div className="day-rhythm">
        <div className="rhythm-item">
          <span className="rhythm-icon">🌅</span>
          <span className="rhythm-label">Accueil</span>
        </div>
        <div className="rhythm-dot"></div>
        <div className="rhythm-item">
          <span className="rhythm-icon">🎨</span>
          <span className="rhythm-label">Jeux</span>
        </div>
        <div className="rhythm-dot"></div>
        <div className="rhythm-item">
          <span className="rhythm-icon">🍽️</span>
          <span className="rhythm-label">Repas</span>
        </div>
        <div className="rhythm-dot"></div>
        <div className="rhythm-item">
          <span className="rhythm-icon">😴</span>
          <span className="rhythm-label">Sieste</span>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&family=Fredoka+One&display=swap");

        :root {
          --baby-pink: #fce4ec;
          --soft-pink: #f8bbd0;
          --pastel-pink: #f48fb1;
          --baby-blue: #e3f2fd;
          --soft-blue: #bbdefb;
          --pastel-blue: #90caf9;
          --cream: #fff8f0;
          --warm-white: #fffdf7;
          --text-soft: #5d4e6d;
          --text-light: #8b7a9a;
          --shadow: rgba(180, 160, 200, 0.15);
          --accent: #f06292;
          --accent-hover: #ec407a;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: var(--warm-white);
          overflow: hidden;
          height: 100vh;
          width: 100vw;
        }
      `}</style>

      <style jsx>{`
        .page {
          position: relative;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, var(--baby-pink) 0%, var(--baby-blue) 100%);
          font-family: "Quicksand", sans-serif;
          overflow: hidden;
          padding: 2rem;
        }

        /* Cercles décoratifs */
        .deco-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          pointer-events: none;
        }

        .circle-1 {
          width: 400px;
          height: 400px;
          top: -150px;
          right: -100px;
          animation: float-circle 30s ease-in-out infinite;
        }

        .circle-2 {
          width: 300px;
          height: 300px;
          bottom: -100px;
          left: -80px;
          animation: float-circle 25s ease-in-out infinite reverse;
        }

        .circle-3 {
          width: 150px;
          height: 150px;
          top: 20%;
          left: 10%;
          animation: float-circle 20s ease-in-out infinite 2s;
        }

        .circle-4 {
          width: 200px;
          height: 200px;
          bottom: 30%;
          right: 5%;
          animation: float-circle 28s ease-in-out infinite 4s;
        }

        @keyframes float-circle {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-20px, 30px) scale(0.9); }
        }

        /* Formes organiques (blobs) */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          pointer-events: none;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          top: -200px;
          left: -100px;
          background: var(--soft-pink);
          animation: blob-anim 20s ease-in-out infinite;
        }

        .blob-2 {
          width: 400px;
          height: 400px;
          bottom: -150px;
          right: -100px;
          background: var(--soft-blue);
          animation: blob-anim 25s ease-in-out infinite reverse;
        }

        .blob-3 {
          width: 200px;
          height: 200px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(255, 182, 193, 0.2);
          animation: blob-anim 15s ease-in-out infinite 3s;
        }

        @keyframes blob-anim {
          0%, 100% { border-radius: 50% 50% 50% 50%; }
          25% { border-radius: 60% 40% 70% 30%; }
          50% { border-radius: 40% 60% 30% 70%; }
          75% { border-radius: 70% 30% 60% 40%; }
        }

        /* Oiseaux */
        .birds {
          position: absolute;
          top: 10%;
          right: 15%;
          display: flex;
          gap: 2rem;
          font-size: 1.8rem;
          opacity: 0.4;
          animation: fly 15s ease-in-out infinite;
        }

        .birds span:nth-child(2) { animation-delay: 1s; }
        .birds span:nth-child(3) { animation-delay: 2s; }

        @keyframes fly {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-30px, -20px) rotate(-5deg); }
          75% { transform: translate(20px, 10px) rotate(5deg); }
        }

        /* Contenu principal */
        .content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 900px;
          height: 100%;
        }

        .hero {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 1.2rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.35);
          backdrop-filter: blur(20px);
          border-radius: 60px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 40px 80px var(--shadow);
          width: 100%;
          max-width: 800px;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 0%,
            rgba(255, 255, 255, 0.4) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .badge {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          color: var(--text-light);
          background: rgba(255, 255, 255, 0.5);
          padding: 0.5rem 1.5rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          position: relative;
          z-index: 1;
        }

        h1 {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: -0.2rem;
          position: relative;
          z-index: 1;
        }

        .title-line {
          font-family: "Fredoka One", "Quicksand", sans-serif;
          font-size: clamp(2.8rem, 8vw, 4.8rem);
          font-weight: 700;
          color: var(--text-soft);
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .title-line:first-child {
          font-size: clamp(2rem, 5vw, 3rem);
          color: var(--text-light);
          font-weight: 600;
        }

        .title-emoji {
          font-size: clamp(3rem, 7vw, 4.5rem);
          margin-top: -0.2rem;
        }

        .description {
          font-size: clamp(0.95rem, 1.4vw, 1.15rem);
          color: var(--text-light);
          font-weight: 500;
          line-height: 1.6;
          position: relative;
          z-index: 1;
          max-width: 500px;
        }

        .description br {
          display: none;
        }

        .cta-group {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .btn-primary {
          background: var(--accent);
          color: white;
          border: none;
          padding: 0.9rem 2.2rem;
          border-radius: 100px;
          font-family: "Quicksand", sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 8px 25px rgba(240, 98, 146, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 35px rgba(240, 98, 146, 0.4);
          background: var(--accent-hover);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.6);
          color: var(--text-soft);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 0.9rem 2.2rem;
          border-radius: 100px;
          font-family: "Quicksand", sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.8);
          transform: translateY(-2px);
        }

        .stats {
          display: flex;
          gap: 1.5rem;
          padding-top: 0.8rem;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
          justify-content: center;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.2rem;
        }

        .stat-number {
          font-family: "Fredoka One", "Quicksand", sans-serif;
          font-size: 1.5rem;
          color: var(--text-soft);
        }

        .stat-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-divider {
          width: 1px;
          background: rgba(180, 160, 200, 0.2);
        }

        /* Icônes flottantes */
        .floating-icons {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .icon-wrap {
          position: absolute;
          font-size: 2.5rem;
          animation: float-icon 8s ease-in-out infinite;
          opacity: 0.6;
        }

        .icon-wrap:nth-child(1) { top: 10%; left: 5%; }
        .icon-wrap:nth-child(2) { bottom: 15%; right: 8%; }
        .icon-wrap:nth-child(3) { top: 20%; right: 15%; }
        .icon-wrap:nth-child(4) { bottom: 25%; left: 10%; }

        @keyframes float-icon {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(20px, -20px) rotate(10deg) scale(1.1); }
          75% { transform: translate(-10px, 15px) rotate(-10deg) scale(0.9); }
        }

        /* Rythme de la journée */
        .day-rhythm {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.8rem 1.5rem;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(12px);
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 3;
        }

        .rhythm-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.3rem 0.8rem;
          border-radius: 100px;
          transition: all 0.3s ease;
        }

        .rhythm-item:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        .rhythm-icon {
          font-size: 1.1rem;
        }

        .rhythm-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--text-soft);
          letter-spacing: 0.05em;
        }

        .rhythm-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(180, 160, 200, 0.3);
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page {
            padding: 1rem;
          }

          .hero {
            padding: 1.5rem;
            border-radius: 40px;
          }

          .title-line:first-child {
            font-size: 1.8rem;
          }
          .title-line:last-child {
            font-size: 2.8rem;
          }
          .title-emoji {
            font-size: 2.5rem;
          }

          .description {
            font-size: 0.9rem;
          }
          .description br {
            display: inline;
          }

          .cta-group {
            flex-direction: column;
            width: 100%;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .stats {
            gap: 0.8rem;
            padding-top: 0.5rem;
          }

          .stat-number {
            font-size: 1.2rem;
          }

          .day-rhythm {
            bottom: 1rem;
            padding: 0.5rem 0.8rem;
            gap: 0.2rem;
            flex-wrap: wrap;
            justify-content: center;
            border-radius: 50px;
            max-width: 95%;
          }

          .rhythm-item {
            padding: 0.2rem 0.5rem;
          }

          .rhythm-label {
            font-size: 0.6rem;
          }

          .rhythm-dot {
            display: none;
          }

          .icon-wrap {
            font-size: 1.8rem;
          }

          .birds {
            font-size: 1.2rem;
            right: 5%;
            gap: 1rem;
          }

          .floating-icons {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero {
            border-radius: 30px;
            padding: 1.2rem;
          }

          .title-line:first-child {
            font-size: 1.5rem;
          }
          .title-line:last-child {
            font-size: 2.2rem;
          }
          .title-emoji {
            font-size: 2rem;
          }

          .btn-primary, .btn-secondary {
            font-size: 0.85rem;
            padding: 0.7rem 1.5rem;
          }

          .day-rhythm {
            gap: 0.1rem;
            padding: 0.4rem 0.5rem;
          }

          .rhythm-item {
            padding: 0.2rem 0.3rem;
          }

          .rhythm-icon {
            font-size: 0.9rem;
          }

          .rhythm-label {
            font-size: 0.55rem;
          }
        }
      `}</style>
    </main>
  );
}