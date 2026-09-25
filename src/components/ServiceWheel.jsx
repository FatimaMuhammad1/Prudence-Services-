import { useEffect, useState } from "react";
import { services } from "../data/services";
import { LogoMark } from "./Logo";

const pad = (n) => String(n).padStart(2, "0");

export default function ServiceWheel() {
  const n = services.length;
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % n), 3000);
    return () => clearInterval(id);
  }, [n]);

  const point = (deg, r) => {
    const a = (deg * Math.PI) / 180;
    return [50 + r * Math.cos(a), 50 + r * Math.sin(a)];
  };

  return (
    <div className="wheel-wrap" aria-hidden="true">
      <div className="wheel">
        <div className="wheel-ring">
          <svg className="wheel-lines" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="49" />
            <circle className="orbit" cx="50" cy="50" r="36" />
            <circle className="orbit-inner" cx="50" cy="50" r="19" />
            {Array.from({ length: 72 }, (_, i) => {
              const [x1, y1] = point(i * 5, i % 6 === 0 ? 45.5 : 47);
              const [x2, y2] = point(i * 5, 48.4);
              return <line key={i} className="tick" x1={x1} y1={y1} x2={x2} y2={y2} />;
            })}
            {services.map((s, i) => {
              const [x, y] = point(-90 + (360 / n) * (i + 0.5) - 180 / n, 49);
              return (
                <g key={s.slug}>
                  <line x1="50" y1="50" x2={x} y2={y} />
                  <circle className="node" cx={x} cy={y} r="1" />
                </g>
              );
            })}
          </svg>
        </div>
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={s.slug} className={`wheel-item ${i === active ? "is-active" : ""}`} style={{ "--base": `${-90 + (360 / n) * i}deg` }}>
              <span className="wheel-icon"><Icon size={16} /></span>
              <span className="wheel-label">{s.title}</span>
            </div>
          );
        })}
        <div className="wheel-center"><LogoMark size={56} /></div>
      </div>

      <div className="wheel-caption" key={active}>
        <strong>{services[active].title}</strong>
        <span>{services[active].summary}</span>
      </div>

      <div className="wheel-progress">
        <span>{pad(active + 1)}</span>
        <div className="progress-dashes">
          {services.map((s, i) => (
            <i key={s.slug} className={i === active ? "on" : ""} />
          ))}
        </div>
        <span>{pad(n)}</span>
      </div>
    </div>
  );
}
