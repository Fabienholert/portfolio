import React from "react";
import Photo from "../../assets/moi.webp";
import Card from "../../components/Card/Card";
import "./Home.scss";

export default function Home() {
  return (
    <div>
      <div className="home__Container">
        <h2 className="home__nom">Fabien Holert</h2>
        <h3 className="home__poste">Développeur Web</h3>
        <img Moi src={Photo} alt="moi" className="home__photo" />
        <p className="home__description">
          Passionné par le développement web, je suis actuellement en formation
          chez OpenClassrooms pour devenir développeur web. J'ai acquis des
          compétences en HTML, CSS, Javascript, React, Nodejs, Express.js et
          MongoDB.
        </p>
      </div>
      <Card />
    </div>
  );
}
