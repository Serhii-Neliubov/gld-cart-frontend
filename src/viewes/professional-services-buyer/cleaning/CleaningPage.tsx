import Footer from "../../../components/footer/Footer.tsx";
import styles from "./CleaningPage.module.scss";
import React, { FC } from "react";
import {CleaningList} from "./components/CleaningList.tsx";

const CleaningPage: FC = () => {
  return (
    <React.Fragment>
      <div className={styles.body}>
        <div className="__container">
          <h1 className={styles.title}>Rental Listings</h1>
          <div className={styles.content}>
            <div className={styles.filter}>
              <div className={styles.filter_content}>
                <h5 className={styles.filter_title}>Price Filter</h5>
                <div className={styles.filter_label} />
                <div className={styles.filter_price}>
                  <div className={styles.filter_price_text}>
                    <p>$0</p>
                    <p>$1199</p>
                  </div>

                  <button>Filter</button>
                </div>
                <div className={styles.filter_blocks}>
                  <button className={styles.filter_block}>
                    <img src="/RentingCar/Vector-5.svg" alt="Img" />
                    <p>Select Location</p>
                  </button>
                  <button className={styles.filter_block}>
                    <img src="/RentingCar/Vector-1.svg" alt="Img" />
                    <p>Pik-up Date</p>
                  </button>
                  <button className={styles.filter_block}>
                    <img src="/RentingCar/Vector-2.svg" alt="Img" />
                    <p>Pik-up Time</p>
                  </button>
                  <button className={styles.filter_block}>
                    <img src="/RentingCar/Vector-3.svg" alt="Img" />
                    <p>Drop-off Date</p>
                  </button>
                  <button className={styles.filter_block}>
                    <img src="/RentingCar/Vector-4.svg" alt="Img" />
                    <p>Drop-off Time</p>
                  </button>
                </div>
                <div className={styles.reset}>
                  <span className={styles.reset_text}>Reset Filter</span>
                  <button className={styles.reset_button}>Reset Filter</button>
                </div>
              </div>
              <button className={styles.filter_button}>FIND MY RENTALS</button>
            </div>
            <CleaningList />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default CleaningPage;
