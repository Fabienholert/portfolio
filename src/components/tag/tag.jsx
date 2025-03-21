import "./tag.scss";

export default function Tag({ tags }) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className="tag">
      {tags.map((tag, index) => (
        <span key={index} className="tag__item">
          {tag}
        </span>
      ))}
    </div>
  );
}
