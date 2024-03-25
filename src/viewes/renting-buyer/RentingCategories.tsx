import React from 'react';
import { FC } from "react";
import styles from "./RentingCategories.module.scss";
import Footer from "@/components/footer/Footer.tsx";
import useDefaultScrollPosition from "@/hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

import img1 from "@/assets/images/RentingPage/img1.png";
import img2 from "@/assets/images/RentingPage/img2.png";
import img3 from "@/assets/images/RentingPage/img3.png";
import {Link} from "react-router-dom";

interface IRentingCategory {
  title: string,
  imageURL: string,
  category: string,
}

const rentingCategories:IRentingCategory[] = [
  {
    title: 'Vehicles',
    imageURL: img1,
    category: 'vehicles'
  },
  {
    title: 'Houses',
    imageURL: img2,
    category: 'houses'
  },
  {
    title: 'Electronics',
    imageURL: img3,
    category: 'electronics'
  }
]

const RentingCategories: FC = () => {
  useDefaultScrollPosition();

  return (
    <React.Fragment>
      <div className="__container">
        <h1 className={styles.title}>
          Select <span>renting</span> Category
        </h1>
        <div className={styles.blocks}>
          {rentingCategories.map((item, index) =>
            <Link to={`${item.category}`} key={index} className={styles.block}>
              <div className={styles.image}>
                <img src={item.imageURL} alt="Image" />
              </div>
              <span>{item.title}</span>
            </Link>
          )}
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default RentingCategories;
