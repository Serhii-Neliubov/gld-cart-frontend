import { FC, useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const languages = ["Russian", "Spanish", "Ukrainian", "German"];

const Header: FC = () => {
  const [openLanguageModal, setOpenLanguageModal] = useState(false);

  function changeLanguageHandler() {
    setOpenLanguageModal((prev) => !prev);
  }

  return (
    <div className="header">
      <div className="header__container">
        <Link to="/home" className="header__logo">
          <picture>
            <source srcSet="logo.webp" type="webp" />
            <img src="logo.png" alt="Logo" />
          </picture>
        </Link>
        <div className="header__input">
          <input placeholder="What are you looking for?" type="text" />
          <button className="header__search-btn" />
        </div>
        <div onClick={changeLanguageHandler} className="header__button-lang">
          <span>English</span>
          <img src="arrow-down.svg" alt="arrow down" />
          {openLanguageModal && (
            <div className="header__language-modal">
              {languages.map((language) => (
                <div className="header__language-modal-elem">{language}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
