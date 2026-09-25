import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

/** Reads the theme the boot script already applied, so there's no flash. */
function currentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset["theme"] === "dark" ? "dark" : "light";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(currentTheme());
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset["theme"] = next;
    try {
      localStorage.setItem("pru-theme", next);
    } catch {
      /* storage unavailable — the choice just won't persist */
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`grid size-10 shrink-0 place-items-center rounded-full border border-current/30 transition-colors duration-300 hover:border-signal hover:text-signal ${className}`}
    >
      {theme === "dark" ? (
        <Sun className="size-4" strokeWidth={1.6} />
      ) : (
        <Moon className="size-4" strokeWidth={1.6} />
      )}
    </button>
  );
}
