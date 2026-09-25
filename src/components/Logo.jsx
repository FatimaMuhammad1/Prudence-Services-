export function LogoMark({ size = 40, spin = false }) {
  return (
    <span className={`logo-mark ${spin ? "is-spinning" : ""}`} style={{ width: size, height: size }} aria-hidden="true">
      <span className="logo-hex">
        {[-4, -2, 0, 2, 4].map((z) => (
          <svg key={z} viewBox="0 0 48 48" fill="none" style={{ transform: `translateZ(${z}px)`, opacity: z === 0 ? 1 : 0.55 }}>
            <path d="M24 3l18 10.4v21.2L24 45 6 34.6V13.4z" stroke={Math.abs(z) === 4 ? "var(--gold)" : "currentColor"} strokeWidth="2" strokeLinejoin="round" />
          </svg>
        ))}
      </span>
      <svg className="logo-p" viewBox="0 0 48 48" fill="none">
        <path d="M19 35V14h7.500a6.400 6.400 0 0 1 0 12.800H19" stroke="var(--gold)" strokeWidth="2.800" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function Logo() {
  return (
    <span className="brand">
      <LogoMark spin />
      <span className="brand-text">
        <span className="brand-name">PRUDENCE</span>
        <span className="brand-sub">SERVICES</span>
      </span>
    </span>
  );
}
