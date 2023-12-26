import React from 'react'
import styles from "./WishlistPage.module.scss";
import Footer from "../../components/Footer/Footer";
import { FC } from "react";
import NoItems from "../../components/NoItems/NoItems.tsx";

const WishlistPage: FC = () => {
  return (
    <React.Fragment>
      <div className={styles.body}>
        <div className="__container">
          <h1>Wishlist</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Wishlist</span>
          </div>
          <NoItems title="No Wishlist Items Found" />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default WishlistPage;
