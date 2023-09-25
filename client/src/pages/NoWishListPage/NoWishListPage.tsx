import { Link } from "react-router-dom";
import Label from "../../components/Home/HomeElements/Label";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header";
import styles from "./NoWishListPage.module.scss";

const NoWishListPage = () => {
  return (
    <>
      <div className={styles.body}>
        <Header />
        <Label />
        <div className="__container">
          <h1>Wishlist</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Wishlist</span>
          </div>
          <div className={styles.content}>
            <h2>No Wishlist Items Found</h2>
            <Link className={styles.link} to="/products">
              Continue Shipping
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default NoWishListPage;
