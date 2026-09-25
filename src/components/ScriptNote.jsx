export default function ScriptNote({ children, className = "", arrow = "down-right" }) {
  return (
    <span className={`script-note ${className}`}>
      <span>{children}</span>
      <svg className={`script-arrow ${arrow}`} width="34" height="30" viewBox="0 0 34 30" fill="none" stroke="currentColor" strokeWidth="1.300" strokeLinecap="round" aria-hidden="true">
        <path d="M3 4C4 18 14 25 29 24" />
        <path d="M23 19l6 5-7 4" />
      </svg>
    </span>
  );
}
