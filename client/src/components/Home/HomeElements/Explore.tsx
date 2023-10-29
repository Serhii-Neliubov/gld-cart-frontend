import { FC } from "react";
import "./Explore.scss";
import { useTranslation } from "react-i18next";

const Explore: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="page__explore explore">
      <div className="explore__container">
        <div className="explore__text">
          <h2 className="explore__title">{t("explore")}</h2>

          <a href="#" className="explore__all-btn">
            See All
          </a>
        </div>
        <div className="explore__blocks">
          <div className="explore__blocks-column">
            <a href="#" className="explore__block-fashion">
              <h3 className="explore__block-title">{t("Near By Fashion")}</h3>
            </a>
            <a href="#" className="explore__block-electronics">
              <h3 className="explore__block-title">
                {t("Near By Electronics")}
              </h3>
            </a>
          </div>
          <div className="explore__blocks-column">
            <a href="#" className="explore__block-shops">
              <h3 className="explore__block-title">{t("Near By All Shops")}</h3>
            </a>
            <a href="#" className="explore__block-furniture">
              <h3 className="explore__block-title">{t("Near By Furniture")}</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
