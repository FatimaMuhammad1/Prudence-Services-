import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { useInView } from "motion/react";
import { vars } from "../../lib/css";

/**
 * Safety net for `useInView`: on some hydrated layouts the observer never
 * fires for an element already on screen at mount. If that's the case,
 * this reports it as seen immediately instead of leaving it hidden forever.
 */
function useAlreadyVisible(ref: React.RefObject<Element | null>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) setVisible(true);
  }, [ref]);
  return visible;
}

interface LinesProps {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  /** ms before the first line starts */
  delay?: number;
  /** external gate, e.g. wait for the brand reveal */
  active?: boolean;
  amount?: number;
  /** reveal without waiting for the viewport */
  immediate?: boolean;
}

/** Headline that rises line by line out of a mask. */
export function Lines({
  lines,
  as: Tag = "div",
  className,
  delay = 0,
  active = true,
  amount = 0.3,
  immediate = false,
}: LinesProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const alreadyVisible = useAlreadyVisible(ref);
  const on = active && (immediate || inView || alreadyVisible);

  return (
    <Tag
      ref={ref}
      data-reveal
      data-in={on ? "true" : "false"}
      className={className}
      style={vars({ "--delay": `${delay}ms` })}
    >
      {lines.map((line, i) => (
        <span key={i} className="mask">
          <span style={vars({ "--i": i })}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

interface FadeProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  active?: boolean;
  amount?: number;
  style?: CSSProperties;
}

/** Fade + lift on entering the viewport. */
export function Fade({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  active = true,
  amount = 0.2,
  style,
}: FadeProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const alreadyVisible = useAlreadyVisible(ref);
  const on = active && (inView || alreadyVisible);

  return (
    <Tag
      ref={ref}
      data-fade
      data-in={on ? "true" : "false"}
      className={className}
      style={{ ...style, ...vars({ "--delay": `${delay}ms` }) }}
    >
      {children}
    </Tag>
  );
}

/** A hairline that draws itself across. */
export function Draw({
  className = "bg-ink/25",
  delay = 0,
  active = true,
}: {
  className?: string;
  delay?: number;
  active?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 1 });
  const alreadyVisible = useAlreadyVisible(ref);
  return (
    <div
      ref={ref}
      data-draw
      data-in={active && (inView || alreadyVisible) ? "true" : "false"}
      className={`h-px w-full ${className}`}
      style={vars({ "--delay": `${delay}ms` })}
    />
  );
}
