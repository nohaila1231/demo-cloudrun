"use client";
export default function Home() {
  const title =
    typeof process !== "undefined" ? process.env.NEXT_PUBLIC_TITLE : undefined;

  return (
    <main className="page">
      <div className="cloud-bg" aria-hidden="true">
        <div className="cloud cloud-1"></div>
        <div className="cloud cloud-2"></div>
        <div className="cloud cloud-3"></div>
      </div>

      <div className="eyebrow">✨ BONJOUR LES PETITS · BIENVENUE ✨</div>

      <section className="manifest" aria-label="Bienvenue à la crèche">
        <div className="stub">
          <span className="sun" aria-hidden="true">☀️</span>
          <span className="stub-label">ACCUEIL</span>
          <span className="stub-code">CRÈCHE·01</span>
        </div>

        <div className="perforation" aria-hidden="true" />

        <div className="body">
          <span className="stamp">DOUX</span>

          <h1>
            Les Petits
            <br />
            Nuages  ☁️
          </h1>

          <p className="sub">
            Un lieu doux et chaleureux pour l&rsquo;éveil et l&rsquo;épanouissement
            des tout-petits. Ici, chaque jour est une nouvelle aventure.
          </p>

          <dl className="fields">
            <div>
              <dt>Âges</dt>
              <dd>2 mois - 4 ans</dd>
            </div>
            <div>
              <dt>Horaires</dt>
              <dd>7h30 - 19h00</dd>
            </div>
            <div>
              <dt>Crèche</dt>
              <dd>{title || "Les Petits Nuages"}</dd>
            </div>
          </dl>
        </div>
      </section>

      <ol className="pipeline">
        {["Accueil", "Jeux", "Repas", "Sieste"].map((step, i) => (
          <li key={step} className={i === 0 ? "active" : ""}>
            <span className="idx">{["🌅", "🎨", "🍽️", "😴"][i]}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

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
          --sun: #ffd54f;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          background: var(--warm-white);
        }
      `}</style>

      <style jsx>{`
        .page {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
          padding: 4rem 1.5rem;
          background: linear-gradient(135deg, var(--baby-pink) 0%, var(--baby-blue) 100%);
          color: var(--text-soft);
          font-family: "Quicksand", sans-serif;
          overflow: hidden;
        }

        .cloud-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .cloud {
          position: absolute;
          border-radius: 1000px;
          background: rgba(255, 255, 255, 0.3);
          filter: blur(2px);
        }

        .cloud-1 {
          width: 300px;
          height: 80px;
          top: 10%;
          left: -5%;
          animation: float 25s ease-in-out infinite;
        }

        .cloud-2 {
          width: 400px;
          height: 100px;
          top: 60%;
          right: -10%;
          animation: float 30s ease-in-out infinite reverse;
        }

        .cloud-3 {
          width: 200px;
          height: 60px;
          bottom: 20%;
          left: 20%;
          animation: float 20s ease-in-out infinite 5s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, -20px) scale(1.05); }
        }

        .cloud::before,
        .cloud::after {
          content: '';
          position: absolute;
          border-radius: 1000px;
          background: inherit;
        }

        .cloud::before {
          width: 150px;
          height: 100px;
          top: -40px;
          left: 50px;
        }

        .cloud::after {
          width: 200px;
          height: 120px;
          top: -50px;
          left: 120px;
        }

        .eyebrow {
          position: relative;
          font-family: "Quicksand", sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--text-light);
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(8px);
          padding: 0.6rem 1.5rem;
          border-radius: 100px;
          box-shadow: 0 4px 20px var(--shadow);
        }

        .manifest {
          position: relative;
          display: flex;
          width: min(680px, 100%);
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 32px;
          box-shadow: 0 20px 60px var(--shadow);
          overflow: hidden;
        }

        .stub {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          width: 100px;
          flex-shrink: 0;
          padding: 2rem 0.5rem;
          background: linear-gradient(180deg, var(--soft-pink), var(--soft-blue));
        }

        .sun {
          font-size: 2.2rem;
          animation: spin 20s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .stub-label {
          font-family: "Quicksand", sans-serif;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          color: var(--text-soft);
        }

        .stub-code {
          writing-mode: vertical-rl;
          font-family: "Quicksand", sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.1em;
          color: var(--text-light);
          margin-top: 0.5rem;
        }

        .perforation {
          position: relative;
          width: 2px;
          flex-shrink: 0;
          background: repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 8px,
            rgba(180, 160, 200, 0.2) 8px,
            rgba(180, 160, 200, 0.2) 10px
          );
        }

        .body {
          position: relative;
          flex: 1;
          padding: 2.5rem 2.5rem 2rem;
        }

        .stamp {
          position: absolute;
          top: 1.5rem;
          right: 1.75rem;
          font-family: "Quicksand", sans-serif;
          font-weight: 700;
          font-size: 0.65rem;
          letter-spacing: 0.12em;
          color: var(--accent);
          background: rgba(240, 98, 146, 0.1);
          border: 2px solid var(--accent);
          border-radius: 100px;
          padding: 0.3rem 0.9rem;
          transform: rotate(4deg);
        }

        h1 {
          margin: 0 0 0.85rem;
          font-family: "Fredoka One", "Quicksand", sans-serif;
          font-weight: 700;
          font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          line-height: 1.2;
          color: var(--text-soft);
          letter-spacing: -0.01em;
        }

        h1 br {
          display: none;
        }

        .sub {
          margin: 0 0 1.75rem;
          max-width: 40ch;
          color: var(--text-light);
          font-size: 1rem;
          line-height: 1.6;
          font-weight: 500;
        }

        .fields {
          display: grid;
          gap: 0.75rem;
          margin: 0;
          padding-top: 1.5rem;
          border-top: 2px dashed rgba(180, 160, 200, 0.2);
        }

        .fields > div {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
        }

        dt {
          font-family: "Quicksand", sans-serif;
          font-weight: 600;
          font-size: 0.75rem;
          letter-spacing: 0.08em;
          color: var(--text-light);
          text-transform: uppercase;
        }

        dd {
          margin: 0;
          font-family: "Quicksand", sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-soft);
          text-align: right;
        }

        .pipeline {
          position: relative;
          display: flex;
          list-style: none;
          gap: 0;
          margin: 0;
          padding: 0;
          width: min(680px, 100%);
        }

        .pipeline li {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 0;
          border-top: 3px solid rgba(180, 160, 200, 0.2);
          font-family: "Quicksand", sans-serif;
          font-weight: 600;
          font-size: 0.8rem;
          color: var(--text-light);
        }

        .pipeline li + li {
          margin-left: 1rem;
        }

        .pipeline li.active {
          color: var(--text-soft);
          border-top-color: var(--accent);
        }

        .idx {
          font-size: 1.4rem;
        }

        @media (max-width: 560px) {
          .manifest {
            flex-direction: column;
            border-radius: 24px;
          }
          .stub {
            flex-direction: row;
            width: 100%;
            padding: 1rem 1.5rem;
            border-radius: 24px 24px 0 0;
          }
          .stub-code {
            writing-mode: horizontal-tb;
            margin: 0 0 0 auto;
          }
          .sun {
            font-size: 1.8rem;
          }
          .perforation {
            width: 100%;
            height: 2px;
            background: repeating-linear-gradient(
              to right,
              transparent,
              transparent 8px,
              rgba(180, 160, 200, 0.2) 8px,
              rgba(180, 160, 200, 0.2) 10px
            );
          }
          .body {
            padding: 1.5rem;
          }
          .stamp {
            top: 1rem;
            right: 1.25rem;
          }
          .pipeline {
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          .pipeline li {
            flex-basis: 45%;
            border-top: 2px solid rgba(180, 160, 200, 0.15);
          }
          .pipeline li + li {
            margin-left: 0;
          }
          h1 br {
            display: inline;
          }
        }
      `}</style>
    </main>
  );
}