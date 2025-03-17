import { NavLink } from "react-router-dom";
import MonLogo from "../../assets/monlogo.png";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          {" "}
          Accueil
        </NavLink>
        <NavLink to="/" className="header__link">
          {" "}
          Présentation
        </NavLink>
        <NavLink to="/Projet1" className="header__link">
          {" "}
          Compétences
        </NavLink>
        <NavLink to="/Projet2" className="header__link">
          {" "}
          Mes Projets
        </NavLink>
        <NavLink to="/" className="header__link">
          {" "}
          Contact
        </NavLink>
      </nav>
      <img src={MonLogo} alt="mon logo " className="header__monLogo" />
    </header>
  );
}
