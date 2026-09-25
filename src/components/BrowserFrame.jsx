import { FiMonitor, FiExternalLink } from "react-icons/fi";

const hostname = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

export default function BrowserFrame({ project, large }) {
  return (
    <a
      className={`project-frame ${large ? "is-large" : ""}`}
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Visit ${project.title}`}
    >
      <div className="frame-bar">
        <i /><i /><i />
        <span>{hostname(project.url)}</span>
      </div>
      <div className="frame-screen">
        {project.image ? (
          <img src={project.image} alt={`${project.title} website`} loading="lazy" />
        ) : (
          <div className="frame-placeholder"><FiMonitor size={40} strokeWidth={1} /></div>
        )}
        <span className="frame-overlay"><b>Visit site <FiExternalLink /></b></span>
      </div>
    </a>
  );
}
