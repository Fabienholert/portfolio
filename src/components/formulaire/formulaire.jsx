import "./formulaire.scss";

export default function Formulaire() {
  return (
    <div id="contact" className="formulaire">
      <h2>Contactez-moi</h2>
      <form>
        <input type="text" placeholder="Nom" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Objet" />
        <textarea type="text" placeholder="Message" className="message" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
