import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { Fade, Lines, Draw } from "../components/motion/Reveal";
import { InquiryForm } from "../components/forms/InquiryForm";
import { TLink } from "../components/shell/Transition";
import { faqs, SITE } from "../data/site";

const description =
  "Tell Prudence Services what your business is working toward — finance, procurement, ERP systems, websites or e-commerce — and start the conversation.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Prudence Services" },
      { name: "description", content: description },
      { property: "og:title", content: "Contact — Prudence Services" },
      { property: "og:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div>
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-t border-ink/25 last:border-b">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
              className="group grid w-full grid-cols-[2.6rem_1fr_auto] items-baseline gap-3 py-6 text-left md:grid-cols-[4rem_1fr_auto]"
            >
              <span className={`label tabular transition-colors duration-500 ${isOpen ? "text-signal" : "text-ink-soft"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="display-s transition-transform duration-700 [transition-timing-function:var(--ease-out)] group-hover:translate-x-2">
                {f.q}
              </span>
              <Plus
                className={`size-5 transition-transform duration-500 ${isOpen ? "rotate-45 text-signal" : ""}`}
                strokeWidth={1.4}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-700 [transition-timing-function:var(--ease-out)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="max-w-[58ch] pb-7 pl-[calc(2.6rem+0.75rem)] text-[1.02rem] leading-snug text-ink-soft md:pl-[calc(4rem+0.75rem)]">
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ContactPage() {
  return (
    <>
      <section data-tone="paper" className="relative overflow-hidden bg-paper pb-24 pt-[calc(76px+clamp(3rem,10vh,8rem))] md:pb-32">
        <div className="wrap">
          <p className="label">(Contact)</p>
          <Lines
            as="h1"
            immediate
            delay={80}
            className="display-xl mt-8"
            lines={["Let's build", <em key="e">what your</em>, <span key="d">business needs<span className="text-signal">.</span></span>]}
          />
        </div>

        <div className="wrap mt-20 grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Fade>
              <p className="max-w-[36ch] text-[1.2rem] leading-snug">
                Share the shape of the problem and the outcome you're after. We'll come back with a
                clear view of the work involved and what it would take.
              </p>
            </Fade>

            <dl className="mt-14">
              {(
                [
                  ["Write", SITE.email, `mailto:${SITE.email}`],
                  ["Call", SITE.phone, `tel:${SITE.phone.replace(/[^+\d]/g, "")}`],
                  ["Hours", SITE.hours, ""],
                ] as const
              ).map(([k, v, href], i) => (
                <div key={k}>
                  <Draw delay={i * 80} className="bg-ink/25" />
                  <Fade delay={i * 80} className="grid grid-cols-[5rem_1fr] items-baseline gap-4 py-5">
                    <dt className="label text-ink-soft">{k}</dt>
                    <dd className="display-s break-all">
                      {href ? (
                        <a href={href} className="navlink" data-cursor={k}>
                          {v}
                        </a>
                      ) : (
                        v
                      )}
                    </dd>
                  </Fade>
                </div>
              ))}
              <Draw delay={240} className="bg-ink/25" />
            </dl>
          </div>

          <Fade delay={150} className="lg:col-span-7">
            <div className="hs-ink rounded-[1.75rem] bg-sheet p-6 md:p-10">
              <p className="label text-ink-soft">Enquiry</p>
              <div className="mt-6">
                <InquiryForm />
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section data-tone="paper" className="relative bg-paper-deep py-24 md:py-36">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label">(Questions)</p>
            <Lines as="h2" className="display-l mt-6" lines={["Asked", <em key="e">often</em>]} />
          </div>
          <div className="lg:col-span-8">
            <Faq />
          </div>
        </div>
      </section>

      <section data-tone="ink" className="relative bg-band py-24 text-band-fg md:py-32">
        <div className="wrap flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Lines
            as="h2"
            className="display-m"
            lines={["Prefer to look", <em key="e">around first?</em>]}
          />
          <div className="flex flex-wrap gap-3">
            <TLink to="/services" className="pill label">
              Explore services
            </TLink>
            <TLink to="/portfolio" className="pill label">
              See our work
            </TLink>
          </div>
        </div>
      </section>
    </>
  );
}
