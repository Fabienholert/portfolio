import { NavLink } from "react-router-dom";
import LogoGit from "../../assets/logogit.png";
import LogoLink from "../../assets/logolink.png";
import MonLogo from "../../assets/monlogo.png";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logoreseaux">
        <img src={LogoGit} alt="logo gitHub" className="header__logoGit" />
        <img src={LogoLink} alt="logo Linkedin" className="header__logoLink" />
      </div>
      <nav className="header__nav">
        <NavLink to="/" className="header__link">
          {" "}
          Accueil
        </NavLink>
        <NavLink to="/Projet1" className="header__link">
          {" "}
          Projet 1
        </NavLink>
        <NavLink to="/Projet2" className="header__link">
          {" "}
          Projet 2
        </NavLink>
      </nav>
      <img src={MonLogo} alt="mon logo " className="header__monLogo" />
    </header>
  );
}
