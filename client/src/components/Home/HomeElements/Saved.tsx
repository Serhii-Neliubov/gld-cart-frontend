import { FC } from "react";
import "./Saved.scss";
import { useTranslation } from "react-i18next";
const Saved: FC = () => {
  const { t } = useTranslation();

  const SavedItems = [
    {
      backgroundImage: "url(HomePage/saved/img1.png)",
      price: "$99.50",
      desc: t("GoPro HERO6 4K Action Camera - Black"),
    },
    {
      backgroundImage: "url(HomePage/saved/img1.png)",
      price: "$99.50",
      desc: t("GoPro HERO6 4K Action Camera - Black"),
    },
    {
      backgroundImage: "url(HomePage/saved/img1.png)",
      price: "$99.50",
      desc: t("GoPro HERO6 4K Action Camera - Black"),
    },
    {
      backgroundImage: "url(HomePage/saved/img1.png)",
      price: "$99.50",
      desc: t("GoPro HERO6 4K Action Camera - Black"),
    },
  ];
  return (
    <div className="page__saved saved">
      <div className="saved__container">
        <div className="saved__content">
          <h3 className="saved__title">{t("Saved for later")}</h3>
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
                  <button className="saved__button">{t("Move to cart")}</button>
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
