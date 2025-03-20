import MonLogo from "../../assets/images/monLogo.png";
import "./header.scss";

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    // Ajustez la valeur 50 selon vos besoins
    header.classList.add("scrolled");
    header.classList.remove("scrolled-up");
  } else {
    header.classList.remove("scrolled");
    header.classList.add("scrolled-up");
  }
});

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
