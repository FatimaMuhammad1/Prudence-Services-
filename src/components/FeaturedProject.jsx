import { FiExternalLink } from "react-icons/fi";
import BrowserFrame from "./BrowserFrame";

export default function FeaturedProject({ project }) {
  return (
    <article className="featured-project">
      <div className="featured-visual">
        <BrowserFrame project={project} large />
      </div>
      <div className="featured-copy">
        <span className="eyebrow">Featured project</span>
        <h2>{project.title}</h2>
        {project.category && <span className="project-category">{project.category}</span>}
        {project.description && <p>{project.description}</p>}
        {project.tags?.length > 0 && (
          <div className="project-tags">
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}
        <a className="btn btn-primary" href={project.url} target="_blank" rel="noreferrer">
          Visit website <FiExternalLink />
        </a>
      </div>
    </article>
  );
}
