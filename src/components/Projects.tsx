import { useMemo, useState } from 'react'

type Cat = 'all' | 'flagship' | 'ai' | 'sec' | 'other'

type Project = {
  href: string
  external?: boolean
  cats: Array<Exclude<Cat, 'all'>>
  kicker: string
  title: string
  index: string
  desc: string
  stack: Array<string>
  link: string
  span?: 'flag' | 'span-4' | 'span-6' | 'span-8'
  art?: 'netra'
}

const PROJECTS: Array<Project> = [
  {
    href: 'https://ieeexplore.ieee.org/abstract/document/11413391',
    external: true,
    cats: ['flagship', 'ai'],
    kicker: 'IEEE 2026',
    title: 'NETRA',
    index: '№ 01',
    desc: 'Cybercrime complaint classifier. Ensemble of RF, SVM, Voting, TextCNN across fraud, phishing, identity theft, ransomware.',
    stack: ['sklearn', 'TextCNN', 'PyTorch'],
    link: 'Paper ↗',
    span: 'flag',
    art: 'netra',
  },
  {
    href: 'https://github.com/Vaibhavee89/prabhawattt',
    external: true,
    cats: ['flagship', 'other'],
    kicker: 'Energy',
    title: 'Prabhawattt',
    index: '№ 02',
    desc: 'Time-of-use tariff optimizer for solar + grid. Shifts load by price signal.',
    stack: ['TypeScript', 'Next.js'],
    link: 'Repo ↗',
    span: 'span-8',
  },
  {
    href: 'https://github.com/Vaibhavee89/Inquiro',
    external: true,
    cats: ['flagship', 'ai'],
    kicker: 'Research',
    title: 'Inquiro',
    index: '№ 03',
    desc: 'AI research assistant on GPT-5.',
    stack: ['GPT-5'],
    link: 'Repo ↗',
    span: 'span-4',
  },
  {
    href: 'https://dsa-study-bot.vercel.app',
    external: true,
    cats: ['flagship', 'ai'],
    kicker: 'Live',
    title: 'DSA Bot',
    index: '№ 03',
    desc: "Socratic DSA tutor. Won't hand you the answer.",
    stack: ['Groq'],
    link: 'Live ↗',
    span: 'span-4',
  },
  {
    href: 'https://github.com/Vaibhavee89?tab=repositories&q=MCP',
    external: true,
    cats: ['ai'],
    kicker: 'Protocol',
    title: 'MCP Suites',
    index: '№ 04',
    desc: 'Leave-Mgmt + Google MCP servers for Claude.',
    stack: ['MCP'],
    link: 'Repos ↗',
    span: 'span-4',
  },
  {
    href: 'https://github.com/Vaibhavee89/cloud-architect-ai',
    external: true,
    cats: ['ai'],
    kicker: 'Infra',
    title: 'Cloud Architect',
    index: '№ 05',
    desc: 'NL → cloud diagrams + Terraform.',
    stack: ['Terraform'],
    link: 'Repo ↗',
    span: 'span-4',
  },
  {
    href: 'https://github.com/Vaibhavee89/NetAudit',
    external: true,
    cats: ['sec'],
    kicker: 'CDAC',
    title: 'NetAudit',
    index: '№ 06',
    desc: 'Network auditing in a Flask app.',
    stack: ['Flask', 'Burp'],
    link: 'Repo ↗',
    span: 'span-6',
  },
  {
    href: '#',
    cats: ['sec'],
    kicker: 'Cloud',
    title: 'AWS Security Monitor',
    index: '№ 07',
    desc: 'Real-time monitoring, thousands of events/month.',
    stack: ['AWS', 'Lambda'],
    link: 'Private',
    span: 'span-6',
  },
]

const FILTERS: Array<{ f: Cat; label: string }> = [
  { f: 'all', label: 'All' },
  { f: 'flagship', label: 'Flagship' },
  { f: 'ai', label: 'AI / LLM' },
  { f: 'sec', label: 'Security' },
]

function NetraArt() {
  // Labels and grid use currentColor + opacity so they read dark on cream in
  // light mode and cream on dark in ink mode. Cells are styled via the
  // `.cell` class in CSS so the active accent (amber/moss/red) paints them.
  // The numeric readouts sit on high-opacity accent cells which have enough
  // contrast in both modes, so they stay cream.
  return (
    <div className="p-art" aria-hidden="true">
      <svg viewBox="0 0 400 280" preserveAspectRatio="xMidYMid meet">
        <defs>
          <pattern
            id="grid"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 20 0 L 0 0 0 20"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.12"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="400" height="280" fill="url(#grid)" />
        <g
          fontFamily="JetBrains Mono"
          fontSize="9"
          fill="currentColor"
          opacity="0.6"
        >
          <text x="100" y="30">FRAUD</text>
          <text x="170" y="30">PHISH</text>
          <text x="240" y="30">ID-THF</text>
        </g>
        <g>
          <rect className="cell" x="100" y="40" width="60" height="60" opacity="0.9" />
          <rect className="cell" x="170" y="40" width="60" height="60" opacity="0.15" />
          <rect className="cell" x="240" y="40" width="60" height="60" opacity="0.08" />
          <rect className="cell" x="100" y="110" width="60" height="60" opacity="0.1" />
          <rect className="cell" x="170" y="110" width="60" height="60" opacity="0.85" />
          <rect className="cell" x="240" y="110" width="60" height="60" opacity="0.18" />
          <rect className="cell" x="100" y="180" width="60" height="60" opacity="0.06" />
          <rect className="cell" x="170" y="180" width="60" height="60" opacity="0.12" />
          <rect className="cell" x="240" y="180" width="60" height="60" opacity="0.78" />
        </g>
        <g
          fontFamily="JetBrains Mono"
          fontSize="11"
          fill="#f3efe6"
          textAnchor="middle"
        >
          <text x="130" y="75">.94</text>
          <text x="200" y="145">.91</text>
          <text x="270" y="215">.88</text>
        </g>
        <g
          fontFamily="Instrument Serif"
          fontStyle="italic"
          fontSize="12"
          fill="currentColor"
          opacity="0.5"
        >
          <text x="100" y="270">fig — confusion matrix, test set</text>
        </g>
      </svg>
    </div>
  )
}

export function Projects() {
  const [active, setActive] = useState<Cat>('all')

  const counts = useMemo(() => {
    return {
      all: PROJECTS.length,
      flagship: PROJECTS.filter((p) => p.cats.includes('flagship')).length,
      ai: PROJECTS.filter((p) => p.cats.includes('ai')).length,
      sec: PROJECTS.filter((p) => p.cats.includes('sec')).length,
      other: PROJECTS.filter((p) => p.cats.includes('other')).length,
    }
  }, [])

  return (
    <section id="projects" className="page">
      <div className="sec-head">
        <div className="sec-num">§ 03 — Projects</div>
        <h2 className="sec-title">
          Selected <em>work.</em>
        </h2>
      </div>

      <div className="projects-bar" id="filters">
        {FILTERS.map(({ f, label }) => (
          <button
            key={f}
            type="button"
            className={`filter${active === f ? ' active' : ''}`}
            data-f={f}
            onClick={() => setActive(f)}
          >
            {label} <span className="cnt">{counts[f as keyof typeof counts]}</span>
          </button>
        ))}
      </div>

      <div className="proj-grid" id="projGrid">
        {PROJECTS.map((p) => {
          const match = active === 'all' || p.cats.includes(active as never)
          const className = [
            'proj',
            p.span === 'flag' ? 'flag' : null,
            p.span && p.span !== 'flag' ? p.span : null,
          ]
            .filter(Boolean)
            .join(' ')
          return (
            <a
              key={`${p.title}-${p.index}`}
              className={className}
              href={p.href}
              target={p.external ? '_blank' : undefined}
              rel={p.external ? 'noreferrer' : undefined}
              data-cat={p.cats.join(' ')}
              style={match ? undefined : { display: 'none' }}
            >
              {p.span === 'flag' ? (
                <>
                  <div className="p-inner">
                    <div className="p-head">
                      <div>
                        <div className="p-kicker">{p.kicker}</div>
                        <h3 className="p-title">{p.title}</h3>
                      </div>
                      <div className="p-index">{p.index}</div>
                    </div>
                    <p className="p-desc">{p.desc}</p>
                    <div className="p-foot">
                      <div className="p-stack">
                        {p.stack.map((s) => (
                          <span className="chip" key={s}>
                            {s}
                          </span>
                        ))}
                      </div>
                      <span className="p-link">{p.link}</span>
                    </div>
                  </div>
                  {p.art === 'netra' ? <NetraArt /> : null}
                </>
              ) : (
                <>
                  <div className="p-head">
                    <div>
                      <div className="p-kicker">{p.kicker}</div>
                      <h3 className="p-title">{p.title}</h3>
                    </div>
                    <div className="p-index">{p.index}</div>
                  </div>
                  <p className="p-desc">{p.desc}</p>
                  <div className="p-foot">
                    <div className="p-stack">
                      {p.stack.map((s) => (
                        <span className="chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <span className="p-link">{p.link}</span>
                  </div>
                </>
              )}
            </a>
          )
        })}
      </div>
    </section>
  )
}
