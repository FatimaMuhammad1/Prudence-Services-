import { Check } from "lucide-react";
import { Fade } from "../motion/Reveal";
import { Photo } from "../motion/Photo";
import { Doodle, Loop } from "../decor/Doodles";
import { whyChoosePhoto } from "../../data/photos";

const points = [
  "Tailored solutions for your unique needs",
  "Experienced and dedicated team",
  "Modern tools and efficient processes",
  "Ongoing support, always",
];

export function WhyChooseUs() {
  return (
    <section data-tone="paper" className="relative overflow-hidden bg-paper-deep py-16 md:py-20">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-3">
          <p className="label text-signal">Why Choose Us</p>
          <h2 className="display-l mt-5">
            Your Goals
            <br />
            <em className="text-signal">Our Focus.</em>
          </h2>
        </div>

        <ul className="grid gap-5 lg:col-span-3">
          {points.map((p, i) => (
            <Fade as="li" delay={i * 80} key={p} className="flex items-start gap-3">
              <Check className="mt-0.5 size-4 shrink-0 text-signal" strokeWidth={2.2} />
              <span className="text-[0.95rem] text-ink-soft">{p}</span>
            </Fade>
          ))}
        </ul>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto w-full max-w-[24rem]">
            <div className="blob-round absolute -inset-[8%] bg-paper" />
            <Loop className="pointer-events-none absolute -bottom-6 -right-8 size-24 text-ink/20" />
            <Photo pic={whyChoosePhoto} ratio="6 / 5" className="blob-a relative" />
            <Doodle text="Progress looks good on you." className="-top-2" rotate={5} />
          </div>
        </div>
      </div>
    </section>
  );
}
