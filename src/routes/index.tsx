import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/home/Hero";
import { MarqueeBand } from "../components/home/MarqueeBand";
import { WhatWeDo } from "../components/home/WhatWeDo";
import { HowWeWork } from "../components/home/HowWeWork";
import { AboutBand } from "../components/home/AboutBand";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { Testimonials } from "../components/home/Testimonials";
import { FinalCTA } from "../components/home/FinalCTA";

const description =
  "Prudence Services is a business consultancy where finance, procurement and technology meet: finance & bookkeeping, procurement, ERP systems, website and e-commerce development, and ongoing e-commerce support.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prudence Services — Business, accounted for." },
      { name: "description", content: description },
      { property: "og:title", content: "Prudence Services — Business, accounted for." },
      { property: "og:description", content: description },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeBand />
      <WhatWeDo />
      <HowWeWork />
      <AboutBand />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
