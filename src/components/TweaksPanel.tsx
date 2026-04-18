import { useEffect, useState } from 'react'

type Theme = 'paper' | 'ink'
type Accent = 'amber' | 'moss' | 'red'
type Heading = 'instrument' | 'mono'
type Layout = 'mag' | 'tight'

type Tweaks = {
  theme: Theme
  accent: Accent
  heading: Heading
  layout: Layout
}

const DEFAULTS: Tweaks = {
  theme: 'paper',
  accent: 'amber',
  heading: 'instrument',
  layout: 'tight',
}

const HEAD_SELECTORS =
  'h1, .sec-title, .contact h2, .work-row .role, .proj .p-title, .pub .t, .stack-grid li, .quote, .big-mail, .portrait-caption, .sig'

export function TweaksPanel() {
  const [visible, setVisible] = useState(false)
  const [tw, setTw] = useState<Tweaks>(DEFAULTS)

  // Expose toggle via postMessage protocol that Claude Design uses.
  useEffect(() => {
    const onMessage = (ev: MessageEvent) => {
      const data = ev.data as { type?: string } | null
      if (!data) return
      if (data.type === '__activate_edit_mode') setVisible(true)
      if (data.type === '__deactivate_edit_mode') setVisible(false)
    }
    window.addEventListener('message', onMessage)
    try {
      window.parent.postMessage({ type: '__edit_mode_available' }, '*')
    } catch {
      /* cross-origin — ignore */
    }
    return () => window.removeEventListener('message', onMessage)
  }, [])

  // Apply tweaks to the DOM.
  useEffect(() => {
    const body = document.body
    // accent / theme body classes (theme here overrides TopBar only when the
    // tweaks panel is actually used)
    body.classList.toggle('ink', tw.theme === 'ink')
    body.classList.toggle('moss', tw.accent === 'moss')
    body.classList.toggle('red', tw.accent === 'red')

    // heading font override
    const els = document.querySelectorAll<HTMLElement>(HEAD_SELECTORS)
    els.forEach((el) => {
      if (tw.heading === 'mono') {
        el.style.fontFamily = '"JetBrains Mono", monospace'
        el.style.fontWeight = '300'
        el.style.letterSpacing = '-.02em'
      } else {
        el.style.fontFamily = ''
        el.style.fontWeight = ''
        el.style.letterSpacing = ''
      }
    })

    // Layout density. Use longhand paddingTop/Bottom — the shorthand would
    // also reset paddingLeft/Right and wipe out the horizontal gutter that
    // .page provides (see styles.css comment near .page).
    const sections = document.querySelectorAll<HTMLElement>('section')
    sections.forEach((s) => {
      if (tw.layout === 'tight') {
        s.style.paddingTop = '90px'
        s.style.paddingBottom = '90px'
      } else {
        s.style.paddingTop = ''
        s.style.paddingBottom = ''
      }
    })
  }, [tw])

  const set = <K extends keyof Tweaks>(key: K, value: Tweaks[K]) => {
    setTw((prev) => ({ ...prev, [key]: value }))
    try {
      window.parent.postMessage(
        { type: '__edit_mode_set_keys', edits: { [key]: value } },
        '*',
      )
    } catch {
      /* ignore */
    }
  }

  return (
    <div className={`tweaks${visible ? ' on' : ''}`} id="tweaks">
      <h5>
        TWEAKS{' '}
        <span className="x" onClick={() => setVisible(false)}>
          ×
        </span>
      </h5>
      <div className="tweak-row">
        <div className="k">Theme</div>
        <div className="vals">
          <button
            type="button"
            className={tw.theme === 'paper' ? 'on' : ''}
            onClick={() => set('theme', 'paper')}
          >
            Paper
          </button>
          <button
            type="button"
            className={tw.theme === 'ink' ? 'on' : ''}
            onClick={() => set('theme', 'ink')}
          >
            Ink
          </button>
        </div>
      </div>
      <div className="tweak-row">
        <div className="k">Accent</div>
        <div className="vals">
          <div
            className={`sw${tw.accent === 'amber' ? ' on' : ''}`}
            style={{ background: '#d9731a' }}
            onClick={() => set('accent', 'amber')}
          />
          <div
            className={`sw${tw.accent === 'moss' ? ' on' : ''}`}
            style={{ background: '#6d8a4a' }}
            onClick={() => set('accent', 'moss')}
          />
          <div
            className={`sw${tw.accent === 'red' ? ' on' : ''}`}
            style={{ background: '#c6442d' }}
            onClick={() => set('accent', 'red')}
          />
        </div>
      </div>
      <div className="tweak-row">
        <div className="k">Headline</div>
        <div className="vals">
          <button
            type="button"
            className={tw.heading === 'instrument' ? 'on' : ''}
            onClick={() => set('heading', 'instrument')}
          >
            Serif
          </button>
          <button
            type="button"
            className={tw.heading === 'mono' ? 'on' : ''}
            onClick={() => set('heading', 'mono')}
          >
            Mono
          </button>
        </div>
      </div>
      <div className="tweak-row">
        <div className="k">Layout</div>
        <div className="vals">
          <button
            type="button"
            className={tw.layout === 'mag' ? 'on' : ''}
            onClick={() => set('layout', 'mag')}
          >
            Magazine
          </button>
          <button
            type="button"
            className={tw.layout === 'tight' ? 'on' : ''}
            onClick={() => set('layout', 'tight')}
          >
            Tight
          </button>
        </div>
      </div>
    </div>
  )
}
