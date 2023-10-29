import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header: FC = () => {
  const [openLanguageModal, setOpenLanguageModal] = useState(false);
  const { t, i18n } = useTranslation();
  function changeLanguageHandler() {
    setOpenLanguageModal((prev) => !prev);
  }

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/" className="header__logo">
          <img src="HomePage/header/logo.png" alt="Logo" />
        </Link>
        <div className="header__input">
          <input placeholder={t("What are you looking for?")} type="text" />
          <button className="header__search-btn" />
        </div>
        <div onClick={changeLanguageHandler} className="header__button-lang">
          <span>English</span>
          <img src="HomePage/header/arrow-down.svg" alt="arrow down" />
          {openLanguageModal && (
            <div className="header__language-modal">
              <div
                onClick={() => changeLanguage("ru")}
                className="header__language-modal-elem"
              >
                Russian
              </div>
              <div className="header__language-modal-elem">Spanish</div>
              <div className="header__language-modal-elem">Ukrainian</div>
              <div className="header__language-modal-elem">German</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
