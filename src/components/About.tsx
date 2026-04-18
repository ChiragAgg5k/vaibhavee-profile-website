export function About() {
  return (
    <section id="about" className="page">
      <div className="sec-head">
        <div className="sec-num">§ 01 — About</div>
        <h2 className="sec-title">
          Short <em>note.</em>
        </h2>
      </div>

      <div className="about-grid">
        <div className="sidecol">
          <dl>
            <dt>Program</dt>
            <dd>B.Tech CS, Bennett &apos;26</dd>
            <dt>Certs</dt>
            <dd>AWS · Databricks Gen-AI · OWASP (+14)</dd>
            <dt>Languages</dt>
            <dd>Python, TS, Go, C++, Rust</dd>
          </dl>
        </div>

        <div className="about">
          <p className="big">
            I care about the <em>unglamorous middle</em> — between &quot;demo
            works&quot; and &quot;holds up at 3 a.m.&quot;
          </p>
          <p>
            At Blinkit: Rancher, Kubernetes, Go. At Scopely: production LLM
            tooling, eval pipelines, architectures that don&apos;t fold under a
            weird prompt.
          </p>
        </div>

        <div className="about">
          <p>
            Before LLMs, cybersecurity at CDAC — Flask, ping floods, iptables.
            Research at CIMFR on social-media sentiment. Published in IEEE,
            co-authored a CRC Press chapter on DDoS.
          </p>
          <div className="sig">— Vaibhavee</div>
        </div>
      </div>
    </section>
  )
}
