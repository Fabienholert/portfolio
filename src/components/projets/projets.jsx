import Card from "../card/card.jsx";
import Filtres from "../filtres/filtres.jsx";
import "./projets.scss";

export default function Projets() {
  return (
    <div id="mes_projets" className="projets__container">
      <h2>Mes projets</h2>
      <Filtres />
      <div className="projets__cards">
        <Card />
      </div>
    </div>
  );
}
