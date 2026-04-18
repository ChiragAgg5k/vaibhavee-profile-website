export function Masthead() {
  return (
    <header className="page mast" id="top">
      <div className="kicker">
        <span>Portfolio · 2026</span>
        <span className="sep" />
        <span>Bennett University</span>
      </div>

      <div className="mast-grid">
        <div>
          <h1>
            Vaibhavee<br />
            <span className="ital">Singh.</span>
          </h1>

          <p className="mast-lede">
            <span className="drop">B</span>uilding AI systems that work at
            real-world scale. Currently at{' '}
            <b style={{ fontWeight: 500 }}>Blinkit</b>, previously{' '}
            <b style={{ fontWeight: 500 }}>Scopely</b>.
          </p>

          <div className="mast-meta">
            <div>
              <div className="k">Based</div>
              <div>Noida / Gurugram, IN</div>
            </div>
            <div>
              <div className="k">Current</div>
              <div>Intern @ Blinkit · Apr &apos;26 →</div>
            </div>
            <div>
              <div className="k">Graduating</div>
              <div>Sep 2026 · B.Tech CS</div>
            </div>
            <div>
              <div className="k">Open to</div>
              <div>AI Eng · ML Research · SWE</div>
            </div>
          </div>

          <div className="quick-links">
            <a
              className="qlink"
              href="https://github.com/Vaibhavee89"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span className="arr">↗</span>
            </a>
            <a
              className="qlink"
              href="https://www.linkedin.com/in/vaibhavee-singh-1b7996252/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span className="arr">↗</span>
            </a>
            <a
              className="qlink"
              href="https://x.com/VaibhaveeSingh3"
              target="_blank"
              rel="noreferrer"
            >
              X / Twitter <span className="arr">↗</span>
            </a>
            <a className="qlink" href="#contact">
              Resume, PDF <span className="arr">→</span>
            </a>
          </div>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-tag">Fig. 01</div>
          <img
            className="portrait"
            src="/assets/vaibhavee.jpeg"
            alt="Vaibhavee Singh"
          />
          <div className="portrait-frame" />
          <div className="portrait-caption">she/her</div>
        </div>
      </div>
    </header>
  )
}
