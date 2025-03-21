import React from "react";
import Dev from "../../assets/images/dev.jpg";
import Photo from "../../assets/images/moi.webp";
import Formulaire from "../../components/formulaire/Formulaire";
import Projets from "../../components/projets/Projets";
import Section from "../../components/competence/Competence";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <div className="home__banner">
        <div className="home__Container">
          <img src={Dev} alt="image developpeur" className="home__dev" />
          <h1 className="home__nom">Bienvenue, je suis Fabien Holert</h1>
          <h2 className="home__titre">
            <strong> Développeur Web</strong>
          </h2>
          <a href="#mes_projets" className="home__button">
            Mes projets
          </a>
        </div>
      </div>
      <div id="presentation" className="home__presentation">
        <img src={Photo} alt="photo de moi" className="home__photo" />
        <p className="home__description">
          Passionné par le développement web, je suis actuellement en formation
          chez OpenClassrooms pour devenir développeur web. J'ai acquis des
          compétences en HTML, CSS, Javascript, React, Nodejs, Express.js et
          MongoDB.
        </p>
      </div>
      <Section />
      <Projets />
      <h2 className="home__contact">Contactez-moi</h2>
      <Formulaire />
    </div>
  );
}
