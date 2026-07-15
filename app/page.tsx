"use client";
export default function Home() {
  const title =
    typeof process !== "undefined" ? process.env.NEXT_PUBLIC_TITLE : undefined;

  return (
    <main className="page">
      <div className="grid-bg" aria-hidden="true" />

      <div className="eyebrow">MANIFESTE DE DÉPLOIEMENT — CLOUD RUN</div>

      <section className="manifest" aria-label="Détails du déploiement">
        <div className="stub">
          <span className="dot" aria-hidden="true" />
          <span className="stub-label">LIVE</span>
          <span className="stub-code">WFD·CR·01</span>
        </div>

        <div className="perforation" aria-hidden="true" />

        <div className="body">
          <span className="stamp">DÉPLOYÉ</span>

          <h1>
            Westfield
            <br />
            Cloud Run Demo
          </h1>

          <p className="sub">
            Déploiement continu depuis GitHub Actions jusqu&rsquo;à Cloud Run —
            build, test et mise en production à chaque push.
          </p>

          <dl className="fields">
            <div>
              <dt>Plateforme</dt>
              <dd>Google Cloud Run</dd>
            </div>
            <div>
              <dt>Déployé via</dt>
              <dd>GitHub Actions</dd>
            </div>
            <div>
              <dt>Titre runtime</dt>
              <dd>{title || "— non défini —"}</dd>
            </div>
          </dl>
        </div>
      </section>

      <ol className="pipeline">
        {["Push", "Build", "Test", "Deploy"].map((step, i) => (
          <li key={step} className={i === 3 ? "active" : ""}>
            <span className="idx">{String(i + 1).padStart(2, "0")}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500&display=swap");

        :root {
          --ink: #0a0e1a;
          --panel: #10162a;
          --panel-2: #161d33;
          --border: #232c47;
          --text: #e9ecf6;
          --muted: #8792ae;
          --accent: #6c7bff;
          --live: #34d399;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          background: var(--ink);
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
          background: var(--ink);
          color: var(--text);
          font-family: "IBM Plex Sans", sans-serif;
          overflow: hidden;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              to right,
              var(--border) 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, var(--border) 1px, transparent 1px);
          background-size: 48px 48px;
          opacity: 0.25;
          mask-image: radial-gradient(
            ellipse at center,
            black 0%,
            transparent 75%
          );
        }

        .eyebrow {
          position: relative;
          font-family: "IBM Plex Mono", monospace;
          font-size: 0.72rem;
          letter-spacing: 0.18em;
          color: var(--muted);
        }

        .manifest {
          position: relative;
          display: flex;
          width: min(680px, 100%);
          background: var(--panel);
          border: 1px solid var(--border);
          border-radius: 14px;
          box-shadow: 0 30px 60px -25px rgba(0, 0, 0, 0.6);
          overflow: hidden;
        }

        .stub {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          width: 88px;
          flex-shrink: 0;
          padding: 1.5rem 0.5rem;
          background: var(--panel-2);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--live);
          box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.15);
          animation: pulse 2.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .dot {
            animation: none;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 0 0 4px rgba(52, 211, 153, 0.15);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(52, 211, 153, 0.05);
          }
        }

        .stub-label {
          font-family: "IBM Plex Mono", monospace;
          font-size: 0.65rem;
          letter-spacing: 0.15em;
          color: var(--live);
        }

        .stub-code {
          writing-mode: vertical-rl;
          font-family: "IBM Plex Mono", monospace;
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          color: var(--muted);
          margin-top: 0.5rem;
        }

        .perforation {
          position: relative;
          width: 1px;
          flex-shrink: 0;
          background-image: radial-gradient(
            circle,
            var(--ink) 2px,
            transparent 2.5px
          );
          background-size: 1px 14px;
          background-color: var(--border);
        }

        .body {
          position: relative;
          flex: 1;
          padding: 2.25rem 2.25rem 2rem;
        }

        .stamp {
          position: absolute;
          top: 1.5rem;
          right: 1.75rem;
          font-family: "IBM Plex Mono", monospace;
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          color: var(--accent);
          border: 1px solid var(--accent);
          border-radius: 999px;
          padding: 0.3rem 0.65rem;
          transform: rotate(6deg);
        }

        h1 {
          margin: 0 0 0.85rem;
          font-family: "IBM Plex Mono", monospace;
          font-weight: 600;
          font-size: clamp(1.6rem, 3vw, 2.1rem);
          line-height: 1.15;
          letter-spacing: -0.01em;
        }

        .sub {
          margin: 0 0 1.75rem;
          max-width: 42ch;
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.55;
        }

        .fields {
          display: grid;
          gap: 0.75rem;
          margin: 0;
          padding-top: 1.5rem;
          border-top: 1px dashed var(--border);
        }

        .fields > div {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
        }

        dt {
          font-family: "IBM Plex Mono", monospace;
          font-size: 0.72rem;
          letter-spacing: 0.08em;
          color: var(--muted);
        }

        dd {
          margin: 0;
          font-family: "IBM Plex Mono", monospace;
          font-size: 0.85rem;
          color: var(--text);
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
          padding: 0.85rem 0;
          border-top: 1px solid var(--border);
          font-family: "IBM Plex Mono", monospace;
          font-size: 0.78rem;
          color: var(--muted);
        }

        .pipeline li + li {
          margin-left: 1rem;
        }

        .pipeline li.active {
          color: var(--live);
          border-top-color: var(--live);
        }

        .idx {
          font-size: 0.68rem;
          color: var(--border);
        }

        .pipeline li.active .idx {
          color: var(--live);
        }

        @media (max-width: 560px) {
          .manifest {
            flex-direction: column;
          }
          .stub {
            flex-direction: row;
            width: 100%;
          }
          .stub-code {
            writing-mode: horizontal-tb;
            margin: 0 0 0 auto;
          }
          .perforation {
            width: 100%;
            height: 1px;
            background-image: radial-gradient(
              circle,
              var(--ink) 2px,
              transparent 2.5px
            );
            background-size: 14px 1px;
          }
          .pipeline {
            flex-wrap: wrap;
          }
          .pipeline li {
            flex-basis: 46%;
          }
        }
      `}</style>
    </main>
  );
}