export function Toolbelt() {
  return (
    <section id="stack" className="page">
      <div className="sec-head">
        <div className="sec-num">§ 05 — Toolbelt</div>
        <h2 className="sec-title">
          What I reach for, <em>most days.</em>
        </h2>
      </div>

      <div className="stack-grid">
        <div>
          <h4>Languages</h4>
          <ul>
            <li>
              Python <span className="pct">daily</span>
            </li>
            <li>
              TypeScript <span className="pct">daily</span>
            </li>
            <li>
              Go <span className="pct">now</span>
            </li>
            <li>
              C++ <span className="pct">often</span>
            </li>
            <li>
              Rust <span className="pct">learning</span>
            </li>
            <li>
              Bash <span className="pct">always</span>
            </li>
          </ul>
        </div>

        <div>
          <h4>AI / ML</h4>
          <ul>
            <li>LangChain</li>
            <li>LlamaIndex</li>
            <li>CrewAI · MCP</li>
            <li>Nvidia NIM · Groq</li>
            <li>GPT-5 · Gemini</li>
            <li>PyTorch · TF · sklearn</li>
          </ul>
        </div>

        <div>
          <h4>Cloud / Infra</h4>
          <ul>
            <li>
              AWS <span className="pct">certified</span>
            </li>
            <li>Azure · GCP</li>
            <li>Kubernetes · Rancher</li>
            <li>Docker</li>
            <li>Temporal</li>
            <li>Piston</li>
          </ul>
        </div>

        <div>
          <h4>Backend &amp; Data</h4>
          <ul>
            <li>FastAPI · Flask</li>
            <li>Node · Next.js · Django</li>
            <li>MongoDB · MySQL</li>
            <li>Supabase</li>
            <li>pandas</li>
            <li>Burp · OWASP</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
