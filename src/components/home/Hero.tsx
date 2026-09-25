import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Play } from "lucide-react";
import { TLink } from "../shell/Transition";
import { useIntro } from "../shell/Intro";
import { Fade, Lines } from "../motion/Reveal";
import { Photo } from "../motion/Photo";
import { Magnetic } from "../motion/Magnetic";
import { Doodle, HeroScribble, Loop, Star } from "../decor/Doodles";
import { aboutPhotoA, heroPhoto } from "../../data/photos";

export function Hero() {
  const { ready, played } = useIntro();
  const t = (ms: number) => Math.round(ms * (played ? 1 : 0.4));
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBig = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const ySmall = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={ref} data-tone="paper" className="relative overflow-hidden bg-paper pt-[76px]">
      <div className="wrap grid min-h-[78svh] items-center gap-14 py-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Fade active={ready} delay={t(100)} className="label flex items-center gap-3 text-ink-mute">
            <span className="size-1.5 rounded-full bg-signal" />
            Strategy · Systems · Growth
          </Fade>

          <Lines
            as="h1"
            active={ready}
            immediate
            delay={t(150)}
            className="display-xl mt-6"
            lines={[
              "Smarter Solutions",
              <em key="b" className="text-signal">
                for a Stronger Tomorrow.
              </em>,
            ]}
          />

          <Fade
            active={ready}
            delay={t(700)}
            as="p"
            className="mt-7 max-w-[38ch] text-[1.1rem] leading-relaxed text-ink-soft"
          >
            We help businesses streamline operations, manage finances and build digital solutions —
            so you can focus on what matters most.
          </Fade>

          <Fade active={ready} delay={t(850)} className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Magnetic>
              <TLink
                to="/services"
                className="label inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-paper transition-colors duration-300 hover:bg-signal-deep"
              >
                Explore Our Services
                <ArrowRight className="size-3.5" strokeWidth={1.6} />
              </TLink>
            </Magnetic>
            <TLink to="/portfolio" className="group flex items-center gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/25 transition-transform duration-300 group-hover:scale-110 group-hover:border-signal group-hover:text-signal">
                <Play className="size-3.5 translate-x-px" strokeWidth={1.6} fill="currentColor" />
              </span>
              <span className="label text-ink-soft">Watch How We Help</span>
            </TLink>
          </Fade>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[6/5] w-full max-w-[36rem]">
            <HeroScribble className="pointer-events-none absolute -inset-x-10 -inset-y-8 -z-30 text-ink/10" />
            <div className="blob-a absolute right-[12%] top-[-8%] -z-20 h-[70%] w-[50%] -rotate-12 bg-signal/60" />
            <div className="blob-b absolute -right-[10%] top-[12%] -z-10 h-[65%] w-[60%] rotate-6 bg-signal/35" />

            {/* Doodles perfectly matching the screenshot */}
            <Loop className="pointer-events-none absolute -left-[12%] -top-[5%] size-[20rem] -rotate-12 text-signal/50" />
            <Loop className="pointer-events-none absolute -right-[10%] top-[-10%] size-[22rem] rotate-[65deg] text-signal/50" />
            <Loop className="pointer-events-none absolute -bottom-[15%] -right-[10%] size-[18rem] rotate-[165deg] text-signal/50" />
            <Loop className="pointer-events-none absolute -bottom-[20%] -left-[5%] size-[20rem] -rotate-[85deg] text-signal/50" />

            <Star className="absolute left-[-15%] top-[45%] hidden size-10 text-signal sm:block -rotate-6" />

            <motion.div style={{ y: yBig }} className="absolute left-0 top-0 w-[80%]">
              <Photo pic={heroPhoto} ratio="1 / 1" active={ready} delay={t(400)} className="blob-a" />
              <Doodle
                text="Real support. Lasting impact."
                className="top-0 hidden sm:block"
                rotate={-4}
              />
            </motion.div>

            <motion.div style={{ y: ySmall }} className="absolute bottom-0 right-0 w-[38%]">
              <Photo pic={aboutPhotoA} ratio="1 / 1" active={ready} delay={t(650)} className="blob-b" />
            </motion.div>

            <Fade
              active={ready}
              delay={t(1200)}
              className="hs-ink absolute bottom-[14%] left-[45%] w-max rounded-[1.25rem] bg-sheet p-5 pr-12 pb-6"
            >
              <p className="text-[0.95rem] font-medium leading-[1.25] text-ink">
                Business<br />Consulting
              </p>
              <TLink to="/services" className="mt-3 block text-ink-soft hover:text-signal">
                <ArrowRight className="size-4" strokeWidth={2} />
              </TLink>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
