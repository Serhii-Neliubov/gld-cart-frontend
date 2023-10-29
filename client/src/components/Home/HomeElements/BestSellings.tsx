import { FC } from "react";
import "./BestSellings.scss";
import { useTranslation } from "react-i18next";

const BestSellings: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="page__best-sellings best-sellings">
      <div className="best-sellings__container">
        <div className="best-sellings__see-more">
          <h3>{t("Best Selling For Woman’s")}</h3>
          <p>{t("Easiest way to Buy best and good quality product")}</p>
          <button>{t("See more")}</button>
        </div>
        <div className="best-sellings__blocks blocks">
          <button className="blocks__arrow blocks__arrow_left"></button>

          <div className="blocks__items">
            <div className="best-sellings__block blocks__item">
              <picture>
                <img
                  className="blocks__image"
                  src="HomePage/best-sellings/best1.png"
                  alt="Image"
                />
              </picture>
              <h4 className="blocks__title">Giorgio Armani</h4>
              <div className="blocks__desc">
                <p className="blocks__price">₹1250</p>
                <p className="blocks__discount">₹2190</p>
                <p className="blocks__percent">43% {t("off")}</p>
              </div>
            </div>
            <div className="best-sellings__block blocks__item">
              <picture>
                <img
                  className="blocks__image"
                  src="HomePage/best-sellings/best1.png"
                  alt="Image"
                />
              </picture>
              <h4 className="blocks__title">Giorgio Armani</h4>
              <div className="blocks__desc">
                <p className="blocks__price">₹1250</p>
                <p className="blocks__discount">₹2190</p>
                <p className="blocks__percent">43% {t("off")}</p>
              </div>
            </div>
            <div className="best-sellings__block blocks__item">
              <picture>
                <img
                  className="blocks__image"
                  src="HomePage/best-sellings/best1.png"
                  alt="Image"
                />
              </picture>
              <h4 className="blocks__title">Giorgio Armani</h4>
              <div className="blocks__desc">
                <p className="blocks__price">₹1250</p>
                <p className="blocks__discount">₹2190</p>
                <p className="blocks__percent">43% {t("off")}</p>
              </div>
            </div>
          </div>
          <button className="blocks__arrow blocks__arrow_right"></button>
        </div>
      </div>
    </div>
  );
};

export default BestSellings;
