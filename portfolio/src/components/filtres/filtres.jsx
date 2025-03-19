import "./filtres.scss";

export default function Filtres() {
  return (
    <div className="filter">
      <button className="filter__button">Tous</button>
      <button className="filter__button">Front-end</button>
      <button className="filter__button">Back-end</button>
      <button className="filter__button">Gestion de projet</button>
    </div>
  );
}
