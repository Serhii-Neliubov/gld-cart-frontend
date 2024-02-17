import React from 'react';
import { FC, useEffect } from "react";
import styles from "./Renting.module.scss";
import Footer from "../../components/footer/Footer.tsx";
import {RentingCategoryItemList} from "./components/renting-page/RentingCategoryItemList.tsx";

const Renting: FC = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="__container">
        <h1 className={styles.title}>
          Select <span>renting</span> Category
        </h1>
        <RentingCategoryItemList />
      </div>В
      <Footer />
    </React.Fragment>
  );
};

export default Renting;
