import { ArrowRight } from "lucide-react";
import { TLink } from "../shell/Transition";
import { Fade } from "../motion/Reveal";
import { Photo } from "../motion/Photo";
import { Counter } from "../Counter";
import { Doodle, Loop, Star } from "../decor/Doodles";
import { aboutPhotoA, aboutPhotoB } from "../../data/photos";

const stats: [number, string, string][] = [
  [8, "+", "Happy Clients"],
  [10, "+", "Projects Delivered"],
  [5, "+", "Industries Served"],
];

export function AboutBand() {
  return (
    <section data-tone="paper" className="relative overflow-hidden bg-paper py-16 md:py-20">
      <div className="wrap grid items-center gap-16 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[27rem] pb-6 pl-4 pt-4">
            <Loop className="pointer-events-none absolute -inset-x-4 -inset-y-6 text-ink/25" />
            <div className="relative w-[68%]">
              <Photo pic={aboutPhotoA} ratio="4 / 5" className="blob-a" />
              <Doodle text="Built for real businesses." className="top-0" rotate={4} />
            </div>
            <div className="absolute bottom-0 right-0 w-[56%]">
              <Photo pic={aboutPhotoB} ratio="4 / 5" className="blob-b" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <p className="label text-signal">About Prudence</p>
          <h2 className="display-l mt-5">
            More Than Just a Service — We're <em className="text-signal">Your Partner</em>.
          </h2>
          <Fade
            as="p"
            delay={150}
            className="mt-6 max-w-[46ch] text-[1.02rem] leading-relaxed text-ink-soft"
          >
            At Prudence, we believe in practical solutions, thoughtful strategy and long-term
            support. We work closely with our clients to understand their unique needs and turn
            their goals into sustainable growth.
          </Fade>
          <Fade delay={250} className="mt-8">
            <TLink
              to="/services"
              className="label inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 transition-colors duration-300 hover:border-signal hover:text-signal"
            >
              Learn More
              <ArrowRight className="size-3.5" strokeWidth={1.6} />
            </TLink>
          </Fade>
        </div>

        <div className="relative flex items-center lg:col-span-3 lg:h-full">
          <div className="hidden h-full w-px bg-ink/15 lg:mr-10 lg:block" />
          <Fade className="flex flex-1 flex-row gap-8 sm:flex-col sm:gap-10">
            {stats.map(([n, suffix, label]) => (
              <div key={label}>
                <p className="font-display text-[clamp(2rem,3.4vw,2.8rem)] leading-none">
                  <Counter value={n} suffix={suffix} />
                </p>
                <p className="mt-2 text-[0.9rem] text-ink-soft">{label}</p>
              </div>
            ))}
          </Fade>
          <Star className="absolute -right-3 top-1/2 hidden size-6 -translate-y-1/2 text-ink/40 lg:block" />
        </div>
      </div>
    </section>
  );
}
