import React, { FC, useState } from "react";
import Footer from "../../components/UI/Footer";
import styles from "./TrackOrder.module.scss";
import { Link } from "react-router-dom";
import { statuses } from "../../utils/TrackOrderStatuses";

const TrackOrder: FC = () => {
  const [orderStatus] = useState<string>("");

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
              {/* LABEL WITH STATUSES */}
              {statuses.map((status, index) => {
                return (
                  <div className={styles.status}>
                    <div
                      className={
                        orderStatus === status.status
                          ? `${styles.status_bg_blue}`
                          : `${styles.status_bg}`
                      }
                    >
                      <span
                        className={
                          orderStatus === status.status
                            ? `${styles.status_number_bg}`
                            : `${styles.status_number}`
                        }
                      >
                        {index + 1}
                      </span>
                    </div>
                    <p className={styles.status_text}>{status.status}</p>
                  </div>
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
              {/* MODAL WINDOWS WITH STATUS */}
              {statuses.map((status) => {
                return (
                  orderStatus === status.status && (
                    <div className={styles.order_status_bar}>
                      <div>
                        <img src={status.img} alt="tick" />
                        <span>Status : {status.status}</span>
                      </div>
                      <p>{status.text}</p>
                    </div>
                  )
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
