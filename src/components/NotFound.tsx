import { Link } from '@tanstack/react-router'

export function NotFound() {
  return (
    <div className="page" style={{ paddingTop: 140, paddingBottom: 140 }}>
      <div className="sec-head">
        <div className="sec-num">§ 404 — Errata</div>
        <h2 className="sec-title">
          Not on <em>file.</em>
        </h2>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '160px 1fr',
          gap: 40,
          maxWidth: 900,
        }}
      >
        <div />
        <div>
          <p
            style={{
              fontFamily: "'Newsreader', serif",
              fontSize: 22,
              lineHeight: 1.5,
              color: 'var(--ink-2)',
              margin: '0 0 32px',
              maxWidth: '52ch',
            }}
          >
            The page you&apos;re looking for isn&apos;t in this notebook.
            It may have been filed under a different name, or never written
            down in the first place.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 12,
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/"
              className="qlink"
              style={{ textDecoration: 'none' }}
            >
              Back to the front page <span className="arr">→</span>
            </Link>
            <a
              className="qlink"
              href="mailto:vaibhaveesingh89@gmail.com"
              style={{ textDecoration: 'none' }}
            >
              Email Vaibhavee <span className="arr">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
