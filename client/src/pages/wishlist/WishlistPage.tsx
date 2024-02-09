import React, {useState} from 'react'
import styles from "./WishlistPage.module.scss";
import Footer from "../../components/Footer/Footer";
import { FC } from "react";
import NoItems from "../../components/NoItems/NoItems.tsx";
import { WishlistWindow } from './components/WishlistWindow.tsx';

const WishlistPage: FC = () => {
    const [isCartEmpty,] = useState(false);

  return (
    <React.Fragment>
      <div className={styles.body}>
        <div className="__container">
          <h1>Wishlist</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Wishlist</span>
          </div>
            {isCartEmpty ?
                <NoItems title="No Wishlist Items Found" /> :
                <WishlistWindow />
            }
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default WishlistPage;
