import styles from "./WishlistPage.module.scss";
import Footer from "../../components/UI/Footer";
import { FC } from "react";
import NoItems from "../../components/UI/NoItems";

const WishlistPage: FC = () => {
  return (
    <>
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
    </>
  );
};

export default WishlistPage;
