import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import { Link } from "react-router-dom";

const languages = ["English", "Russian", "Ukrainian", "German"];

const Header: FC = () => {
  const [openLanguageModal, setOpenLanguageModal] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>("English");

  const { t, i18n } = useTranslation();

  const languageCodes: { [key: string]: string } = {
    English: "en",
    Russian: "ru",
    Ukrainian: "ua",
    German: "de",
  };

  const changeLanguage = (newLanguage: string) => {
    i18n.changeLanguage(languageCodes[newLanguage]);
    setLanguage(newLanguage);
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
        <div
          onClick={() => setOpenLanguageModal((prev) => !prev)}
          className="header__button-lang"
        >
          <span>{language}</span>
          <img src="HomePage/header/arrow-down.svg" alt="arrow down" />
          {openLanguageModal && (
            <div className="header__language-modal">
              {languages
                .filter((lang) => lang !== language)
                .map((lang) => (
                  <div
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className="header__language-modal-elem"
                  >
                    {lang}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
