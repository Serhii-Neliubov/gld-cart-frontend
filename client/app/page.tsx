"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import "./global.scss";
import "./page.scss";
import { store } from "../src/redux/store";
import { Provider } from "react-redux";
import Header from "../components/Header";
import Label from "../components/Label";
import Footer from "../components/Footer";

export default function Page() {
  const { t } = useTranslation();

  const SavedItems = [
    {
      backgroundImage: "url(HomePage/saved/img1.png)",
      price: "$99.50",
      desc: t("GoPro HERO6 4K Action Camera - Black"),
    },
    {
      backgroundImage: "url(HomePage/saved/img1.png)",
      price: "$99.50",
      desc: t("GoPro HERO6 4K Action Camera - Black"),
    },
    {
      backgroundImage: "url(HomePage/saved/img1.png)",
      price: "$99.50",
      desc: t("GoPro HERO6 4K Action Camera - Black"),
    },
    {
      backgroundImage: "url(HomePage/saved/img1.png)",
      price: "$99.50",
      desc: t("GoPro HERO6 4K Action Camera - Black"),
    },
  ];

  return (
    <div>
      <Provider store={store}>
        <Header />
        <Label />
        <div className="page__shop-now shop-now">
          <div className="shop-now__container">
            <div className="shop-now__content">
              <div className="shop-now__info">
                <div className="shop-now__icon">
                  <img src="apple-icon.png" alt="Icon" />
                </div>
                <div className="shop-now__description">
                  iPhone 14 {t("series")}
                </div>
              </div>
              <h1 className="shop-now__title">{t("Up to 10% off Voucher")}</h1>
              <button className="shop-now__button">{t("Shop now")}</button>
            </div>
            <div className="shop-now__image">
              <img src="iphone-img.png" alt="Image" />
            </div>
          </div>
        </div>
        <div className="page__companies companies">
          <div className="companies__container">
            <div className="companies__items">
              <div className="companies__item">
                <img
                  src="HomePage/companies/company1.png"
                  alt="Image company"
                />
              </div>
              <div className="companies__item">
                <img
                  src="HomePage/companies/company2.png"
                  alt="Image company"
                />
              </div>
              <div className="companies__item">
                <img
                  src="HomePage/companies/company3.png"
                  alt="Image company"
                />
              </div>
              <div className="companies__item">
                <img
                  src="HomePage/companies/company4.png"
                  alt="Image company"
                />
              </div>
              <div className="companies__item">
                <img
                  src="HomePage/companies/company5.png"
                  alt="Image company"
                />
              </div>
              <div className="companies__item">
                <img
                  src="HomePage/companies/company6.png"
                  alt="Image company"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="page__explore explore">
          <div className="explore__container">
            <div className="explore__text">
              <h2 className="explore__title">{t("explore")}</h2>

              <a href="#" className="explore__all-btn">
                See All
              </a>
            </div>
            <div className="explore__blocks">
              <div className="explore__blocks-column">
                <a href="#" className="explore__block-fashion">
                  <h3 className="explore__block-title">
                    {t("Near By Fashion")}
                  </h3>
                </a>
                <a href="#" className="explore__block-electronics">
                  <h3 className="explore__block-title">
                    {t("Near By Electronics")}
                  </h3>
                </a>
              </div>
              <div className="explore__blocks-column">
                <a href="#" className="explore__block-shops">
                  <h3 className="explore__block-title">
                    {t("Near By All Shops")}
                  </h3>
                </a>
                <a href="#" className="explore__block-furniture">
                  <h3 className="explore__block-title">
                    {t("Near By Furniture")}
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="page__best-sellings best-sellings">
          <div className="best-sellings__container">
            <div className="best-sellings__see-more">
              <h3>{t("Best Selling For Woman’s")}</h3>
              <p>{t("Easiest way to Buy best and good quality product")}</p>
              <button>{t("See more")}</button>
            </div>
            <div className="best-sellings__blocks blocks">
              <button className="blocks__arrow blocks__arrow_left"></button>

              <div className="blocks__items">
                <div className="best-sellings__block blocks__item">
                  <picture>
                    <img
                      className="blocks__image"
                      src="HomePage/best-sellings/best1.png"
                      alt="Image"
                    />
                  </picture>
                  <h4 className="blocks__title">Giorgio Armani</h4>
                  <div className="blocks__desc">
                    <p className="blocks__price">₹1250</p>
                    <p className="blocks__discount">₹2190</p>
                    <p className="blocks__percent">43% {t("off")}</p>
                  </div>
                </div>
                <div className="best-sellings__block blocks__item">
                  <picture>
                    <img
                      className="blocks__image"
                      src="HomePage/best-sellings/best1.png"
                      alt="Image"
                    />
                  </picture>
                  <h4 className="blocks__title">Giorgio Armani</h4>
                  <div className="blocks__desc">
                    <p className="blocks__price">₹1250</p>
                    <p className="blocks__discount">₹2190</p>
                    <p className="blocks__percent">43% {t("off")}</p>
                  </div>
                </div>
                <div className="best-sellings__block blocks__item">
                  <picture>
                    <img
                      className="blocks__image"
                      src="HomePage/best-sellings/best1.png"
                      alt="Image"
                    />
                  </picture>
                  <h4 className="blocks__title">Giorgio Armani</h4>
                  <div className="blocks__desc">
                    <p className="blocks__price">₹1250</p>
                    <p className="blocks__discount">₹2190</p>
                    <p className="blocks__percent">43% {t("off")}</p>
                  </div>
                </div>
              </div>
              <button className="blocks__arrow blocks__arrow_right"></button>
            </div>
          </div>
        </div>
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
        <div className="page__featured featured">
          <div className="featured__container">
            <div className="featured__label">
              <h5 className="featured__label-text">{t("Featured")}</h5>
            </div>
            <h3 className="featured__title">{t("New Arrival")}</h3>
            <div className="featured__items">
              <div className="featured__block-1 block-1">
                <div className="block-1__text">
                  <h3 className="block-1__items-title">PlayStation 5</h3>
                  <p className="block-1__items-desc">
                    {t(
                      "Black and White version of the PS5 coming out on sale."
                    )}
                  </p>
                  <a href="#" className="block-1__items-button">
                    {t("Shop now")}
                  </a>
                </div>
              </div>
              <div className="featured__columm">
                <div className="featured__block-2 block-2">
                  <div className="block-2__text">
                    <h3 className="block-2__items-title">
                      {t("Women’s Collections")}
                    </h3>
                    <p className="block-2__items-desc">
                      {t(
                        "Featured woman collections that give you another vibe."
                      )}
                    </p>
                    <a href="#" className="block-2__items-button">
                      {t("Shop now")}
                    </a>
                  </div>
                </div>
                <div className="featured__column-wrap">
                  <div className="featured__block-3 block-3">
                    <div className="block-3__text">
                      <h3 className="block-3__items-title">{t("Speakers")}</h3>
                      <p className="block-3__items-desc">
                        {t("Amazon wireless speakers")}
                      </p>
                      <a href="#" className="block-3__items-button">
                        {t("Shop now")}
                      </a>
                    </div>
                  </div>
                  <div className="featured__block-4 block-4">
                    <div className="block-4__text"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page__saved saved">
          <div className="saved__container">
            <div className="saved__content">
              <h3 className="saved__title">{t("Saved for later")}</h3>
              <div className="saved__items">
                {SavedItems.map((item) => {
                  return (
                    <div className="saved__item">
                      <div
                        className="saved__image"
                        style={{ backgroundImage: `${item.backgroundImage}` }}
                      ></div>
                      <span className="saved__price">{item.price}</span>
                      <p className="saved__desc">{item.desc}</p>
                      <button className="saved__button">
                        {t("Move to cart")}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Provider>
    </div>
  );
}
