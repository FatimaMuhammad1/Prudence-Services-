import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { getLenis, scrollToTarget } from "./SmoothScroll";

export type RoutePath = "/" | "/services" | "/portfolio" | "/contact";

const labels: Record<RoutePath, string> = {
  "/": "Home",
  "/services": "Services",
  "/portfolio": "Work",
  "/contact": "Contact",
};

interface TransitionApi {
  go: (to: RoutePath, hash?: string) => void;
}

const TransitionContext = createContext<TransitionApi>({ go: () => {} });

export const useGo = () => useContext(TransitionContext).go;

function scrollToHash(hash: string, delay = 0) {
  window.setTimeout(() => {
    const el = document.getElementById(hash);
    if (el) scrollToTarget(el, -20);
  }, delay);
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [phase, setPhase] = useState<"idle" | "in" | "out">("idle");
  const [label, setLabel] = useState("");
  const busy = useRef(false);
  const pathRef = useRef(pathname);
  pathRef.current = pathname;

  const go = useCallback(
    (to: RoutePath, hash?: string) => {
      if (busy.current) return;

      if (to === pathRef.current) {
        if (hash) scrollToHash(hash);
        else scrollToTarget(0);
        return;
      }

      const target = hash ? { to, hash } : { to };
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        void navigate(target).then(() => {
          window.scrollTo(0, 0);
          if (hash) scrollToHash(hash, 60);
        });
        return;
      }

      busy.current = true;
      setLabel(labels[to]);
      setPhase("in");

      window.setTimeout(async () => {
        await navigate(target);
        getLenis()?.scrollTo(0, { immediate: true });
        window.scrollTo(0, 0);
        window.setTimeout(() => {
          setPhase("out");
          if (hash) scrollToHash(hash, 500);
          window.setTimeout(() => {
            setPhase("idle");
            busy.current = false;
          }, 900);
        }, 140);
      }, 760);
    },
    [navigate],
  );

  return (
    <TransitionContext.Provider value={{ go }}>
      {children}
      <div className="ptrans" data-phase={phase} aria-hidden="true">
        <div className="ptrans__panel">
          <p className="ptrans__label">
            {label}
            <i>.</i>
          </p>
        </div>
      </div>
    </TransitionContext.Provider>
  );
}

interface TLinkProps {
  to: RoutePath;
  hash?: string | undefined;
  children: ReactNode;
  className?: string | undefined;
  style?: CSSProperties | undefined;
  cursor?: string | undefined;
  onNavigate?: (() => void) | undefined;
  onPointerEnter?: (() => void) | undefined;
  onFocus?: (() => void) | undefined;
  "aria-label"?: string | undefined;
  "data-active"?: boolean | undefined;
}

/** A router link that plays the page transition instead of jumping. */
export function TLink({
  to,
  hash,
  children,
  className,
  style,
  cursor,
  onNavigate,
  onPointerEnter,
  onFocus,
  ...aria
}: TLinkProps) {
  const go = useGo();
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    onNavigate?.();
    go(to, hash);
  };

  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      className={className}
      style={style}
      onClick={onClick}
      onPointerEnter={onPointerEnter}
      onFocus={onFocus}
      {...(cursor ? { "data-cursor": cursor } : {})}
      {...aria}
    >
      {children}
    </Link>
  );
}
