import React from "react";
import Dev from "../../assets/images/dev.jpg";
import Photo from "../../assets/images/moi.webp";
import Section from "../../components/competence/Competence";
import Formulaire from "../../components/formulaire/Formulaire";
import Projets from "../../components/projets/Projets";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <div className="home__banner">
        <div className="home__Container">
          <img src={Dev} alt="image developpeur" className="home__dev" />
          <h1 className="home__nom">
            Bienvenue, je suis Fabien Holert, Développeur Web
          </h1>
          <a href="#mes_projets" className="home__button">
            Mes projets
          </a>
        </div>
      </div>
      <div id="presentation" className="home__presentation">
        <h2 className="home__presentation-titre">Présentation</h2>
        <p className="home__description">
          Je m'appelle Fabien Holert, j'ai 40 ans et je suis passionné par le
          développement web. J'ai décidé de me reconvertir dans ce domaine et
          j'ai commencé une formation chez OpenClassrooms pour devenir
          développeur web. J'ai déjà acquis des compétences en HTML, CSS,
          Javascript, React et Node.js pour devenir un développeur fullstack.
        </p>
        <img src={Photo} alt="photo de moi" className="home__photo" />
        <p className="home__description"></p>
      </div>
      <Section />
      <Projets />
      <h2 className="home__contact">Contactez-moi</h2>
      <Formulaire />
    </div>
  );
}
