import React, { FC } from "react";
import "./Label.scss";

const Label: FC = () => {
  return (
    <div className="page__label label">
      <div className="label__container">
        <h2 className="label__title">Exclusive</h2>
        <div className="label__menu">
          <nav className="label__body">
            <ul className="label__list">
              <li className="label__item">
                <a href="/home" className="label__link label__link_active">
                  Home
                </a>
              </li>
              <li className="label__item">
                <a href="/renting" className="label__link">
                  Renting
                </a>
              </li>
              <li className="label__item">
                <a href="#" className="label__link">
                  Products
                </a>
              </li>
              <li className="label__item">
                <a href="#" className="label__link">
                  Professional Services
                </a>
              </li>
              <li className="label__item">
                <a href="#" className="label__link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="label__actions">
          <button className="label__like-btn">
            <img src="like-icon.svg" alt="Like icon" />
          </button>
          <button className="label__trash-btn">
            <img src="trash-icon.svg" alt="Trash icon" />
          </button>
          <button className="label__profile-btn">
            <img src="profile-icon.svg" alt="Profile icon" />
            <span>John Miller</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Label;
