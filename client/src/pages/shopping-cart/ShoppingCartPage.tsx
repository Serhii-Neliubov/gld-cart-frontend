import styles from "./ShoppingCartPage.module.scss";
import Footer from "../../components/UI/Footer";
import { FC } from "react";
import NoItems from "../../components/UI/NoItems";

const ShoppingCartPage: FC = () => {
  return (
    <>
      <div className={styles.body}>
        <div className="__container">
          <h1>Shopping Cart</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Shopping Cart</span>
          </div>
          <NoItems title="No Cart Items Found" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
