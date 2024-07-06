import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Label.scss';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { FC } from 'react';
import {RootState} from '@/store/store.ts';
import {selectIsAuth, userDataSelector} from '@/store/slices/userDataSlice.ts';
import IUser from '@/utils/models/IUser.ts';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface NavLink {
  to: string;
  label: string;
}

import imageProfile from '@/assets/images/profile-icon.svg';
import imageLike from '@/assets/images/like-icon.svg';
import imageTrash from '@/assets/images/trash-icon.svg';


const Label: FC = () => {
  const location = useLocation();
  const isAuth = useSelector<RootState, boolean>(selectIsAuth);
  const user = useSelector<RootState, IUser>(userDataSelector);
  const { t } = useTranslation();

  const navLinks: NavLink[] = [
    { to: "/", label: t("home") },
    {
      to: "/professional-services",
      label: t("professional services"),
    },
    {
      to: user.type
          ? "/driver-license"
          : "/login",
      label: t("driver license"),
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
          <Skeleton
              circle
              height="100%"
              containerClassName="avatar-skeleton"
          />
          {user.type == "Vendor" ? null : (
            <React.Fragment>
              <Link
                to={!isAuth ? "/login" : "/wishlist"}
                className="label__like-btn"
              >
                <img src={imageLike} alt="Like icon" />
              </Link>
              <Link
                to={!isAuth ? "/login" : "/shopping-cart"}
                className="label__trash-btn"
              >
                <img src={imageTrash} alt="Trash icon" />
              </Link>
            </React.Fragment>
          )}
          <Link
            to={isAuth ? "/profile" : "/login"}
            className="label__profile-btn"
          >
            <img src={imageProfile} alt="Profile icon" />
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
