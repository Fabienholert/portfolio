import React, { useEffect, useState } from "react";
import "./card.scss";

function MyComponent() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("projects.json"); // Chemin vers votre fichier JSON
      const data = await response.json();
      setProjects(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <div className="card" key={project.id}>
          <div className="card_details">
            <div className="details__title">{project.card.details.title}</div>
            <div className="details__description">
              {project.card.details.description}
            </div>
            <div className="details__tags">
              {project.card.details.tags.join(", ")}
            </div>
            <div className="details__info">{project.card.details.info}</div>
          </div>
          <h3 className="details__title">{project.card.title}</h3>
          <img src={project.card.image} alt={project.card.title} />
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
