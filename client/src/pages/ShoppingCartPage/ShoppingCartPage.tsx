import { Link } from "react-router-dom";
import styles from "./ShoppingCartPage.module.scss";

const ShoppingCartPage = () => {
  return (
    <>
      <div className={styles.body}>
        <div className="__container">
          <h1>Shopping Cart</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Shopping Cart</span>
          </div>
          <div className={styles.content}></div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartPage;
