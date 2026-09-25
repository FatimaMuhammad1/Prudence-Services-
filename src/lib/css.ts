import type { CSSProperties } from "react";

/** Type-safe way to pass CSS custom properties through the style prop. */
export const vars = (v: Record<string, string | number>): CSSProperties =>
  v as unknown as CSSProperties;

export const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n));
