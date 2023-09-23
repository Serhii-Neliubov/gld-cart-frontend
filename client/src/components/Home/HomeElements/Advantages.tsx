import { FC } from "react";
import "./Advantages.scss";

const Advantages: FC = () => {
  return (
    <div className="page__advantages advantages">
      <div className="advantages__container">
        <div className="advantages__items">
          <div className="advantages__item">
            <div className="advantages__image">
              <img src="HomePage/advantages/delivery.svg" alt="Icon" />
            </div>
            <div className="advantages__text">
              <h4 className="advantages__title">Free Delivery</h4>
              <p className="advantages__desc">Orders from all item</p>
            </div>
          </div>
          <div className="advantages__item">
            <div className="advantages__image">
              <img src="HomePage/advantages/refund.svg" alt="Icon" />
            </div>
            <div className="advantages__text">
              <h4 className="advantages__title">Return & Refund</h4>
              <p className="advantages__desc">Money back guarantee</p>
            </div>
          </div>
          <div className="advantages__item">
            <div className="advantages__image">
              <img src="HomePage/advantages/discount.svg" alt="Icon" />
            </div>
            <div className="advantages__text">
              <h4 className="advantages__title">Member Discount</h4>
              <p className="advantages__desc">Onevery order over $140.00</p>
            </div>
          </div>
          <div className="advantages__item">
            <div className="advantages__image">
              <img src="HomePage/advantages/support.svg" alt="Icon" />
            </div>
            <div className="advantages__text">
              <h4 className="advantages__title">Support 24/7</h4>
              <p className="advantages__desc">Contact us 24 hours a day</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
