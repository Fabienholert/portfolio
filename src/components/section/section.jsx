import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useEffect, useState } from "react";
import CompetencesData from "../../assets/json/compétences.json";
import "./Section.scss";

export default function Section() {
  const [competences, setCompetences] = useState(null);

  useEffect(() => {
    setCompetences(CompetencesData.competences);
  }, []);

  if (!competences) {
    return <p>Chargement des compétences...</p>;
  }

  return (
    <div className="section">
      <h2 id="competences">Compétences</h2>
      <div className="section__text">
        <Splide aria-label="Mes Compétences">
          <SplideSlide>
            <h3>Front-end</h3>
            <p>
              <strong>Technologies :</strong>{" "}
              {competences.frontEnd.technologie.join(", ")}
            </p>
          </SplideSlide>
          <SplideSlide>
            <h3>Back-end</h3>
            <p>
              <strong>Technologies :</strong>{" "}
              {competences.backEnd.technologie.join(", ")}
            </p>
          </SplideSlide>
          <SplideSlide>
            <h3>Outils</h3>
            <p>
              <strong>Technologies :</strong>{" "}
              {competences.outils.technologie.join(", ")}
            </p>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
