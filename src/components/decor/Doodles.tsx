/**
 * Small hand-drawn accents — a sparkle, a leaf sketch, and a caption with a
 * curved arrow — scattered around the photography, in the spirit of a
 * margin note. Purely decorative, so every element here is aria-hidden.
 */

export function Star({ className = "", float = false }: { className?: string; float?: boolean }) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={float ? { animation: "float-y 5s ease-in-out infinite" } : undefined}
    >
      <path d="M 50 10 L 80 95 L 10 40 L 90 40 L 20 95 Z" />
    </svg>
  );
}

/** A loose hand-drawn underline, for tucking beneath a key word in a heading. */
export function Underline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 14"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M3 9c30-7 100-9 154 2" />
    </svg>
  );
}

/** A loose, hand-drawn loop that trails around a photo cluster. */
export function Loop({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 200"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M100 6C55 6 15 40 18 82c3 36 37 58 74 46 26-9 30-36 8-46" />
    </svg>
  );
}

export function HeroScribble({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 500"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M 250 480 C 100 480 20 300 50 200 C 80 100 150 150 250 80 C 350 10 450 -20 520 20 C 590 60 620 150 520 150 C 420 150 550 300 580 350 C 610 400 550 500 480 450 C 410 400 350 470 250 480" />
    </svg>
  );
}

export function Leaf({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 64"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <path d="M30 6c11 5 18 15 15 27-3 12-15 19-27 15 7-4 13-11 14-21 1-9-1-15-2-21Z" />
      <path d="M30 58V22" />
    </svg>
  );
}

/**
 * A cluster of tall, pointed line-art leaves fanning out from a base —
 * a bigger botanical accent for an otherwise bare corner. Outline only,
 * like the rest of the doodle set, so it sits quietly behind whatever's
 * layered on top of it.
 */
export function Fronds({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 200"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    >
      <path d="M20 190C6 148 6 104 34 40C50 104 40 150 20 190Z" />
      <path d="M46 192C34 144 40 92 76 18C86 92 74 148 46 192Z" />
      <path d="M76 192C72 140 86 86 130 26C132 94 114 152 76 192Z" />
      <path d="M102 188C106 138 126 94 156 58C146 114 128 160 102 188Z" />
    </svg>
  );
}

/**
 * A short caption in a hand-lettered script, with a curved arrow pointing
 * at whatever it annotates.
 *
 * It's positioned with `left-full`/`right-full` off its nearest positioned
 * ancestor rather than a guessed pixel offset, so it always sits entirely
 * outside that box — it cannot overlap whatever it's annotating, whatever
 * width the caption text ends up being. Give it a wrapper sized to the
 * specific photo (not a wider multi-photo composition) so it lands next to
 * the right thing.
 */
export function Doodle({
  text,
  side = "right",
  className = "",
  rotate = 0,
}: {
  text: string;
  /** Which side of its positioned ancestor the caption sits on. The arrow
   *  always curves back toward that ancestor. */
  side?: "left" | "right";
  className?: string;
  rotate?: number;
}) {
  const flip = side === "left";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute w-max max-w-[9rem] select-none ${side === "right" ? "left-full ml-3" : "right-full mr-3"} ${className}`}
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      <p className="ff-script text-[1.1rem] leading-[1.15] text-current/80">{text}</p>
      <svg
        viewBox="0 0 80 56"
        className={`-mt-1 ml-2 h-9 w-16 text-current/45 ${flip ? "-scale-x-100" : ""}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 4C20 8 30 26 46 32S66 42 72 46" />
        <path d="M59 39 72 46 61 51" />
      </svg>
    </div>
  );
}
