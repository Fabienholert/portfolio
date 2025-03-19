import "./card.scss";

export default function Card() {
  return (
    <div>
      <div className="card">
        <div className="card_details">
          <div className="details__title" />
          <div className="details__description" />
          <div className="details__tags" />
          <div className="details__info" />
        </div>
        <h3 className="details__title"></h3>
        <img></img>
      </div>
      <div className="modal modal--hidden">
        <div className="modal__background" />
        <div className="modal__content">
          <div className="modal__close">button</div>
          <div className="modal__children">
            <h3 className="card-modal__title"></h3>
            <div className="card-modal__content">
              <div>
                <div className="card-modal__context">
                  <h4></h4>
                  <p></p>
                </div>
                <div className="card-modal__challenge">
                  <h4></h4>
                  <p></p>
                </div>
                <div className="card-modal__right-colon">
                  <div className="card-modal__links">
                    <a href=""></a>
                  </div>
                  <div className="card-modal__technologies">
                    <div className="tags"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
