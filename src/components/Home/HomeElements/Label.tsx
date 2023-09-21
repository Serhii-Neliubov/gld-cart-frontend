import React, { FC } from "react";
import "./Label.scss";
import { Link } from "react-router-dom";

const Label: FC = () => {
  return (
    <div className="page__label label">
      <div className="label__container">
        <h2 className="label__title">Exclusive</h2>
        <div className="label__menu">
          <nav className="label__body">
            <ul className="label__list">
              <li className="label__item">
                <Link to="/" className="label__link label__link_active">
                  Home
                </Link>
              </li>
              <li className="label__item">
                <Link to="/renting" className="label__link">
                  Renting
                </Link>
              </li>
              <li className="label__item">
                <Link to="/products" className="label__link">
                  Products
                </Link>
              </li>
              <li className="label__item">
                <Link to="/personal-services" className="label__link">
                  Professional Services
                </Link>
              </li>
              <li className="label__item">
                <Link to="/contact-us" className="label__link">
                  Contact Us
                </Link>
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
          <Link to="/user-type-page" className="label__profile-btn">
            <img src="profile-icon.svg" alt="Profile icon" />
            {/* <span>John Miller</span> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Label;
