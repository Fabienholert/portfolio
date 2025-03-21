import React, { useEffect, useState } from "react";
import Project from "../../assets/json/projets.json";
import Tag from "../tag/tag.jsx";
import "./card.scss";

function Card() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(Project);
  }, []);

  return (
    <div className="card">
      {projects.map((project) => (
        <div className="card__container" key={project.id}>
          <div className="card__details">
            <div className="details__title">{project.card.details.title}</div>
            <div className="details__description">
              {project.card.details.description}
            </div>
            <Tag tags={project.card.details.tags} />
            <div className="details__info">{project.card.details.info}</div>
          </div>
          <h3 className="details__title">{project.card.title}</h3>
          <img src={project.card.image} alt={project.card.title} />
        </div>
      ))}
    </div>
  );
}

export default Card;
