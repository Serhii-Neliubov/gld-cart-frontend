import { FC } from "react";
import "./Saved.scss";
import SavedItems from "../../../utils/SavedItems.js";

const Saved: FC = ({ shoppingCart, setShoppingCart }) => {
  return (
    <div className="page__saved saved">
      <div className="saved__container">
        <div className="saved__content">
          <h3 className="saved__title">Saved for later</h3>
          <div className="saved__items">
            {SavedItems.map((item) => {
              return (
                <div className="saved__item">
                  <div
                    className="saved__image"
                    style={{ backgroundImage: `${item.backgroundImage}` }}
                  ></div>
                  <span className="saved__price">{item.price}</span>
                  <p className="saved__desc">{item.desc}</p>
                  <button
                    onClick={() => setShoppingCart([...shoppingCart, item])}
                    className="saved__button"
                  >
                    Move to cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saved;
