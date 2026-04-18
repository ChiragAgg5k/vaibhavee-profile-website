import { useState } from 'react'

type WorkItem = {
  year: string
  role: string
  org: string
  location?: string
  meta: string
  active?: boolean
  detail: string
  stack?: Array<string>
  logo?: { src: string; alt: string; whiteBg?: boolean }
}

const WORK: Array<WorkItem> = [
  {
    year: '2026 — now',
    role: 'SDE Intern',
    org: 'Blinkit',
    location: 'Gurugram',
    meta: "Apr '26 →",
    active: true,
    detail:
      "Platform work at a quick-commerce operation where every minute of downtime is someone's missing groceries — learning what \"operational\" actually means at that kind of scale.",
    stack: ['Kafka', 'FastAPI', 'Golang', 'SQL'],
    logo: { src: '/assets/blinkit.png', alt: 'Blinkit' },
  },
  {
    year: '2025 — 2026',
    role: 'AI Engineering Intern',
    org: 'Scopely',
    location: 'Bangalore · 7 mo',
    meta: "Sep '25 — Mar '26",
    detail:
      'Shipped production LLM tooling end-to-end. Built an AI presentation-judging platform with evaluator pipelines, a GitHub-metrics-based resume shortlisting system, and migrated internal AI assistants to more reliable LLM architectures with proper eval harnesses. Spent a lot of time in the gap between "LLM demo" and "LLM product."',
    stack: [
      'LlamaIndex',
      'Temporal',
      'Piston',
      'Python',
      'Evals',
      'LLM orchestration',
    ],
    logo: { src: '/assets/scopely.jpg', alt: 'Scopely', whiteBg: true },
  },
  {
    year: '2025',
    role: 'Network Audit Intern',
    org: 'CDAC India',
    location: 'Remote',
    meta: "Jul — Aug '25",
    detail:
      'Built a Flask backend for automated network vulnerability scanning — glue between scanners, normalized outputs, and a web surface that ops teams actually want to look at.',
    stack: ['Flask', 'Burp', 'Linux'],
  },
  {
    year: '2025',
    role: 'Network Security Trainee',
    org: 'CDAC India',
    meta: "Jun — Jul '25",
    detail:
      'Simulated attacks — ping floods, unauthorized access — and practiced mitigation via firewall rules and ACLs. The textbook version of things, finally on a real network.',
    stack: ['iptables', 'ACLs', 'Wireshark'],
  },
  {
    year: '2024',
    role: 'Research Trainee',
    org: 'CIMFR (CSIR)',
    meta: "Jul — Aug '24",
    detail:
      'Social-media sentiment and engagement research — Python, pandas, a lot of statistical baselines before anything fancy.',
    stack: ['Python', 'pandas', 'NLP'],
  },
  {
    year: '2023 — 2024',
    role: 'Research Co-Head',
    org: 'IEEE WiE, Bennett',
    location: '9 mo',
    meta: "Sep '23 — May '24",
    detail:
      'Led research initiatives for the chapter — organizing talks, paper clubs, and the general work of nudging undergrads toward their first publications.',
  },
]

export function Work() {
  // First row (Blinkit) is open by default, matching the prototype.
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true })

  const toggle = (i: number) =>
    setOpen((prev) => ({ ...prev, [i]: !prev[i] }))

  return (
    <section id="work" className="page">
      <div className="sec-head">
        <div className="sec-num">§ 02 — Work</div>
        <h2 className="sec-title">
          Where I&apos;ve <em>been.</em>
        </h2>
      </div>

      <div className="work-list" id="workList">
        {WORK.map((row, i) => {
          const isOpen = !!open[i]
          return (
            <div
              key={i}
              className={`work-row${isOpen ? ' open' : ''}`}
              data-i={i}
              onClick={() => toggle(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  toggle(i)
                }
              }}
            >
              <div className="year">
                {row.logo ? (
                  <img
                    className={`logo${row.logo.whiteBg ? ' logo-whitebg' : ''}`}
                    src={row.logo.src}
                    alt={row.logo.alt}
                    loading="lazy"
                    decoding="async"
                  />
                ) : null}
                <span>{row.year}</span>
              </div>
              <div>
                <h3 className="role">{row.role}</h3>
                <div className="org">
                  {row.org}
                  {row.location ? (
                    <>
                      {' '}
                      <span className="dot">·</span>{' '}
                      <span>{row.location}</span>
                    </>
                  ) : null}
                </div>
                <div className="expand">
                  {row.detail}
                  {row.stack ? (
                    <div className="stack">
                      {row.stack.map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="meta">
                {row.active ? (
                  <>
                    <span className="now">ACTIVE</span>
                    <br />
                    <span
                      style={{
                        color: 'var(--muted)',
                        marginTop: 6,
                        display: 'inline-block',
                      }}
                    >
                      {row.meta}
                    </span>
                  </>
                ) : (
                  row.meta
                )}
              </div>
              <div className="arrow">›</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
