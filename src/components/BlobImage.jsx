import { FiMonitor, FiUsers, FiEdit3, FiBriefcase } from "react-icons/fi";

const placeholders = {
  laptop: FiMonitor,
  meeting: FiUsers,
  notebook: FiEdit3,
  office: FiBriefcase,
};

// Pass `src` (e.g. "/images/hero.jpg" placed in /public/images) to use a real photo.
export default function BlobImage({ variant = "laptop", shape = 1, src, alt = "", className = "" }) {
  const Icon = placeholders[variant];
  return (
    <div className={`blob blob-${shape} ${className}`}>
      <div className="blob-backdrop" />
      <div className="blob-frame">
        {src ? (
          <img src={src} alt={alt} loading="lazy" />
        ) : (
          <div className={`blob-placeholder ph-${variant}`} role="img" aria-label={alt || undefined}>
            <Icon size={64} strokeWidth={1} />
          </div>
        )}
      </div>
    </div>
  );
}
