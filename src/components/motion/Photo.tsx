import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import type { Pic } from "../../data/photos";

/**
 * A photograph toned to the site's warm monochrome, revealed with a clip
 * as it scrolls in and drifting slowly inside its frame.
 */
export function Photo({
  pic,
  ratio = "4 / 5",
  travel = 7,
  delay = 0,
  className = "",
  active = true,
}: {
  pic: Pic;
  ratio?: string;
  travel?: number;
  delay?: number;
  className?: string;
  active?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${travel}%`, `${travel}%`]);

  // Safety net: on some hydrated layouts the scroll-in-view observer never
  // fires for an element that is already on screen at mount. If that's the
  // case here, reveal it immediately instead of leaving it clipped forever.
  const [alreadyVisible, setAlreadyVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) setAlreadyVisible(true);
  }, []);

  return (
    <div
      ref={ref}
      className={`photo ${className}`}
      data-in={(seen || alreadyVisible) && active ? "" : undefined}
      style={{ aspectRatio: ratio, transitionDelay: `${delay}ms` }}
    >
      <motion.img
        src={pic.src}
        alt={pic.alt}
        loading="lazy"
        decoding="async"
        style={{ y, objectPosition: pic.pos ?? "center" }}
        className="absolute inset-x-0 top-[-11%] h-[122%] w-full object-cover"
      />
    </div>
  );
}

/** Cross-fades between photos as `index` changes. */
export function PhotoSwap({ pics, index, ratio = "4 / 3" }: { pics: Pic[]; index: number; ratio?: string }) {
  return (
    <div className="photo" data-in="" style={{ aspectRatio: ratio }}>
      {pics.map((p, i) => (
        <img
          key={p.src}
          src={p.src}
          alt={i === index ? p.alt : ""}
          loading="lazy"
          decoding="async"
          style={{ objectPosition: p.pos ?? "center", opacity: i === index ? 1 : 0, transform: i === index ? "scale(1)" : "scale(1.06)" }}
          className="absolute inset-0 size-full object-cover transition-[opacity,transform] duration-[900ms] [transition-timing-function:var(--ease-out)]"
        />
      ))}
    </div>
  );
}
