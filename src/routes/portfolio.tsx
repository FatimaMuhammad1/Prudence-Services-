import { useMemo, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, Search } from "lucide-react";
import { TLink } from "../components/shell/Transition";
import { Fade, Lines, Draw } from "../components/motion/Reveal";
import { SitePreview } from "../components/portfolio/SitePreview";
import {
  allProjects,
  categories,
  featuredProjects,
  type Category,
  type FeaturedProject,
} from "../data/portfolio";

const description =
  "Selected and in-progress website and e-commerce projects from Prudence Services across business, retail, hospitality and professional services.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Work — Prudence Services" },
      { name: "description", content: description },
      { property: "og:title", content: "Work — Prudence Services" },
      { property: "og:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function Featured({ project, index }: { project: FeaturedProject; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["7%", "-7%"]);
  const flip = index % 2 === 1;

  return (
    <article ref={ref} data-tone="paper" className="relative py-16 md:py-24">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
        <div className={`lg:col-span-5 ${flip ? "lg:order-2 lg:col-start-8" : ""}`}>
          <Draw className="bg-ink/25" />
          <p className="label mt-6 flex items-center gap-4">
            <span className="tabular text-signal">0{index + 1}</span>
            <span>{project.type}</span>
          </p>
          <Lines as="h2" className="display-m mt-6" lines={[project.name]} />
          <Fade as="p" delay={150} className="mt-6 max-w-[40ch] text-[1.05rem] leading-snug text-ink-soft">
            {project.description}
          </Fade>
          <Fade delay={250} className="label mt-8 flex items-center gap-3 text-ink-soft">
            <span className="size-2 rounded-full bg-signal" />
            Work in progress
          </Fade>
        </div>

        <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
          <motion.div style={{ y }} data-cursor="View" className="aspect-[16/10] w-full overflow-hidden rounded-3xl">
            <SitePreview mock={project.mock} />
          </motion.div>
        </div>
      </div>
    </article>
  );
}

function PortfolioPage() {
  const [category, setCategory] = useState<Category>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      allProjects
        .filter((p) => category === "All" || p.category === category)
        .filter((p) => p.name.toLowerCase().includes(query.trim().toLowerCase()))
        .slice(0, 6),
    [category, query],
  );

  return (
    <>
      <section data-tone="paper" className="relative overflow-hidden bg-paper pb-16 pt-[calc(76px+clamp(3rem,10vh,8rem))]">
        <div className="wrap">
          <p className="label">(Work)</p>
          <Lines
            as="h1"
            immediate
            delay={80}
            className="display-xl mt-8"
            lines={["Work that", <em key="e">speaks</em>, <span key="d">for itself<span className="text-signal">.</span></span>]}
          />
          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <Fade delay={400} className="md:col-span-5 md:col-start-8">
              <p className="max-w-[42ch] text-[1.15rem] leading-snug">
                Websites and stores we've designed and built for businesses across different
                industries.
              </p>
              <p className="label mt-6 flex items-center gap-3 text-ink-soft">
                <span className="bg-signal px-1.5 py-0.5 text-[10px]! text-paper">WIP</span>
                marks projects still in progress.
              </p>
            </Fade>
          </div>
        </div>
      </section>

      {featuredProjects.map((p, i) => (
        <Featured key={p.name} project={p} index={i} />
      ))}

      <section data-tone="paper" className="relative bg-paper-deep py-24 md:py-36">
        <div className="wrap">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="label">(All projects)</p>
              <Lines as="h2" className="display-l mt-6" lines={["The", <em key="e">index</em>]} />
            </div>
            <div className="flex flex-col gap-5 lg:items-end">
              <div className="label flex flex-wrap gap-x-6 gap-y-2" role="tablist" aria-label="Filter projects">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    role="tab"
                    aria-selected={category === c}
                    onClick={() => setCategory(c)}
                    className={`navlink ${category === c ? "text-signal" : ""}`}
                    data-active={category === c}
                  >
                    {c}
                  </button>
                ))}
              </div>
              <label className="relative block w-full sm:w-72">
                <Search className="pointer-events-none absolute left-0 top-1/2 size-4 -translate-y-1/2 text-ink-soft" strokeWidth={1.5} />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects"
                  aria-label="Search projects"
                  className="w-full border-0 border-b border-ink/40 bg-transparent py-2.5 pl-7 text-[1rem] outline-none transition-colors placeholder:text-ink-mute focus:border-signal"
                />
              </label>
            </div>
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Fade key={p.name} delay={(i % 3) * 90}>
                <article data-cursor="View" className="group">
                  <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-ink transition-transform duration-700 [transition-timing-function:var(--ease-out)] group-hover:-translate-y-2">
                    <div className="size-full transition-transform duration-[1200ms] [transition-timing-function:var(--ease-out)] group-hover:scale-[1.05]">
                      <SitePreview mock={p.mock} compact />
                    </div>
                  </div>
                  <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-ink/25 pt-4">
                    <div>
                      <p className="label text-signal">{p.category}</p>
                      <h3 className="display-s mt-1.5">{p.name}</h3>
                    </div>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-ink-soft transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                      strokeWidth={1.4}
                    />
                  </div>
                </article>
              </Fade>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full py-10 text-ink-soft">No projects match that search yet.</p>
            )}
          </div>
        </div>
      </section>

      <section data-tone="red" className="relative bg-amber py-24 text-ink md:py-32">
        <div className="wrap flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <Lines
            as="h2"
            className="display-l"
            lines={["Have a project", <em key="e">in mind?</em>]}
          />
          <TLink to="/contact" cursor="Start" className="pill label self-start md:self-auto">
            Start a project
            <ArrowUpRight className="size-4" strokeWidth={1.6} />
          </TLink>
        </div>
      </section>
    </>
  );
}
