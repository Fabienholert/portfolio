import LogoGit from "../../assets/logogit.png";
import LogoLink from "../../assets/logolink.png";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logoreseaux">
        <img src={LogoGit} alt="logoGitHub" className="header__logoGit" />
        <img src={LogoLink} alt="logoLinkedin" className="header__logoLink" />
      </div>
    </div>
  );
}
