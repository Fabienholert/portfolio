import { NavLink } from "react-router-dom";
import Projet11 from "../../assets/Projet11.png";
import Projet12 from "../../assets/Projet12.png";
import Projet13 from "../../assets/Projet13.png";

export default function Card() {
  return (
    <div className="Card__container">
      <NavLink to="/Projet1" className="header__link">
        {" "}
        <img src={Projet11} alt="projet11" className="card__projet11" />
        <img src={Projet12} alt="logoGitHub" className="card__projet12" />
        <img src={Projet13} alt="logoGitHub" className="card__projet13" />
      </NavLink>
      <NavLink to="/Projet2" className="header__link">
        {" "}
        Projet 2
      </NavLink>
    </div>
  );
}
