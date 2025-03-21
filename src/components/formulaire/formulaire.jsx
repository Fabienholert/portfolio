import "./formulaire.scss";

export default function Formulaire() {
  return (
    <form className="formulaire">
      <input type="text" placeholder="Nom" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Objet" />
      <input type="text" placeholder="Message" />
      <button type="submit">Envoyer</button>
    </form>
  );
}
