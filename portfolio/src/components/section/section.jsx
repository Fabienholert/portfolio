import Card from "../card/card";
import "./section.scss";

export default function Section() {
  return (
    <div className="Section__Container">
      <h3 className="Section__frontEnd">
        Front-end
        <p>
          <strong>Langages :</strong> Javascript{" "}
        </p>
        <p>
          <strong>Frameworks et Bibliothèques:</strong> React{" "}
        </p>
        <p>
          <strong>Intégration Web:</strong> HTML , CSS , SASS
        </p>
      </h3>
      <h3 className="Section__Backend">
        Back-end
        <p>
          <strong>Langages et Frameworks:</strong> Nodejs, Express.js
        </p>
        <p>
          <strong>Base de Données:</strong> MongoDB
        </p>
        <p>
          <strong>API:</strong> Création et consommation d'API REST
        </p>
      </h3>
      <h3 className="Section__Outils">
        Outils
        <p>
          <strong>Gestion de version:</strong> Git, Github
        </p>
        <p>
          <strong>Environnements:</strong> Visual Studio Code , Github
        </p>
      </h3>
      <Card />
    </div>
  );
}
