import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Fade } from "../motion/Reveal";
import { Photo } from "../motion/Photo";
import { Doodle, Fronds } from "../decor/Doodles";
import { testimonialPhoto } from "../../data/photos";
import { testimonials } from "../../data/site";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const t = testimonials[i];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % testimonials.length), 6500);
    return () => window.clearInterval(id);
  }, [paused]);

  const prev = () => setI((v) => (v - 1 + testimonials.length) % testimonials.length);
  const next = () => setI((v) => (v + 1) % testimonials.length);

  return (
    <section
      data-tone="paper"
      className="relative overflow-hidden bg-paper py-14 md:py-16"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <Fronds className="pointer-events-none absolute -bottom-10 -right-6 hidden size-44 text-signal/25 md:block" />

      <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="relative lg:col-span-3">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[14rem] lg:mx-0">
            <div className="blob-round absolute -inset-[9%] bg-paper-deep" />
            <Photo pic={testimonialPhoto} ratio="4 / 5" className="blob-a absolute inset-0" />
            <Doodle text="Kind words from our clients." className="-top-2" rotate={5} />
          </div>
        </div>

        <div className="relative lg:col-span-9">
          <span aria-hidden="true" className="font-display text-[2.8rem] italic leading-none text-signal/60">
            “
          </span>
          <Fade key={i} className="mt-1 min-h-[7.5rem]">
            <blockquote className="font-display max-w-[36ch] text-[1.25rem] leading-snug">
              “{t?.quote}”
            </blockquote>
            <p className="mt-4 text-[0.95rem] font-medium">{t?.name}</p>
            <p className="text-[0.88rem] text-ink-soft">{t?.role}</p>
          </Fade>

          <div className="mt-5 flex items-center gap-6">
            <div className="flex gap-2" role="tablist" aria-label="Testimonials">
              {testimonials.map((q, n) => (
                <button
                  key={q.name}
                  type="button"
                  role="tab"
                  aria-selected={n === i}
                  aria-label={`Show testimonial ${n + 1}`}
                  onClick={() => setI(n)}
                  className={`size-2 rounded-full transition-colors duration-300 ${n === i ? "bg-signal" : "bg-ink/20 hover:bg-ink/40"}`}
                />
              ))}
            </div>
            <div className="relative ml-auto flex gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="grid size-10 place-items-center rounded-full border border-ink/25 transition-colors duration-300 hover:border-signal hover:text-signal"
              >
                <ChevronLeft className="size-4" strokeWidth={1.6} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="grid size-10 place-items-center rounded-full border border-ink/25 transition-colors duration-300 hover:border-signal hover:text-signal"
              >
                <ChevronRight className="size-4" strokeWidth={1.6} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
