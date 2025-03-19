import React from "react";
import Photo from "../../assets/images/moi.webp";
import Formulaire from "../../components/formulaire/formulaire";
import Projets from "../../components/projets/projets";
import Section from "../../components/section/Section";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <div className="home__Container">
        <h1 className="home__nom">Bienvenue, je suis Fabien Holert</h1>
        <h2 className="home__titre">
          <strong> Développeur Web</strong>
        </h2>
        <a href="#mes_projets" className="bouton__mesprojets">
          Mes projets
        </a>

        <img src={Photo} alt="moi" className="home__photo" />
        <p className="home__description">
          Passionné par le développement web, je suis actuellement en formation
          chez OpenClassrooms pour devenir développeur web. J'ai acquis des
          compétences en HTML, CSS, Javascript, React, Nodejs, Express.js et
          MongoDB.
        </p>
      </div>
      <Section />
      <Projets />
      <Formulaire />
    </div>
  );
}
