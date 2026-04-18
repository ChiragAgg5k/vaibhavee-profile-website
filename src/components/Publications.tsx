export function Publications() {
  return (
    <section id="pubs" className="page">
      <div className="sec-head">
        <div className="sec-num">§ 04 — Writing</div>
        <h2 className="sec-title">
          Papers, chapters, and <em>long-form thinking.</em>
        </h2>
      </div>

      <div className="pubs">
        <article className="pub" style={{ gridColumn: 'span 12' }}>
          <div className="venue">IEEE · Mar 4, 2026 · Peer-reviewed</div>
          <h3 className="t">
            NETRA: An AI-Powered Cybercrime Reporting and Analysis System
          </h3>
          <div className="cite">
            Singh, V., Aggarwal, C., &amp; Nigam, S. (2026).
          </div>
          <p className="abs">
            An ML/DL ensemble (Voting Classifier + TextCNN) that classifies
            cybercrime complaints into fraud, phishing, identity theft and
            ransomware. Evaluated on real complaint data; written with an
            intentional focus on where the model is still wrong, because
            that&apos;s where the interesting work is.
          </p>
        </article>

        <article className="pub">
          <div className="venue">CRC Press · Book Chapter · Mar 31, 2025</div>
          <h3 className="t">
            Threat Intelligence and Prediction for DDoS Attacks in Cloud
            Computing
          </h3>
          <div className="cite">
            Co-authored chapter in an edited volume on cloud security.
          </div>
          <p className="abs">
            A survey + proposal chapter on how modern threat-intel feeds can be
            folded into DDoS prediction pipelines for cloud-native workloads.
          </p>
        </article>
      </div>
    </section>
  )
}
