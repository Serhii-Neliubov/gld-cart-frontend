import styles from "./ShoppingCartPage.module.scss";
import Footer from "../../components/Footer/Footer.tsx";
import { FC } from "react";
import NoItems from "../../components/NoItems/NoItems.tsx";

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
