import { FC } from "react";
import "./ShopNow.scss";

const ShopNow: FC = () => {
  return (
    <div className="page__shop-now shop-now">
      <div className="shop-now__container">
        <div className="shop-now__content">
          <div className="shop-now__info">
            <div className="shop-now__icon">
              <img src="apple-icon.png" alt="Icon" />
            </div>
            <div className="shop-now__description">iPhone 14 Series</div>
          </div>
          <h1 className="shop-now__title">Up to 10% off Voucher</h1>
          <button className="shop-now__button">Shop Now</button>
        </div>
        <div className="shop-now__image">
          <img src="iphone-img.png" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
