import { useEffect } from "react";
import Lenis from "lenis";

let instance: Lenis | null = null;

export const getLenis = () => instance;

/** Scrolls to an element (or the top) using Lenis when it is active. */
export function scrollToTarget(target: HTMLElement | number, offset = 0) {
  if (instance) {
    if (typeof target === "number") instance.scrollTo(target);
    else instance.scrollTo(target, { offset });
    return;
  }
  if (typeof target === "number") window.scrollTo({ top: target, behavior: "smooth" });
  else target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95, smoothWheel: true });
    instance = lenis;

    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      instance = null;
    };
  }, []);

  return null;
}
