import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck, FiLink, FiUser, FiLayers, FiExternalLink } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";
import Leaf from "../components/Leaf";
import { services } from "../data/services";
import { process } from "../data/process";
import { projects } from "../data/projects";

const pad = (n) => String(n).padStart(2, "0");

const together = [
  {
    icon: FiLink,
    title: "Everything stays connected",
    text: "Your finance, systems, purchasing and website are planned together, so information flows between them instead of being re-typed.",
  },
  {
    icon: FiUser,
    title: "One point of contact",
    text: "Instead of briefing a separate provider for every problem, you explain your business once and deal with one team.",
  },
  {
    icon: FiLayers,
    title: "Start small, add as you grow",
    text: "Begin with the service you need most today and add others when the time is right. Nothing has to be bought as a bundle.",
  },
];

const bring = [
  "What you want to achieve, and by when",
  "The tools and systems you use today",
  "What currently slows you down or costs you time",
  "Any deadlines, budget limits or must-haves",
];

const faqs = [
  { q: "Which service should I start with?", a: "It depends on where the biggest pain is. If you are not sure, tell us about your business and we will help you decide where to begin." },
  { q: "Can I use more than one service?", a: "Yes. Our services are designed to work together, and you can add to them as your needs change." },
  { q: "Do I need to know exactly what I need before contacting you?", a: "No. Many businesses come to us with a problem rather than a solution. Describing the problem is enough to start the conversation." },
  { q: "Can you work with the tools we already use?", a: "In most cases, yes. We start from how your business works today and only suggest changes that are worth making." },
];

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <Leaf className="page-hero-leaf" />
        <div className="container">
          <span className="eyebrow">Our Services</span>
          <h1>Business services designed to <em>remove friction,</em> not add it</h1>
          <p>
            Whether you need a single project delivered or ongoing management
            of your operations, finance and systems, we scope our services
            around what actually moves your business forward.
          </p>
          <nav className="svc-jump" aria-label="Jump to a service">
            {services.map((s, i) => (
              <a key={s.slug} href={`#${s.slug}`}>
                <span>{pad(i + 1)}</span> {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section svc-detail-list">
        <div className="container">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article key={s.slug} id={s.slug} className={`svc-row ${i % 2 ? "flip" : ""}`}>
                <div className="svc-row-main">
                  <span className="svc-num">{pad(i + 1)}</span>
                  <h2>{s.title}</h2>
                  <p className="svc-lead">{s.summary}</p>
                  <p>{s.description}</p>
                  <h4>What&rsquo;s included</h4>
                  <ul className="tick-list">
                    {s.features.map((f) => (
                      <li key={f}><FiCheck /> <span>{f}</span></li>
                    ))}
                  </ul>
                  <Link to="/#contact" className="btn btn-primary">
                    Enquire about this <FiArrowRight />
                  </Link>
                </div>

                <aside className="svc-row-aside">
                  <span className="icon-circle icon-lg"><Icon size={28} /></span>
                  <div>
                    <h4>Ideal for</h4>
                    <p>{s.idealFor}</p>
                  </div>
                  <div>
                    <h4>What you get</h4>
                    <ul className="outcome-list">
                      {s.outcomes.map((o) => (
                        <li key={o}>{o}</li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section compare-section">
        <div className="container">
          <SectionHeading
            eyebrow="At a Glance"
            title="Compare our"
            accent="services"
            description="A quick overview to help you see which service fits where you are today."
            center
          />
          <div className="compare">
            <div className="compare-row compare-head" aria-hidden="true">
              <span>Service</span>
              <span>Best for</span>
              <span>What you get</span>
            </div>
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <a key={s.slug} href={`#${s.slug}`} className="compare-row">
                  <span className="compare-name" data-label="Service">
                    <span className="icon-circle"><Icon size={18} /></span>
                    {s.title}
                  </span>
                  <span data-label="Best for">{s.idealFor}</span>
                  <span data-label="What you get">{s.outcomes.join(" · ")}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Better Together"
            title="Five services,"
            accent="one connected team"
            description="Each service stands on its own, and they get stronger when they work side by side."
            center
          />
          <div className="why-cards together-grid">
            {together.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="why-card">
                  <span className="icon-circle"><Icon size={20} /></span>
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section first-call">
        <div className="container first-call-layout">
          <div>
            <span className="eyebrow">Getting Started</span>
            <h2>Your first <em>conversation</em></h2>
            <p>
              There is no need to prepare a formal brief. A short conversation
              about your business is enough for us to understand what you need
              and suggest a sensible next step.
            </p>
            <Link to="/#contact" className="btn btn-primary">
              Book a conversation <FiArrowRight />
            </Link>
          </div>
          <div className="bring-card">
            <h4>Helpful to have in mind</h4>
            <ul className="tick-list one-col">
              {bring.map((b) => (
                <li key={b}><FiCheck /> <span>{b}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="section services-work">
          <div className="container">
            <SectionHeading
              eyebrow="See It in Action"
              title="Websites we've"
              accent="built"
              description="A few live examples of our IT and web development work."
              center
            />
            <div className="work-strip">
              {projects.map((p) => (
                <Link key={p.id} to="/portfolio" className="work-tile">
                  {p.image && <img src={p.image} alt={`${p.title} website`} loading="lazy" />}
                  <span>{p.title} <FiExternalLink /></span>
                </Link>
              ))}
            </div>
            <div className="section-cta">
              <Link to="/portfolio" className="link-arrow">View the full portfolio <FiArrowRight /></Link>
            </div>
          </div>
        </section>
      )}

      <section className="section process-section">
        <div className="container">
          <SectionHeading eyebrow="How We Work" title="A straightforward process," accent="from first call to support" center />
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

      <section className="section">
        <div className="container faq-layout">
          <SectionHeading eyebrow="FAQ" title="Common" accent="questions" />
          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-strip-inner">
          <h2>Not sure which service <em>fits your needs?</em></h2>
          <div>
            <p>Tell us about your challenge and we&rsquo;ll recommend the right approach.</p>
            <Link to="/#contact" className="btn btn-primary">Talk to Our Team <FiArrowRight /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
