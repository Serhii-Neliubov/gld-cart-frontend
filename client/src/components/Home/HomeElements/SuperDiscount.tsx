import { FC } from "react";
import "./SuperDiscount.scss";
import { useTranslation } from "react-i18next";

const SuperDiscount: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="page__super-discount super-discount">
      <div className="super-discount__container">
        <div className="super-discount__text">
          <div className="super-discount__title">
            {t("Super discount on more than 100K Rs")}
          </div>
          <div className="super-discount__desc">
            {t("Have you ever finally just write dummy info")}
          </div>
        </div>
        <a href="#" className="super-discount__button">
          {t("Shop now")}
        </a>
      </div>
    </div>
  );
};

export default SuperDiscount;
