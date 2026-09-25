import { useState } from "react";
import { FiArrowRight, FiCheck, FiFolder } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import FeaturedProject from "../components/FeaturedProject";
import Leaf from "../components/Leaf";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";
import { services } from "../data/services";
import { process } from "../data/process";

const webService = services.find((s) => s.slug === "it-web-development");

const categories = [...new Set(projects.map((p) => p.category).filter(Boolean))];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [featured, ...rest] = projects;
  const list = active === "All" ? rest : rest.filter((p) => p.category === active);

  return (
    <>
      <section className="page-hero">
        <Leaf className="page-hero-leaf" />
        <div className="container">
          <span className="eyebrow">Our Portfolio</span>
          <h1>Our work, <em>in focus</em></h1>
          <p>
            A selection of websites and projects we&rsquo;ve built, each
            designed around a real business need.
          </p>
          {projects.length > 0 && (
            <div className="hero-badge">
              <strong>{projects.length}</strong> live {projects.length === 1 ? "website" : "websites"} you can visit today
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container">
          {projects.length === 0 ? (
            <div className="portfolio-empty">
              <span className="icon-circle icon-lg"><FiFolder size={28} /></span>
              <h2>Our websites <em>coming soon</em></h2>
              <p>
                We&rsquo;re putting our websites together here. In the meantime,
                see what we can do for your business, or get in touch to talk
                about your project.
              </p>
              <div className="portfolio-empty-actions">
                <Link to="/services" className="btn btn-outline">Explore our services</Link>
                <Link to="/#contact" className="btn btn-primary">Get in touch <FiArrowRight /></Link>
              </div>
            </div>
          ) : (
            <>
              <FeaturedProject project={featured} />

              {rest.length > 0 && (
                <div className="more-head">
                  <span className="eyebrow">More work</span>
                  <h2>Browse <em>the rest</em></h2>
                </div>
              )}

              {categories.length > 1 && rest.length > 0 && (
                <div className="filter-bar">
                  {["All", ...categories].map((cat) => (
                    <button
                      key={cat}
                      className={`filter-btn ${active === cat ? "active" : ""}`}
                      onClick={() => setActive(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}

              <div className="projects-grid">
                {list.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {projects.length > 0 && (
        <>
          <section className="section want-band">
            <div className="container want-layout">
              <div className="want-copy">
                <span className="eyebrow">{webService.title}</span>
                <h2>Want a website <em>like these?</em></h2>
                <p>{webService.description}</p>
                <Link to="/#contact" className="btn btn-primary">
                  Start your project <FiArrowRight />
                </Link>
              </div>
              <ul className="want-tiles">
                {webService.features.map((f) => (
                  <li key={f}>
                    <span className="icon-circle"><FiCheck size={18} /></span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="section process-section">
            <div className="container">
              <SectionHeading eyebrow="How We Build" title="From first call" accent="to launch day" center />
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
        </>
      )}

      <section className="cta-strip">
        <div className="container cta-strip-inner">
          <h2>Have a project <em>in mind?</em></h2>
          <div>
            <p>Let&rsquo;s talk about what you need.</p>
            <Link to="/#contact" className="btn btn-primary">Start a Conversation <FiArrowRight /></Link>
          </div>
        </div>
      </section>
    </>
  );
}
