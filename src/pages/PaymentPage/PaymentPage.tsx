import { useEffect } from "react";
import Label from "../../components/Home/HomeElements/Label";
import Footer from "../../components/UI/Footer";
import Header from "../../components/UI/Header";
import styles from "./PaymentPage.module.scss";

const Payment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Label />
      <div className="__container">
        <div className={styles.body}>
          <h1 className={styles.title}>Select Payment Method</h1>
          <div className={styles.blocks}>
            <button className={styles.block}>
              <img src="Payment/google.png" alt="Icon" />
              <span>Google Pay</span>
            </button>
            <button className={styles.block}>
              <img src="Payment/apple.svg" alt="Icon" />
              <span>Apple Pay</span>
            </button>
            <button className={styles.block}>
              <img src="Payment/credit-card.svg" alt="Icon" />
              <span>Credit Card</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
