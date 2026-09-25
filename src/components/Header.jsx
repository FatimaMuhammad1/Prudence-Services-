import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiArrowRight, FiMoon, FiSun } from "react-icons/fi";
import Logo from "./Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [lastPathname, setLastPathname] = useState(location.pathname);

  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname);
    setOpen(false);
  }

  const [theme, setTheme] = useState(document.documentElement.dataset.theme || "light");

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch { /* storage unavailable */ }
    setTheme(next);
  };

  const close = () => setOpen(false);
  const cls = ({ isActive }) => (isActive ? "active" : "");

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" onClick={close} aria-label="Prudence Services home">
          <Logo />
        </Link>

        <nav className={`main-nav ${open ? "is-open" : ""}`}>
          <ul>
            <li><NavLink to="/services" className={cls} onClick={close}>Services</NavLink></li>
            <li><NavLink to="/portfolio" className={cls} onClick={close}>Portfolio</NavLink></li>
            <li><Link to="/#contact" onClick={close}>Contact</Link></li>
          </ul>
          <Link to="/#contact" className="btn btn-primary nav-cta" onClick={close}>
            Get a Quote <FiArrowRight />
          </Link>
        </nav>

        <button
          className="theme-toggle"
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          onClick={toggleTheme}
        >
          {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>

        <button
          className="menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
}
