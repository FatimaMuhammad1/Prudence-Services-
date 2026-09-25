export default function Leaf({ className = "", flip }) {
  return (
    <svg
      className={`leaf ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      viewBox="0 0 120 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M60 196C58 150 62 90 78 8" />
      {[30, 62, 94, 126, 156].map((y, i) => (
        <g key={y}>
          <path d={`M${64 - i * 1.500} ${y + 18}C40 ${y + 8} 30 ${y - 10} 26 ${y - 26}C46 ${y - 20} 60 ${y - 4} ${64 - i * 1.500} ${y + 18}z`} />
          <path d={`M${66 - i * 2} ${y + 6}C90 ${y - 4} 100 ${y - 22} 104 ${y - 38}C84 ${y - 32} 70 ${y - 16} ${66 - i * 2} ${y + 6}z`} />
        </g>
      ))}
    </svg>
  );
}
