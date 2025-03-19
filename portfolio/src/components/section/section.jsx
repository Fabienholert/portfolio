import Splide from "@splidejs/splide";
import "./section.scss";

new Splide(".splide").mount();

export default function Section() {
  return (
    <section class="splide" aria-labelledby="carousel-heading">
      <h2 id="carousel-heading">Mes Compétences</h2>

      <div class="splide__track">
        <ul class="splide__list">
          <li class="splide__slide">
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
          </li>
          <li class="splide__slide">
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
          </li>
          <li class="splide__slide">
            <h3>Outils</h3>
            <p>
              <strong>Gestion de version:</strong> Git, Github
            </p>
            <p>
              <strong>Environnements:</strong> Visual Studio Code , Github
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
