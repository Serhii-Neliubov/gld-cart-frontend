import React, { FC, useEffect, useState } from "react";
import Footer from "../../components/UI/Footer";
import styles from "./TrackOrder.module.scss";
import { Link } from "react-router-dom";
import { statuses } from "../../utils/TrackOrderStatuses";
import StatusBar from "./StatusBar";
import StatusNumber from "./StatusNumber";

const TrackOrder: FC = () => {
  const [orderStatus] = useState<string>("Delivered");

  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className={styles.main}>
        <div className="__container">
          <div className={styles.content}>
            <div className={styles.text}>
              <h1 className={styles.title}>
                -Want to know what’s happening with your Order right now? -
              </h1>
              <span className={styles.subtitle}>
                Tracker to keep you up to date on the status of your order.
              </span>
            </div>
            <div className={styles.label}>
              {/* ITEM NUMBER STATUS */}
              {statuses.map((status, index) => {
                return (
                  <StatusNumber
                    status={status}
                    index={index}
                    orderStatus={orderStatus}
                  />
                );
              })}
            </div>
          </div>
          <div className={styles.track_window}>
            <div className={styles.track_label}>
              <h2 className={styles.track_title}>track your order</h2>
            </div>
            <div className={styles.track_content}>
              <div>
                <span className={styles.track_enter_number}>
                  Enter your phone number below:
                </span>
                <div className={styles.track_number}>
                  <span>Tracker Number</span>
                  <input
                    type="text"
                    placeholder="Enter number e.g 111 222 333 123 "
                  />
                </div>
                <label className={styles.track_agree}>
                  <input type="checkbox" />
                  <p>
                    Yes. I agree to{" "}
                    <Link to="/terms-and-conditions" style={{ color: "red" }}>
                      term's & Conditions
                    </Link>{" "}
                    and I'm 13 or older
                  </p>
                </label>
                <button className={styles.track_button}>
                  Track your Order
                </button>
              </div>
              {/* ITEM WINDOW STATUS */}
              {statuses.map((object) => {
                return (
                  orderStatus === object.status && <StatusBar status={object} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrackOrder;
