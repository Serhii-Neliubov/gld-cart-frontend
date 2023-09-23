import { FC } from "react";
import "./Saved.scss";

const Saved: FC = () => {
  return (
    <div className="page__saved saved">
      <div className="saved__container">
        <div className="saved__content">
          <h3 className="saved__title">Saved for later</h3>
          <div className="saved__items">
            <div className="saved__item">
              <div className="saved__image"></div>
              <span className="saved__price">$99.50</span>
              <p className="saved__desc">
                GoPro HERO6 4K Action Camera - Black
              </p>
              <button className="saved__button">Move to cart</button>
            </div>
            <div className="saved__item">
              <div className="saved__image"></div>
              <span className="saved__price">$99.50</span>
              <p className="saved__desc">
                GoPro HERO6 4K Action Camera - Black
              </p>
              <button className="saved__button">Move to cart</button>
            </div>
            <div className="saved__item">
              <div className="saved__image"></div>
              <span className="saved__price">$99.50</span>
              <p className="saved__desc">
                GoPro HERO6 4K Action Camera - Black
              </p>
              <button className="saved__button">Move to cart</button>
            </div>
            <div className="saved__item">
              <div className="saved__image"></div>
              <span className="saved__price">$99.50</span>
              <p className="saved__desc">
                GoPro HERO6 4K Action Camera - Black
              </p>
              <button className="saved__button">Move to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saved;
