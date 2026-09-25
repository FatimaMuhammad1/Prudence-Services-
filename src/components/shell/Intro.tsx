import { useEffect, useState } from "react";
import { vars } from "../../lib/css";

const LETTERS = "Prudence".split("");
const READY_AT = 2450; // hero starts revealing as the panel lifts
const DONE_AT = 3600;

let introStart = 0;

/**
 * ready: the brand reveal has handed over to the page.
 * played: this visit actually showed the reveal (used to shorten delays otherwise).
 */
export function useIntro() {
  const [state, setState] = useState({ ready: false, played: false });

  useEffect(() => {
    if (document.documentElement.dataset["intro"] !== "playing") {
      setState({ ready: true, played: false });
      return;
    }
    const on = () => setState({ ready: true, played: true });
    window.addEventListener("pru:intro-done", on, { once: true });
    return () => window.removeEventListener("pru:intro-done", on);
  }, []);

  return state;
}

export const useIntroReady = () => useIntro().ready;

/**
 * Full-screen brand reveal. It is driven entirely by CSS keyframes so it
 * dismisses itself even if scripts stall; the effect below only tells the
 * page when to start revealing and records that it has been seen.
 */
export function Intro() {
  useEffect(() => {
    const html = document.documentElement;
    if (html.dataset["intro"] !== "playing") return;

    if (!introStart) introStart = performance.now();
    const elapsed = performance.now() - introStart;

    const finish = () => {
      html.dataset["intro"] = "done";
      try {
        sessionStorage.setItem("pru-intro", "1");
      } catch {
        /* storage unavailable */
      }
    };

    const t1 = window.setTimeout(
      () => window.dispatchEvent(new Event("pru:intro-done")),
      Math.max(0, READY_AT - elapsed),
    );
    const t2 = window.setTimeout(finish, Math.max(0, DONE_AT - elapsed));

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro__panel">
        <div className="intro__word">
          {LETTERS.map((char, i) => (
            <span key={i} className="intro__ch">
              <span style={vars({ "--i": i })}>{char}</span>
            </span>
          ))}
          <span className="intro__dot">.</span>
        </div>

        <div className="intro__meta label">
          <div>
            <span className="intro__fade" style={vars({ "--d": "0.5s" })}>
              Prudence Services
            </span>
            <span className="intro__fade" style={vars({ "--d": "0.7s" })}>
              Business consultancy
            </span>
          </div>
          <div>
            <span className="intro__count tabular" />
            <span className="intro__fade" style={vars({ "--d": "1.7s" })}>
              Business, accounted for.
            </span>
          </div>
        </div>

        <div className="intro__bar" />
      </div>
    </div>
  );
}
