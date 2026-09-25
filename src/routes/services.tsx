import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { TLink } from "../components/shell/Transition";
import { Fade, Lines, Draw } from "../components/motion/Reveal";
import { Photo } from "../components/motion/Photo";
import { servicePhotos } from "../data/photos";
import { FinalCTA } from "../components/home/FinalCTA";
import { processSteps, services, type Service } from "../data/site";

const description =
  "Finance & bookkeeping, procurement, finance & ERP systems, website development, e-commerce development and ongoing e-commerce support — six disciplines, one consultancy.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Prudence Services" },
      { name: "description", content: description },
      { property: "og:title", content: "Services — Prudence Services" },
      { property: "og:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServiceBlock({ service, flip }: { service: Service; flip: boolean }) {
  return (
    <section
      id={service.id}
      data-tone="paper"
      className={`relative scroll-mt-16 py-24 md:py-36 ${flip ? "bg-paper-deep" : "bg-paper"}`}
    >
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        <div className={`lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}>
          <Draw className="bg-ink/25" />
          <p className="label mt-6 flex items-center gap-4">
            <span className="tabular text-signal">{service.n}</span>
            <span>{service.group === "business" ? "Business" : "Technology"}</span>
          </p>
          <Lines as="h2" className="display-l mt-8" lines={[service.name]} />
          <Fade as="p" delay={150} className="mt-4 text-[1.35rem] italic text-ink-soft">
            {service.short}
          </Fade>
          <Fade as="p" delay={220} className="mt-8 max-w-[46ch] text-[1.08rem] leading-snug">
            {service.desc}
          </Fade>

          <Fade delay={280}>
            <ul className="mt-10 grid gap-x-8 sm:grid-cols-2">
              {service.points.map((p) => (
                <li key={p} className="flex gap-3 border-t border-ink/20 py-3.5 text-[0.98rem]">
                  <span className="label text-signal">+</span>
                  {p}
                </li>
              ))}
            </ul>
          </Fade>

          <Fade delay={340} className="mt-10">
            <TLink to="/contact" cursor="Talk" className="pill label">
              Discuss {service.name.toLowerCase()}
              <ArrowUpRight className="size-3.5" strokeWidth={1.6} />
            </TLink>
          </Fade>
        </div>

        <div className={`lg:col-span-5 ${flip ? "lg:order-1" : "lg:col-start-8"}`}>
          <Photo pic={servicePhotos[service.id]} ratio="4 / 5" className="mx-auto w-full max-w-[30rem]" />
        </div>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <>
      <section data-tone="paper" className="relative overflow-hidden bg-paper pb-16 pt-[calc(76px+clamp(2.5rem,7vh,5rem))] md:pb-20">
        <div className="wrap">
          <p className="label">(Services)</p>
          <Lines
            as="h1"
            immediate
            delay={80}
            className="display-l mt-6"
            lines={["Six", <em key="e">disciplines,</em>, <span key="d">one desk<span className="text-signal">.</span></span>]}
          />

          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <Fade delay={400} as="p" className="max-w-[46ch] text-[1.2rem] leading-snug md:col-span-6 md:col-start-7">
              We work across the parts of a business that keep it honest and keep it moving — the
              books, the buying, the systems and the storefront — so one team is accountable for how
              they fit together.
            </Fade>
          </div>

          <Fade delay={550} className="label mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/25 pt-5">
            {services.map((s) => (
              <TLink key={s.id} to="/services" hash={s.id} className="navlink">
                <span className="tabular text-signal">{s.n}</span> {s.name}
              </TLink>
            ))}
          </Fade>
        </div>
      </section>

      {services.map((s, i) => (
        <ServiceBlock key={s.id} service={s} flip={i % 2 === 1} />
      ))}

      <section data-tone="ink" className="relative bg-band py-28 text-band-fg md:py-40">
        <div className="wrap">
          <p className="label text-band-fg/70">(How we work)</p>
          <Lines
            as="h2"
            className="display-l mt-6"
            lines={["From a first conversation", <em key="e">to a handover you own.</em>]}
          />

          <ol className="mt-20 grid gap-x-8 gap-y-12 md:grid-cols-5">
            {processSteps.map((step, i) => (
              <li key={step.n} className="group">
                <Draw className="bg-band-fg/30" delay={i * 90} />
                <Fade delay={i * 90}>
                  <p className="label tabular mt-5 text-signal">{step.n}</p>
                  <h3 className="display-s mt-6 transition-transform duration-700 [transition-timing-function:var(--ease-out)] group-hover:translate-x-2">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[0.98rem] leading-snug text-band-fg/70">{step.text}</p>
                </Fade>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
