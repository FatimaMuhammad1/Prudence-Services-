import { Fragment } from "react";

/** An infinite horizontal ticker. Pauses on hover; duplicated for a seamless loop. */
export function Marquee({
  items,
  speed = 34,
  separator = "✦",
}: {
  items: string[];
  speed?: number;
  separator?: string;
}) {
  return (
    <div className="marquee overflow-hidden" style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}>
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <Fragment key={copy}>
            {items.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex shrink-0 items-center gap-8 pr-8">
                <span>{item}</span>
                <span aria-hidden="true" className="text-signal">
                  {separator}
                </span>
              </span>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
