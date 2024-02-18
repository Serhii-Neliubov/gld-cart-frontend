import React from 'react';
import { FC } from "react";
import styles from "./Renting.module.scss";
import Footer from "@/components/footer/Footer.tsx";
import {RentingCategoryItemList} from "./components/renting-page/RentingCategoryItemList.tsx";
import useDefaultScrollPosition from "@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

const Renting: FC = () => {
  useDefaultScrollPosition();

  return (
    <React.Fragment>
      <div className="__container">
        <h1 className={styles.title}>
          Select <span>renting</span> Category
        </h1>
        <RentingCategoryItemList />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Renting;
