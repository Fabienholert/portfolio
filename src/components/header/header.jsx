import MonLogo from "../../assets/images/monLogo.png";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <a href="#accueil" className="bouton__mesprojets">
          Accueil
        </a>
        <a href="#presentation" className="bouton__mesprojets">
          Présentation
        </a>
        <a href="#competences" className="bouton__mesprojets">
          Compétences
        </a>
        <a href="#mes_projets" className="bouton__mesprojets">
          Mes projets
        </a>
        <a href="#contact" className="bouton__mesprojets">
          Contact
        </a>
      </nav>
      <img src={MonLogo} alt="mon logo " className="header__monLogo" />
    </header>
  );
}
