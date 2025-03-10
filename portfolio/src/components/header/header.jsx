import { NavLink } from "react-router-dom";
import LogoGit from "../../assets/logogit.png";
import LogoLink from "../../assets/logolink.png";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <img src={LogoGit} alt="logo gitHub" className="header__logoGit" />
      <img src={LogoLink} alt="logo Linkedin" className="header_logoLink" />
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
    </header>
  );
}
