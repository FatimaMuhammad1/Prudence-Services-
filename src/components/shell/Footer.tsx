import { ArrowUpRight, Instagram, Linkedin, Twitter } from "lucide-react";
import { TLink } from "./Transition";
import { Wordmark } from "./Header";
import { Doodle, Star } from "../decor/Doodles";
import { SITE, services } from "../../data/site";

const exploreLinks = [
  ["/", "Home"] as const,
  ["/services", "Services"] as const,
  ["/portfolio", "Work"] as const,
  ["/contact", "Contact"] as const,
];

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "X" },
];

export function Footer() {
  return (
    <footer data-tone="ink" className="relative overflow-hidden bg-band text-band-fg">
      <div className="wrap pb-10 pt-20 md:pt-28">
        <div className="grid gap-14 border-b border-band-fg/15 pb-16 lg:grid-cols-12 lg:gap-10">
          <div className="relative lg:col-span-6">
            <Star className="absolute -left-1 -top-6 size-4 text-signal/70" float />
            <p className="label text-band-fg/55">Say hello</p>
            <h2 className="display-l mt-5 max-w-[14ch]">
              Let's talk about <em className="text-signal">your business.</em>
            </h2>
            <a
              href={`mailto:${SITE.email}`}
              className="group mt-8 inline-flex items-center gap-3 text-[1.15rem] font-medium"
            >
              <span className="border-b border-band-fg/40 pb-0.5 transition-colors duration-300 group-hover:border-signal group-hover:text-signal">
                {SITE.email}
              </span>
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.6} />
            </a>
            <div className="absolute left-[15rem] top-0 hidden size-px md:block">
              <Doodle text="We'd love to hear from you." rotate={-4} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6">
            <div>
              <p className="label text-band-fg/55">Explore</p>
              <ul className="mt-5 space-y-2.5 text-[0.95rem]">
                {exploreLinks.map(([to, label]) => (
                  <li key={to}>
                    <TLink to={to} className="navlink text-band-fg/85">
                      {label}
                    </TLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label text-band-fg/55">Services</p>
              <ul className="mt-5 space-y-2.5 text-[0.95rem]">
                {services.map((s) => (
                  <li key={s.id}>
                    <TLink to="/services" hash={s.id} className="navlink text-band-fg/85">
                      {s.name}
                    </TLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="label text-band-fg/55">Contact</p>
              <ul className="mt-5 space-y-2.5 text-[0.95rem]">
                <li>
                  <a className="navlink text-band-fg/85" href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}>
                    {SITE.phone}
                  </a>
                </li>
                <li className="text-band-fg/60">{SITE.hours}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Wordmark className="text-[1.15rem]" />

          <div className="flex gap-3">
            {socials.map((s) => (
              <span
                key={s.label}
                aria-label={`${s.label} (coming soon)`}
                title={`${s.label} — coming soon`}
                className="grid size-9 place-items-center rounded-full border border-band-fg/25 text-band-fg/70"
              >
                <s.icon className="size-4" strokeWidth={1.6} />
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-band-fg/15 pt-6 text-[0.82rem] text-band-fg/55 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <span className="flex gap-5">
            <span>Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
