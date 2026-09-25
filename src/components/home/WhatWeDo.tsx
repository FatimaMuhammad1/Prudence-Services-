import { Database, LifeBuoy, Laptop, Package, Settings2, ShoppingBag, type LucideIcon } from "lucide-react";
import { TLink } from "../shell/Transition";
import { Fade, Lines } from "../motion/Reveal";
import { Doodle, Leaf } from "../decor/Doodles";
import { services, type ServiceId } from "../../data/site";

const icons: Record<ServiceId, LucideIcon> = {
  finance: Database,
  procurement: Package,
  erp: Settings2,
  web: Laptop,
  ecommerce: ShoppingBag,
  support: LifeBuoy,
};

export function WhatWeDo() {
  return (
    <section data-tone="paper" className="relative overflow-hidden bg-paper py-16 md:py-20">
      <div className="pointer-events-none absolute -left-40 top-10 h-[26rem] w-[36rem] rounded-[50%] bg-paper-deep blur-[2px]" />
      <Leaf className="pointer-events-none absolute right-10 top-10 hidden size-14 text-signal/50 lg:block" />
      <Doodle text="One team, six disciplines." className="right-8 top-32 hidden xl:block" rotate={3} />

      <div className="wrap relative grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <p className="label text-signal">What We Do</p>
          <Lines
            as="h2"
            className="display-l mt-5"
            lines={["Comprehensive", "Business Support"]}
          />
          <Fade
            as="p"
            delay={150}
            className="mt-6 max-w-[34ch] text-[1.02rem] leading-relaxed text-ink-soft"
          >
            From finance and ERP systems to web development and e-commerce support, we provide
            end-to-end solutions tailored to your goals.
          </Fade>
          <Fade delay={250} className="mt-7">
            <TLink to="/services" className="label navlink">
              View All Services →
            </TLink>
          </Fade>
        </div>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.id];
            return (
              <Fade key={s.id} delay={(i % 3) * 90}>
                <TLink to="/services" hash={s.id} className="group block">
                  <span className="grid size-14 place-items-center rounded-full border border-ink/20 text-ink transition-all duration-500 [transition-timing-function:var(--ease-out)] group-hover:-translate-y-1 group-hover:rotate-6 group-hover:border-signal group-hover:bg-signal group-hover:text-paper">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 max-w-[18ch] text-[1.02rem] font-medium leading-snug transition-transform duration-500 [transition-timing-function:var(--ease-out)] group-hover:translate-x-1">
                    {s.name}
                  </h3>
                  <p className="mt-2 max-w-[28ch] text-[0.92rem] text-ink-soft">{s.short}</p>
                </TLink>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
