import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TLink, type RoutePath } from "./Transition";
import { getLenis } from "./SmoothScroll";
import { Star } from "../decor/Doodles";
import { ThemeToggle } from "./ThemeToggle";
import { SITE } from "../../data/site";
import { vars } from "../../lib/css";

type Tone = "paper" | "ink" | "red";

const links: { to: RoutePath; label: string }[] = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/contact", label: "Contact" },
];

const menuLinks: { to: RoutePath; label: string }[] = [{ to: "/", label: "Home" }, ...links];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-display leading-none tracking-[0.2em] ${className}`}>
      <Star className="size-[0.85em] shrink-0 text-signal" />
      <span className="uppercase">Prudence</span>
    </span>
  );
}

function Menu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (open) getLenis()?.stop();
    else getLenis()?.start();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      getLenis()?.start();
    };
  }, [open, onClose]);

  const items = menuLinks;

  return (
    <div className="menu" data-open={open} data-tone="ink" role="dialog" aria-modal="true" aria-label="Menu" aria-hidden={!open}>
      <div className="wrap flex h-full flex-col justify-between pb-8">
        <div className="flex h-[76px] items-center justify-between">
          <Wordmark className="text-[1.25rem]" />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button type="button" className="pill label" onClick={onClose}>
              Close
            </button>
          </div>
        </div>

        <nav className="flex flex-col gap-1" aria-label="Menu">
          {items.map((item, i) => (
            <span key={item.to} className="block overflow-hidden py-1">
              <TLink
                to={item.to}
                onNavigate={onClose}
                className="menu__item display-l block"
                data-active={pathname === item.to}
              >
                <span style={vars({ "--i": i })}>
                  {item.label}
                  {pathname === item.to && <em className="ml-3 text-signal">•</em>}
                </span>
              </TLink>
            </span>
          ))}
        </nav>

        <div className="label grid gap-2 text-band-fg/70 sm:grid-cols-3">
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <a href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}>{SITE.phone}</a>
          <span>{SITE.hours}</span>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [tone, setTone] = useState<Tone>("paper");
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    let frame = 0;

    const probe = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0 && y > 260);
        lastY.current = y;
      }
      if (y < 120) setHidden(false);

      let next: Tone = "paper";
      document.querySelectorAll<HTMLElement>("[data-tone]").forEach((el) => {
        if (el.closest("header")) return;
        const r = el.getBoundingClientRect();
        if (r.top <= 38 && r.bottom > 38) next = (el.dataset["tone"] as Tone | undefined) ?? "paper";
      });
      setTone(next);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(probe);
    };

    probe();
    const settle = window.setTimeout(probe, 500);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.clearTimeout(settle);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  return (
    <>
      <header className="hdr fixed inset-x-0 top-0 z-50" data-tone={tone} data-hidden={hidden && !open}>
        <div className="wrap flex h-[76px] items-center justify-between">
          <TLink to="/" className="text-[1.25rem]" aria-label="Prudence Services — home">
            <Wordmark />
          </TLink>

          <nav className="label hidden items-center gap-10 md:flex" aria-label="Primary">
            {links.map((l) => (
              <TLink key={l.to} to={l.to} className="navlink" data-active={pathname === l.to}>
                {l.label}
              </TLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <TLink
              to="/contact"
              className="label hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-paper transition-colors duration-300 hover:bg-signal-deep md:inline-flex"
            >
              Let's Talk
              <ArrowRight className="size-3.5" strokeWidth={1.6} />
            </TLink>
            <button
              type="button"
              className="pill label md:hidden"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-haspopup="dialog"
            >
              Menu
            </button>
          </div>
        </div>
      </header>
      <Menu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
