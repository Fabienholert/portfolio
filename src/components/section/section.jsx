import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./section.scss";

export default function Section() {
  return (
    <div className="section">
      <h2 id="competences">Compétences</h2>
      <div className="section__text">
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <h3>Front-end</h3>
            <p>
              <strong>Langages :</strong> Javascript
            </p>
            <p>
              <strong>Frameworks et Bibliothèques:</strong> React
            </p>
            <p>
              <strong>Intégration Web:</strong> HTML , CSS , SASS
            </p>
          </SplideSlide>
          <SplideSlide>
            <h3>Back-end</h3>
            <p>
              <strong>Langages et Frameworks:</strong> Nodejs, Express.js
            </p>
            <p>
              <strong>Base de Données:</strong> MongoDB
            </p>
            <p>
              <strong>API:</strong> Création et consommation d'API REST
            </p>
          </SplideSlide>
          <SplideSlide>
            <h3>Outils</h3>
            <p>
              <strong>Gestion de version:</strong> Git, Github
            </p>
            <p>
              <strong>Environnements:</strong> Visual Studio Code , Github
            </p>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}
