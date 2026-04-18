import { useEffect, useState } from 'react'

type Theme = 'paper' | 'ink'

export function TopBar() {
  const [theme, setTheme] = useState<Theme>('paper')
  const [mounted, setMounted] = useState(false)

  // Hydrate from localStorage / pre-boot dataset flag once on mount.
  useEffect(() => {
    try {
      const saved = (localStorage.getItem('vs-theme') as Theme | null) ?? null
      if (saved === 'ink' || saved === 'paper') {
        setTheme(saved)
      } else if (document.documentElement.dataset.themeBoot === 'ink') {
        setTheme('ink')
      }
    } catch {
      /* storage disabled — ignore */
    }
    setMounted(true)
  }, [])

  // Mirror theme into <body> class so CSS variables flip.
  useEffect(() => {
    if (!mounted) return
    const body = document.body
    body.classList.toggle('ink', theme === 'ink')
    try {
      localStorage.setItem('vs-theme', theme)
    } catch {
      /* storage disabled — ignore */
    }
    // Broadcast to any embedded tweaks host.
    try {
      window.parent.postMessage(
        { type: '__edit_mode_set_keys', edits: { theme } },
        '*',
      )
    } catch {
      /* cross-origin frame — ignore */
    }
  }, [theme, mounted])

  return (
    <div className="page">
      <nav className="topbar">
        <div className="mark">
          <span className="mark-dot live" />
          <span>VAIBHAVEE SINGH</span>
          <span style={{ color: 'var(--muted)' }}>&nbsp;/&nbsp;</span>
          <span style={{ color: 'var(--muted)' }}>NOTEBOOK №007</span>
        </div>
        <div className="nav-links">
          <a href="#about">
            <span className="num">01</span>About
          </a>
          <a href="#work">
            <span className="num">02</span>Work
          </a>
          <a href="#projects">
            <span className="num">03</span>Projects
          </a>
          <a href="#pubs">
            <span className="num">04</span>Writing
          </a>
          <a href="#contact">
            <span className="num">05</span>Contact
          </a>
        </div>
        <div className="nav-right">
          <span>IST · 28°36&apos;N</span>
          <button
            type="button"
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setTheme((t) => (t === 'ink' ? 'paper' : 'ink'))}
          >
            <span className="tt-sun">☼</span>
            <span className="tt-moon">☾</span>
          </button>
        </div>
      </nav>
    </div>
  )
}
