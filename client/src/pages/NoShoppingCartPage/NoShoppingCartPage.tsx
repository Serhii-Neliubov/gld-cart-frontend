import { Link } from "react-router-dom";
import styles from "./NoShoppingCartPage.module.scss";
import Footer from "../../components/UI/Footer";
import { FC } from "react";

const NoShoppingCartPage: FC = () => {
  return (
    <>
      <div className={styles.body}>
        <div className="__container">
          <h1>Shopping Cart</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Shopping Cart</span>
          </div>
          <div className={styles.content}>
            <h2>No Cart Items Found</h2>
            <Link className={styles.link} to="/products">
              Continue Shipping
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NoShoppingCartPage;
