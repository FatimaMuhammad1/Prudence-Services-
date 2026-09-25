import { useId } from "react";

/** A slowly spinning circular badge, like a wax seal — pure decoration. */
export function Badge({ text = "TRUSTED · CONSULTANCY · ", className = "" }: { text?: string; className?: string }) {
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  return (
    <div className={`relative grid place-items-center ${className}`} aria-hidden="true">
      <svg viewBox="0 0 100 100" className="size-full text-ink" style={{ animation: "spin-slow 16s linear infinite" }}>
        <path id={id} fill="none" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        <text fontSize="8.6" letterSpacing="1.5" fill="currentColor">
          <textPath href={`#${id}`}>{text.repeat(2)}</textPath>
        </text>
      </svg>
      <span className="absolute grid size-9 place-items-center rounded-full bg-signal text-paper">
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
          <path d="M12 2c.8 4.7 2.3 7.2 5 9 2.3 1.5 4 1.8 5 2-1 .2-2.7.5-5 2-2.7 1.8-4.2 4.3-5 9-.8-4.7-2.3-7.2-5-9-2.3-1.5-4-1.8-5-2 1-.2 2.7-.5 5-2 2.7-1.8 4.2-4.3 5-9Z" />
        </svg>
      </span>
    </div>
  );
}
