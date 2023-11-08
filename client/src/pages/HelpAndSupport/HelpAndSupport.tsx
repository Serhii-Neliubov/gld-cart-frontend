import React, { FC } from "react";
import Footer from "../../components/UI/Footer";
import styles from "./HelpAndSupport.module.scss";

const HelpAndSupport: FC = () => {
  return (
    <>
      <div className="__container">
        <h1 className={styles.title}>Hi, how can we help you?</h1>
        <div className={styles.blocks}>
          <div className={styles.block}>
            <div className={styles.block_text}>
              <img src="" alt="Image" />
              <span>I Want To Know Where My Order Is</span>
            </div>
            <p className={styles.text}>
              Get stsatus updates about your order with our Tricking Tool
            </p>
          </div>
          <div className={styles.block}>
            <div className={styles.block_text}>
              <img src="" alt="Image" />
              <span>I Want To Know Where My Order Is</span>
            </div>
            <p className={styles.text}>
              Get stsatus updates about your order with our Tricking Tool
            </p>
          </div>
          <div className={styles.block}>
            <div className={styles.block_text}>
              <img src="" alt="Image" />
              <span>I Want To Know Where My Order Is</span>
            </div>
            <p className={styles.text}>
              Get stsatus updates about your order with our Tricking Tool
            </p>
          </div>
        </div>
        <h2 className={styles.title}>I have another Question</h2>
        <div className={styles.question_links}>
          <a href="#" className={styles.question_link}>
            Search
          </a>
          <a href="#" className={styles.question_link}>
            Browse Help Center
          </a>
        </div>
        <div className={styles.contact_us}>
          <h3 className={styles.title}>Contact us</h3>
          <div className={styles.contact_content}>
            <img className={styles.logo} src="" alt="Image" />
            <p className={styles.contact_text}>
              For order status inquiry, please click here <br></br>
              To cancel and return ordered items, please log-in with your
              account here <br></br> For other concerns, feel free to visit our
              Help Center Page here <br></br> Can't find the answer you are
              looking for? Chat with us or you can also <br></br> call us at
              021-111-132729 | Mon - Sat (09:00 am till 09:00 pm).
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpAndSupport;
