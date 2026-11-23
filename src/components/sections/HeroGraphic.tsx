/**
 * Restrained abstract technical composition for the home hero
 * (05_DESIGN_SYSTEM: "authentic photo or a restrained abstract technical
 * composition"). Replace with an approved project photograph when available.
 */
export function HeroGraphic() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 480 480"
      fill="none"
      className="h-auto w-full max-w-[460px] text-sky-200"
    >
      <g stroke="currentColor" strokeOpacity="0.22" strokeWidth="1">
        <circle cx="240" cy="240" r="200" />
        <circle cx="240" cy="240" r="150" strokeDasharray="4 6" />
        <circle cx="240" cy="240" r="96" />
        <line x1="20" y1="240" x2="460" y2="240" />
        <line x1="240" y1="20" x2="240" y2="460" />
      </g>
      <g stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.25">
        {/* Tick marks around the outer ring */}
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 36;
          const r1 = 200;
          const r2 = i % 3 === 0 ? 186 : 193;
          return (
            <line
              key={i}
              x1={240 + r1 * Math.cos(a)}
              y1={240 + r1 * Math.sin(a)}
              x2={240 + r2 * Math.cos(a)}
              y2={240 + r2 * Math.sin(a)}
            />
          );
        })}
      </g>
      {/* Dimension line */}
      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.25">
        <line x1="144" y1="410" x2="336" y2="410" />
        <line x1="144" y1="400" x2="144" y2="420" />
        <line x1="336" y1="400" x2="336" y2="420" />
        <path d="M152 405 144 410l8 5M328 405l8 5-8 5" />
      </g>
      <text x="240" y="400" textAnchor="middle" fill="currentColor" fillOpacity="0.6" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="2">
        SCOPE
      </text>
      {/* Accent arc */}
      <path d="M240 90a150 150 0 0 1 150 150" stroke="#4a9be0" strokeWidth="3" strokeLinecap="round" />
      <circle cx="390" cy="240" r="5" fill="#4a9be0" />
      <circle cx="240" cy="90" r="5" fill="#4a9be0" />
      {/* Centre square */}
      <rect x="208" y="208" width="64" height="64" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.25" />
      <circle cx="240" cy="240" r="4" fill="currentColor" fillOpacity="0.8" />
    </svg>
  );
}
