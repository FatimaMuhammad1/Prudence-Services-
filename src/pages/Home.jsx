import { Link } from "react-router-dom";
import { FiArrowRight, FiPlay, FiTarget, FiUsers, FiSettings, FiLifeBuoy } from "react-icons/fi";
import BlobImage from "../components/BlobImage";
import ScriptNote from "../components/ScriptNote";
import ServiceWheel from "../components/ServiceWheel";
import SectionHeading from "../components/SectionHeading";
import ContactSection from "../components/ContactSection";
import Leaf from "../components/Leaf";
import { services } from "../data/services";
import { process } from "../data/process";

const whyPoints = [
  { icon: FiTarget, title: "Tailored to you", text: "No off-the-shelf packages. Every solution is shaped around your goals, size and budget." },
  { icon: FiUsers, title: "Experienced team", text: "You work directly with the people doing the work, with one point of contact throughout." },
  { icon: FiSettings, title: "Modern tools, simple process", text: "Proven tools and a clear step-by-step process, so you always know what happens next." },
  { icon: FiLifeBuoy, title: "Support that stays", text: "We don't disappear after delivery. Ongoing support is part of how we work." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="eyebrow">Strategy · Systems · Growth</span>
            <h1>
              Business Solutions <em>Built Around You.</em>
            </h1>
            <p>
              From strategy to systems, we help businesses solve complex
              problems, streamline operations, and achieve sustainable growth
              &mdash; with solutions that actually fit.
            </p>
            <div className="hero-actions">
              <Link to="/#contact" className="btn btn-primary">
                Get a Quote <FiArrowRight />
              </Link>
              <Link to="/services" className="btn-play">
                <span className="play-circle"><FiPlay size={14} /></span>
                Explore Our Services
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <BlobImage variant="laptop" shape={1} className="hero-blob" src="/images/hero.webp" alt="Laptop on a desk in a bright office" />
            <ScriptNote className="hero-note">Real people.<br />Real support.</ScriptNote>
            <Leaf className="hero-leaf" />
            <ServiceWheel />
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="container about-layout">
          <div className="about-photo">
            <BlobImage variant="meeting" shape={2} src="/images/about.webp" alt="Team member meeting with a client" />
            <ScriptNote className="about-note">Your goals,<br />our priority.</ScriptNote>
          </div>
          <div className="about-text">
            <span className="eyebrow">Who We Are</span>
            <h2>
              More than a service &mdash; we&rsquo;re <em>your partner.</em>
            </h2>
            <p>
              Prudence Services is a business solutions company helping small
              and growing businesses run better. We combine consulting,
              finance, technology and procurement under one roof, so you
              don&rsquo;t have to juggle a different provider for every problem.
            </p>
            <p>
              We believe in practical solutions, thoughtful strategy and
              long-term relationships. We take the time to understand your
              business first, then turn your goals into a clear plan and see it
              through.
            </p>
          </div>
        </div>
      </section>

      <section className="section services-band">
        <div className="container">
          <SectionHeading
            eyebrow="Our Services"
            title="Comprehensive"
            accent="business support"
            description="End-to-end solutions tailored to your needs, helping you work smarter, operate efficiently and grow sustainably."
            center
          />
          <div className="svc-grid">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.slug} className="svc-card">
                  <span className="icon-circle"><Icon size={20} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <Link to={`/services#${s.slug}`} className="link-arrow">
                    Learn more <FiArrowRight />
                  </Link>
                </article>
              );
            })}
            <article className="svc-card svc-cta">
              <h3>Not sure what you need?</h3>
              <p>Tell us about your business and we&rsquo;ll point you to the right solution, with no obligation.</p>
              <Link to="/#contact" className="btn btn-primary">
                Talk to us <FiArrowRight />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section id="why" className="section">
        <div className="container">
          <SectionHeading eyebrow="Why Prudence" title="Your goals." accent="Our focus." center />
          <div className="why-cards">
            {whyPoints.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className="why-card">
                  <span className="icon-circle"><Icon size={20} /></span>
                  <h3>{w.title}</h3>
                  <p>{w.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <SectionHeading eyebrow="How We Work" title="A simple process," accent="from first call to support" center />
          <div className="process-grid">
            {process.map((p) => (
              <div key={p.step} className="process-card">
                <span className="process-step">{p.step}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
