import { Fade, Lines } from "../motion/Reveal";
import { Underline } from "../decor/Doodles";
import { processSteps } from "../../data/site";

export function HowWeWork() {
  return (
    <section data-tone="paper" className="relative overflow-hidden bg-paper py-16 md:py-20">
      <div className="wrap">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label text-signal">How We Work</p>
            <Lines
              as="h2"
              className="display-l mt-5"
              lines={[
                "Five steps,",
                <span key="e" className="relative inline-block text-signal">
                  <em>no surprises</em>
                  <Underline className="absolute -bottom-2 left-0 w-full text-signal/60" />
                </span>,
              ]}
            />
          </div>
          <Fade as="p" delay={100} className="max-w-[30ch] text-[1rem] text-ink-soft">
            From a first conversation to a handover you actually own — here's the shape of an
            engagement.
          </Fade>
        </div>

        <ol className="relative mt-16 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, i) => (
            <Fade key={step.n} delay={i * 90} className="group">
              <div className="flex items-center gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/20 font-display text-[1.1rem] transition-colors duration-300 group-hover:border-signal group-hover:text-signal">
                  {step.n}
                </span>
                {i < processSteps.length - 1 && <span className="hidden h-px flex-1 bg-ink/15 lg:block" />}
              </div>
              <h3 className="mt-5 text-[1.08rem] font-medium transition-transform duration-500 [transition-timing-function:var(--ease-out)] group-hover:translate-x-1.5">
                {step.title}
              </h3>
              <p className="mt-2.5 max-w-[24ch] text-[0.92rem] leading-relaxed text-ink-soft">{step.text}</p>
            </Fade>
          ))}
        </ol>
      </div>
    </section>
  );
}
