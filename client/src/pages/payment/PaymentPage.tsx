import { FC, useEffect, useState } from "react";
import styles from "./PaymentPage.module.scss";
import PaymentModal from "./PaymentModal";
import Footer from "../../components/Footer/Footer.tsx";

// eslint-disable-next-line react-refresh/only-export-components
export const clearModalActiveParams = {
  google: false,
  apple: false,
  credit: false,
  delivery: false,
};

interface IClearModalActiveParams {
  google: boolean;
  apple: boolean;
  credit: boolean;
  delivery: boolean;
}

const Payment: FC = () => {
  const [modalActive, setModalActive] = useState<IClearModalActiveParams>(
    clearModalActiveParams
  );

  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="__container">
        <div className={styles.body}>
          <h1 className={styles.title}>Select Payment Method</h1>
          <div className={styles.blocks}>
            <button
              onClick={() => {
                setModalActive(clearModalActiveParams);
                setModalActive({ ...clearModalActiveParams, google: true });
              }}
              className={
                modalActive.google
                  ? `${styles.block_active}`
                  : `${styles.block}`
              }
            >
              <img src="Payment/google.png" alt="Icon" />
              <span>Google Pay</span>
            </button>
            <button
              onClick={() => {
                setModalActive(clearModalActiveParams);
                setModalActive({ ...clearModalActiveParams, apple: true });
              }}
              className={
                modalActive.apple ? `${styles.block_active}` : `${styles.block}`
              }
            >
              <img src="Payment/apple.svg" alt="Icon" />
              <span>Apple Pay</span>
            </button>
            <button
              onClick={() => {
                setModalActive(clearModalActiveParams);
                setModalActive({ ...clearModalActiveParams, credit: true });
              }}
              className={
                modalActive.credit
                  ? `${styles.block_active}`
                  : `${styles.block}`
              }
            >
              <img src="Payment/credit-card.svg" alt="Icon" />
              <span>Credit Card</span>
            </button>
            <button
              onClick={() => {
                setModalActive(clearModalActiveParams);
                setModalActive({ ...clearModalActiveParams, delivery: true });
              }}
              className={
                modalActive.delivery
                  ? `${styles.block_active}`
                  : `${styles.block}`
              }
            >
              <img src="Payment/img5.png" alt="Icon" />
              <span>Cash on Delivery</span>
            </button>
          </div>
          {modalActive.google && <PaymentModal title="Google Pay" />}
          {modalActive.apple && <PaymentModal title="Apple Pay" />}
          {modalActive.delivery && (
            <PaymentModal
              title="Home Address"
              secondInput="full name"
              secondInputTitle="Your Name"
            />
          )}
          {modalActive.credit && (
            <PaymentModal
              title="Card Number"
              secondInput="Card holder name"
              secondInputTitle="Name On Card"
            />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
