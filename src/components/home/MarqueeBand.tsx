import { Marquee } from "../motion/Marquee";
import { services } from "../../data/site";

export function MarqueeBand() {
  return (
    <section data-tone="ink" className="relative bg-band py-6 text-band-fg">
      <div className="label">
        <Marquee items={services.map((s) => s.name)} speed={38} />
      </div>
    </section>
  );
}
