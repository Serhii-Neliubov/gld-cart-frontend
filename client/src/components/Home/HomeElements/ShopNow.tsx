import { FC } from "react";
import "./ShopNow.scss";
import { useTranslation } from "react-i18next";

const ShopNow: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="page__shop-now shop-now">
      <div className="shop-now__container">
        <div className="shop-now__content">
          <div className="shop-now__info">
            <div className="shop-now__icon">
              <img src="apple-icon.png" alt="Icon" />
            </div>
            <div className="shop-now__description">iPhone 14 {t("series")}</div>
          </div>
          <h1 className="shop-now__title">{t("Up to 10% off Voucher")}</h1>
          <button className="shop-now__button">{t("Shop now")}</button>
        </div>
        <div className="shop-now__image">
          <img src="iphone-img.png" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default ShopNow;
