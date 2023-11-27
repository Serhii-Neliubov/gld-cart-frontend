"use client";
import "./Label.scss";
import Link from "next/link";
import {
  selectIsAuth,
  userDataSelector,
} from "../src/redux/Slices/userDataSlice.ts";
import { useTranslation } from "react-i18next";
import React, { FC } from "react";
import { RootState } from "../src/redux/store.ts";
import IUser from "../src/models/IUser.ts";
import { useSelector } from "react-redux";

interface NavLinkProps {
  to: string;
  label: string;
}

const Label: FC = () => {
  const isAuth = useSelector<RootState, boolean>(selectIsAuth);
  const user = useSelector<RootState, IUser>(userDataSelector);
  const { t } = useTranslation();
  const navLinks: NavLinkProps[] = [
    { to: "/", label: t("home") },
    {
      to: user.type == "Vendor" ? "/renting-category-page" : "/renting",
      label: t("renting"),
    },
    {
      to: user.type == "Vendor" ? "/products-category-page" : "/products",
      label: t("products"),
    },
    { to: "/professional-services", label: t("professional services") },
    { to: "/contact-us", label: t("contact us") },
  ];

  return (
    <div className="page__label label">
      <div className="label__container">
        <h2 className="label__title">{t("Exclusive")}</h2>
        <div className="label__menu">
          <nav className="label__body">
            <ul className="label__list">
              {navLinks.map((navLink) => (
                <li className="label__item" key={navLink.to}>
                  <Link
                    href={navLink.to}
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
            </ul>
          </nav>
        </div>
        <div className="label__actions">
          {user.type == "Vendor" ? null : (
            <>
              <Link href="/wishlist" className="label__like-btn">
                <img src="/like-icon.svg" alt="Like icon" />
              </Link>
              <Link href="/shopping-cart" className="label__trash-btn">
                <img src="/trash-icon.svg" alt="Trash icon" />
              </Link>
            </>
          )}

          <Link
            href={isAuth ? "/profile" : "/login"}
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
