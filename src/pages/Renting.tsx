import React, { FC } from "react";
import "./Renting.module.scss";
import Header from "../components/UI/Header";
import Label from "../components/Home/HomeElements/Label";
import Footer from "../components/UI/Footer";
import styles from "./Renting.module.scss";

const Renting: FC = () => {
  return (
    <>
      <Header />
      <Label />
      <div className="__container">
        <h1 className={styles.title}>
          Select <span>renting</span> Category
        </h1>
        <div className={styles.blocks}>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="RentingPage/img1.png" alt="Image" />
            </div>

            <span>Vehicles</span>
          </a>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="RentingPage/img2.png" alt="Image" />
            </div>

            <span>Houses</span>
          </a>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="RentingPage/img3.png" alt="Image" />
            </div>
            <span>Electronics</span>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Renting;
