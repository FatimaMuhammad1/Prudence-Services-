import { FiExternalLink } from "react-icons/fi";
import BrowserFrame from "./BrowserFrame";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <article className="project-card" style={{ "--i": index }}>
      <BrowserFrame project={project} />
      <div className="project-body">
        {project.category && <span className="project-category">{project.category}</span>}
        <h3>{project.title}</h3>
        {project.description && <p className="project-summary">{project.description}</p>}
        {project.tags?.length > 0 && (
          <div className="project-tags">
            {project.tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}
        <a className="link-arrow project-visit" href={project.url} target="_blank" rel="noreferrer">
          Visit website <FiExternalLink />
        </a>
      </div>
    </article>
  );
}
