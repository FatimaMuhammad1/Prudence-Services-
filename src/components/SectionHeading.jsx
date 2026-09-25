export default function SectionHeading({ eyebrow, title, accent, description, center }) {
  return (
    <div className={`section-heading ${center ? "is-center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>
        {title} {accent && <em>{accent}</em>}
      </h2>
      {description && <p>{description}</p>}
    </div>
  );
}
