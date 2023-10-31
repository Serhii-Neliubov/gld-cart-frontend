import styles from "./ShoppingCartPage.module.scss";
import SavedItems from "../../utils/SavedItems";
import { FC, useState } from "react";
import Footer from "../../components/UI/Footer";

const ShoppingCartPage: FC = () => {
  const [result] = useState<number>(0);

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
            <div className={styles.items}>
              {SavedItems.map(() => {
                return <div>123</div>;
              })}
            </div>
            <div className={styles.sidebar}>
              <div className={styles.total}>
                <h2>Subtotal</h2>
                <span>{result}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCartPage;
