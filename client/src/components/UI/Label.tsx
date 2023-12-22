import { Link, useLocation } from "react-router-dom";
import "./Label.scss";
import { useSelector } from "react-redux";
import {
  selectIsAuth,
  userDataSelector,
} from "../../redux/slices/userDataSlice";
import { useTranslation } from "react-i18next";
import { FC } from "react";
import { RootState } from "../../redux/store";
import IUser from "../../models/IUser";
import { NavLinkProps } from "../../interfaces/interfaces";

const Label: FC = () => {
  const location = useLocation();
  const isAuth = useSelector<RootState, boolean>(selectIsAuth);
  const user = useSelector<RootState, IUser>(userDataSelector);
  const { t } = useTranslation();
  const navLinks: NavLinkProps[] = [
    { to: "/", label: t("home") },
    {
      to: !isAuth
        ? "login"
        : user.type == "Vendor"
        ? "/renting-category-page"
        : "/renting",
      label: t("renting"),
    },
    {
      to: !isAuth
        ? "login"
        : user.type == "Vendor"
        ? "/products-category-page"
        : "/products",
      label: t("products"),
    },
    {
      to: user.type ? "/personal-services" : "login",
      label: t("professional services"),
    },
  ];

  return (
    <div className="page__label label">
      <div className="label__container">
        <h2 className="label__title">{t("Exclusive")}</h2>
        <div className="label__menu">
          <nav className="label__body">
            <ul className="label__list">
              {navLinks.map((navLink) => (
                <li className="label__item" key={navLink.label}>
                  <Link
                    to={navLink.to}
                    className={`label__link ${
                      location.pathname === navLink.to
                        ? "label__link_active"
                        : ""
                    }`}
                  >
                    {navLink.label}
                  </Link>
                </li>
              ))}
              <li className="label__item">
                <Link
                  to="/contact-us"
                  className={`label__link ${
                    location.pathname === "/contact-us"
                      ? "label__link_active"
                      : ""
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="label__actions">
          {user.type == "Vendor" ? null : (
            <>
              <Link
                to={!isAuth ? "/login" : "/wishlist"}
                className="label__like-btn"
              >
                <img src="/like-icon.svg" alt="Like icon" />
              </Link>
              <Link
                to={!isAuth ? "/login" : "/shopping-cart"}
                className="label__trash-btn"
              >
                <img src="/trash-icon.svg" alt="Trash icon" />
              </Link>
            </>
          )}

          <Link
            to={isAuth ? "/profile" : "/login"}
            className="label__profile-btn"
          >
            <img src="/profile-icon.svg" alt="Profile icon" />
            <span>
              {user.name} {user.surname}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Label;
