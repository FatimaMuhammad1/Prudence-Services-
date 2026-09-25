import { ArrowRight } from "lucide-react";
import { TLink } from "../shell/Transition";
import { Fade, Lines } from "../motion/Reveal";
import { Magnetic } from "../motion/Magnetic";
import { Loop } from "../decor/Doodles";

export function FinalCTA() {
  return (
    <section
      id="contact"
      data-tone="red"
      className="relative overflow-hidden bg-amber py-14 text-ink md:py-16"
    >
      <Loop className="pointer-events-none absolute -bottom-6 -right-6 hidden size-32 text-ink/25 md:block" />

      <div className="wrap flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <Lines
          as="h2"
          className="display-l max-w-[18ch]"
          lines={["Let's Build Something", <em key="e">Great Together.</em>]}
        />

        <Fade delay={150} className="flex flex-col items-start gap-5 lg:items-end lg:text-right">
          <p className="max-w-[30ch] text-[1rem] text-ink-soft">
            Have a project in mind or just want to know more? We'd love to hear from you.
          </p>
          <Magnetic>
            <TLink
              to="/contact"
              className="label inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-paper transition-colors duration-300 hover:bg-signal-deep"
            >
              Get in Touch
              <ArrowRight className="size-3.5" strokeWidth={1.6} />
            </TLink>
          </Magnetic>
        </Fade>
      </div>
    </section>
  );
}
