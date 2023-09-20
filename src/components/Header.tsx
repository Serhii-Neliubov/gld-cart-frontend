import { FC } from "react";
import "./Header.scss";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="header__container">
        <a href="#" className="header__logo">
          <picture>
            <source srcSet="logo.webp" type="webp" />
            <img src="logo.png" alt="Logo" />
          </picture>
        </a>
        <div className="header__input">
          <input placeholder="What are you looking for?" type="text" />
          <button className="header__search-btn" />
        </div>
        <div className="header__button-lang">
          <span>English</span>
          <img src="arrow-down.svg" alt="arrow down" />
        </div>
      </div>
    </div>
  );
};

export default Header;
