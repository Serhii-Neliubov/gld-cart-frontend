"use client";
import { FC, useEffect } from "react";
import "./page.module.scss";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Label from "../../components/Label";
import { Provider } from "react-redux";
import { store } from "../../src/redux/store";

const Renting: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Provider store={store}>
      <Header />
      <Label />
      <div className="__container">
        <h1 className="title">
          Select <span>renting</span> Category
        </h1>
        <div className="blocks">
          <Link href="/renting-car" className="block">
            <div className="image">
              <img src="RentingPage/img1.png" alt="Image" />
            </div>

            <span>Vehicles</span>
          </Link>
          <Link href="/renting-house" className="block">
            <div className="image">
              <img src="RentingPage/img2.png" alt="Image" />
            </div>

            <span>Houses</span>
          </Link>
          <Link href="/renting-electronics" className="block">
            <div className="image">
              <img src="RentingPage/img3.png" alt="Image" />
            </div>
            <span>Electronics</span>
          </Link>
        </div>
      </div>
      <Footer />
    </Provider>
  );
};

export default Renting;
