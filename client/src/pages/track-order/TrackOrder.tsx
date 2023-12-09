import React, { FC, useState } from "react";
import Footer from "../../components/UI/Footer";
import styles from "./TrackOrder.module.scss";
import { Link } from "react-router-dom";

const TrackOrder: FC = () => {
  const [orderStatus] = useState<string>("On The Way");

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
              <div className={styles.status}>
                <div
                  className={
                    orderStatus === "Order Placed"
                      ? `${styles.status_bg_blue}`
                      : `${styles.status_bg}`
                  }
                >
                  <span
                    className={
                      orderStatus === "Order Placed"
                        ? `${styles.status_number_bg}`
                        : `${styles.status_number}`
                    }
                  >
                    1
                  </span>
                </div>
                <p className={styles.status_text}>Order Placed</p>
              </div>
              <div className={styles.status}>
                <div
                  className={
                    orderStatus === "Ready"
                      ? `${styles.status_bg_blue}`
                      : `${styles.status_bg}`
                  }
                >
                  <span
                    className={
                      orderStatus === "Ready"
                        ? `${styles.status_number_bg}`
                        : `${styles.status_number}`
                    }
                  >
                    2
                  </span>
                </div>
                <p className={styles.status_text}>Ready</p>
              </div>
              <div className={styles.status}>
                <div
                  className={
                    orderStatus === "On The Way"
                      ? `${styles.status_bg_blue}`
                      : `${styles.status_bg}`
                  }
                >
                  <span
                    className={
                      orderStatus === "On The Way"
                        ? `${styles.status_number_bg}`
                        : `${styles.status_number}`
                    }
                  >
                    3
                  </span>
                </div>
                <p className={styles.status_text}>On The Way</p>
              </div>
              <div className={styles.status}>
                <div
                  className={
                    orderStatus === "Delivered"
                      ? `${styles.status_bg_blue}`
                      : `${styles.status_bg}`
                  }
                >
                  <span
                    className={
                      orderStatus === "Delivered"
                        ? `${styles.status_number_bg}`
                        : `${styles.status_number}`
                    }
                  >
                    4
                  </span>
                </div>
                <p className={styles.status_text}>Delivered</p>
              </div>
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
              {orderStatus === "Order Placed" && (
                <div className={styles.order_status_bar}>
                  <div>
                    <img src="/order-tick.svg" alt="tick" />
                    <span>Status : Order Placed</span>
                  </div>
                  <p>Thank you ,your order has been successfully placed.</p>
                </div>
              )}
              {orderStatus === "Ready" && (
                <div className={styles.order_status_bar}>
                  <div>
                    <img src="/order-ready.svg" alt="tick" />
                    <span>Status : Ready</span>
                  </div>
                  <p>
                    Your order is prepared and ready for pickup at our store.
                    The delivery personnel will collect it within a few hours.
                  </p>
                </div>
              )}
              {orderStatus === "On The Way" && (
                <div className={styles.order_status_bar}>
                  <div>
                    <img src="/order-onthe-way.svg" alt="tick" />
                    <span>Status : On The Way</span>
                  </div>
                  <p>
                    Your order is on its way to your location. The delivery
                    personnel will be delivering it to you shortly.
                  </p>
                </div>
              )}
              {orderStatus === "Delivered" && (
                <div className={styles.order_status_bar}>
                  <div>
                    <img src="/order-delivered.svg" alt="tick" />
                    <span>Status : Delivered</span>
                  </div>
                  <p>
                    Your order has been delivered to your location. Thank you
                    for your purchase.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TrackOrder;
