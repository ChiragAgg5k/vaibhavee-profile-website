const TICKER_ITEMS = [
  "NOW — Intern @ Blinkit, Gurugram",
  '·',
  "PAPER — NETRA, IEEE '26",
  '·',
  'PREV — AI Eng @ Scopely',
  '·',
  'CERT — AWS',
  '·',
  "GRADUATING — Sep '26",
  '·',
  'OPEN — AI Eng / ML Research / SWE',
  '·',
  "BOOK — CRC Press, '25",
  '·',
  'CODE — github.com/Vaibhavee89',
]

function renderItems(keyPrefix: string) {
  return TICKER_ITEMS.map((item, idx) =>
    item === '·' ? (
      <span key={`${keyPrefix}-${idx}`}>
        <span className="dot" />
      </span>
    ) : (
      <span key={`${keyPrefix}-${idx}`}>{item}</span>
    ),
  )
}

export function Ticker() {
  return (
    <div className="ticker">
      {/* Duplicated track so the CSS translateX(-50%) loop is seamless. */}
      <div className="ticker-track" id="ticker">
        {renderItems('a')}
        {renderItems('b')}
      </div>
    </div>
  )
}
