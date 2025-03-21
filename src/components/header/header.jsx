import MonLogo from "../../assets/images/monLogo.png";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav"></nav>
      <img src={MonLogo} alt="mon logo " className="header__monLogo" />
    </header>
  );
}
