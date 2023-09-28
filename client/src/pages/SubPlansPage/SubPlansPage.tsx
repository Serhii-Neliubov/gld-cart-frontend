import { useEffect } from "react";
import styles from "./SubPlansPage.module.scss";
import { Link } from "react-router-dom";
import Footer from "../../components/UI/Footer";

const SubPlansPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="__container">
        <div className={styles.body}>
          <h1 className={styles.title}>
            Get Extra Features with our Subscription Plans
          </h1>
          <div className={styles.blocks}>
            <div
              style={{ border: "1px solid rgba(34, 131, 220, 0.41)" }}
              className={styles.block}
            >
              <div className={styles.block_img}>
                <img src="SubPlans/icon1.svg" alt="Icon" />
              </div>
              <h2 className={styles.block_title}>Renting</h2>
              <p className={styles.block_text}>
                In this Package you can only rent your products
              </p>
              <span className={styles.block_price}>100$/Month</span>
              <span className={styles.block_price_desc}>Per User Monthly</span>
              <div className={styles.block_advantages}>
                <div className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: "rgba(34, 131, 220, 1)" }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>Vehicles</span>
                </div>
                <div className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: "rgba(34, 131, 220, 1)" }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>Houses</span>
                </div>
                <div className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: "rgba(34, 131, 220, 1)" }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>Electronics</span>
                </div>
              </div>
              <Link
                to="/payment"
                style={{ backgroundColor: "#2283DC" }}
                className={styles.block_button}
              >
                Buy Now
              </Link>
              <div className={styles.reminder}>
                *Check Terms and Conditions Apply
              </div>
            </div>
            <div
              style={{ border: "1px solid rgba(2, 160, 160, 1)" }}
              className={styles.block}
            >
              <div className={styles.block_img}>
                <img src="SubPlans/icon2.svg" alt="Icon" />
              </div>
              <h2 className={styles.block_title}>Professional Services</h2>
              <p className={styles.block_text}>
                In this Package you can only Sell your Professional Services to
                your Clients
              </p>
              <span className={styles.block_price}>100$/Month</span>
              <span className={styles.block_price_desc}>Per User Monthly</span>
              <div className={styles.block_advantages}>
                <div className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: "rgba(2, 160, 160, 1)" }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>Cleaning</span>
                </div>
                <div className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: "rgba(2, 160, 160, 1)" }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>Repairing</span>
                </div>
                <div className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: "rgba(2, 160, 160, 1)" }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>Electrical</span>
                </div>
                <div className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: "rgba(2, 160, 160, 1)" }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>Handyman</span>
                </div>
                <div className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: "rgba(2, 160, 160, 1)" }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>Other Services</span>
                </div>
              </div>
              <Link
                to="/payment"
                style={{ backgroundColor: "rgba(2, 160, 160, 1)" }}
                className={styles.block_button}
              >
                Buy Now
              </Link>
              <div className={styles.reminder}>
                *Check Terms and Conditions Apply
              </div>
            </div>
            <div
              style={{ border: "1px solid rgba(220, 168, 34, 1)" }}
              className={styles.block}
            >
              <div className={styles.block_img}>
                <img src="SubPlans/icon3.svg" alt="Icon" />
              </div>
              <h2 className={styles.block_title}>Products</h2>
              <p className={styles.block_text}>
                In this Package you can only Sell your Products to your Clients
              </p>
              <span className={styles.block_price}>100$/Month</span>
              <span className={styles.block_price_desc}>Per User Monthly</span>
              <div className={styles.block_advantages}>
                <div className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: "rgba(220, 168, 34, 1)" }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>Beauty of Skin</span>
                </div>
                <div className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: "rgba(220, 168, 34, 1)" }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>Bags</span>
                </div>
                <div className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: "rgba(220, 168, 34, 1)" }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>Awesome Lip Care</span>
                </div>
                <div className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: "rgba(220, 168, 34, 1)" }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>Mobile & Tabs</span>
                </div>
                <div className={styles.block_advantage}>
                  <img
                    style={{ backgroundColor: "rgba(220, 168, 34, 1)" }}
                    src="SubPlans/tick.svg"
                    alt="Icon"
                  />
                  <span>Other Products</span>
                </div>
              </div>
              <Link
                to="/payment"
                style={{ backgroundColor: "rgba(220, 168, 34, 1)" }}
                className={styles.block_button}
              >
                Buy Now
              </Link>
              <div className={styles.reminder}>
                *Check Terms and Conditions Apply
              </div>
            </div>
            <div
              style={{
                padding: "39px 5px 5px 5px",
                borderRadius: "36px",
                backgroundColor: "#FAB706",
              }}
              className={styles.block_popular}
            >
              <span className={styles.popular}>Popular</span>
              <div
                style={{
                  border: "1px solid #FAB706",
                  backgroundColor: "#fff",
                }}
                className={styles.block}
              >
                <div className={styles.block_img}>
                  <img src="SubPlans/icon4.svg" alt="Icon" />
                </div>
                <h2 className={styles.block_title}>Renting</h2>
                <p className={styles.block_text}>
                  In this Package you can rent your products & Sell your
                  Professional Services to your Clients
                </p>
                <span className={styles.block_price}>150$/Month</span>
                <span className={styles.block_price_desc}>
                  Per User Monthly
                </span>
                <div className={styles.block_advantages}>
                  <div className={styles.block_advantage}>
                    <img
                      style={{ backgroundColor: "#FAB706" }}
                      src="SubPlans/tick.svg"
                      alt="Icon"
                    />
                    <span>Renting Services</span>
                  </div>
                  <div className={styles.block_advantage}>
                    <img
                      style={{ backgroundColor: "#FAB706" }}
                      src="SubPlans/tick.svg"
                      alt="Icon"
                    />
                    <span>Professional Services</span>
                  </div>
                </div>
                <Link
                  to="/payment"
                  style={{ backgroundColor: "#FAB706" }}
                  className={styles.block_button}
                >
                  Buy Now
                </Link>
                <div className={styles.reminder}>
                  *Check Terms and Conditions Apply
                </div>
              </div>
            </div>
            <div
              style={{
                padding: "39px 5px 5px 5px",
                borderRadius: "36px",
                backgroundColor: "#7095F1",
              }}
              className={styles.block_popular}
            >
              <span className={styles.popular}>Popular</span>
              <div
                style={{
                  border: "1px solid #7095F1",
                  backgroundColor: "#fff",
                }}
                className={styles.block}
              >
                <div className={styles.block_img}>
                  <img src="SubPlans/icon5.svg" alt="Icon" />
                </div>
                <h2 className={styles.block_title}>All Services Package</h2>
                <p className={styles.block_text}>
                  In this Package you can Rent your products, Sell your
                  Professional Services &Sell your Products to your Clients
                </p>
                <span className={styles.block_price}>250$/Month</span>
                <span className={styles.block_price_desc}>
                  Per User Monthly
                </span>
                <div className={styles.block_advantages}>
                  <div className={styles.block_advantage}>
                    <img
                      style={{ backgroundColor: "#7095F1" }}
                      src="SubPlans/tick.svg"
                      alt="Icon"
                    />
                    <span>Renting Services</span>
                  </div>
                  <div className={styles.block_advantage}>
                    <img
                      style={{ backgroundColor: "#7095F1" }}
                      src="SubPlans/tick.svg"
                      alt="Icon"
                    />
                    <span>Professional Services</span>
                  </div>
                  <div className={styles.block_advantage}>
                    <img
                      style={{ backgroundColor: "#7095F1" }}
                      src="SubPlans/tick.svg"
                      alt="Icon"
                    />
                    <span>Products</span>
                  </div>
                </div>
                <Link
                  to="/payment"
                  style={{ backgroundColor: "#7095F1" }}
                  className={styles.block_button}
                >
                  Buy Now
                </Link>
                <div className={styles.reminder}>
                  *Check Terms and Conditions Apply
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SubPlansPage;
