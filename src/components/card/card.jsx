import React, { useEffect, useState } from "react";
import Project from "../../assets/json/projets.json"; // Importation du fichier JSON
import "./card.scss";

function Card() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // async function fetchData() { // Pas besoin de fonction async si on utilise directement l'import
    //   const response = await fetch({ Project }); // INCORRECT : on fetch pas un objet importé
    //   const data = await response.json();
    //   setProjects(data);
    // }
    // fetchData();

    // Utilisation directe du fichier JSON importé
    setProjects(Project);
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

export default Card;
