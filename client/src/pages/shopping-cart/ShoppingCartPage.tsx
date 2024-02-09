import React, {useState} from "react";
import styles from "./ShoppingCartPage.module.scss";
import Footer from "../../components/Footer/Footer.tsx";
import { FC } from "react";
import NoItems from "../../components/NoItems/NoItems.tsx";
import {ShoppingCartWindow} from "./components/ShoppingCartWindow.tsx";

const ShoppingCartPage: FC = () => {
    const [isCartEmpty,] = useState(false);

    return (
    <React.Fragment>
      <div className={styles.body}>
        <div className="__container">
          <h1>Shopping Cart</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Shopping Cart</span>
          </div>
            {isCartEmpty ?
                <NoItems title="No Cart Items Found" /> :
                <ShoppingCartWindow />
            }
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ShoppingCartPage;
