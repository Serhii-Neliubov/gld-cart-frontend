import { useState } from "react";
import Footer from "@components/footer/Footer.tsx";
import styles from "./TrackOrder.module.scss";
import { Link } from "react-router-dom";
import useDefaultScrollPosition from "@hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";
import { useInput } from "@hooks/useInput/useInput.tsx";
import { trackOrderData } from "@assets/data/track-order.data.ts";

const TrackOrder = () => {
  useDefaultScrollPosition();

  const orderNumber = useInput('');

  const [isAgree, setIsAgree] = useState<boolean>(false);
  const [orderStatus] = useState<string>("Delivered");

  return (
    <>
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
              {trackOrderData.map((status, index) => {
                return (
                    <div key={index} className={styles.status}>
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
                  Enter your track number below:
                </span>
                <div className={styles.track_number}>
                <span>Tracker Number</span>
                  <input
                    type="text"
                    onChange={orderNumber.onChange}
                    value={orderNumber.value}
                    placeholder="Enter number e.g 111 222 333 123 "
                  />
                </div>
                <label className={styles.track_agree}>
                  <input checked={isAgree} onChange={() => setIsAgree(prev => !prev)} type="checkbox" />
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
              {trackOrderData.map((object, index) => {
                return (
                  orderStatus === object.status &&
                    <div key={index} className={styles.order_status_bar}>
                      <div>
                        <img src={object.img} alt="tick"/>
                        <span>Status : {object.status}</span>
                      </div>
                      <p>{object.text}</p>
                    </div>
                )}
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TrackOrder;
