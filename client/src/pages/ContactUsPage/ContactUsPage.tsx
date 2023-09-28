import { FC, useEffect } from "react";
import styles from "./ContactUsPage.module.scss";
import { Link } from "react-router-dom";
import Footer from "../../components/UI/Footer";

const ContactUsPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={styles.body}>
        <div className="__container">
          <h1 className={styles.title}>Keep In Touch with Us</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Contact</span>
          </div>
          <div className={styles.content}>
            <div className={styles.form}>
              <h2 className={styles.content_title}>Sent A Message</h2>
              <div className={styles.inputs}>
                <div className={styles.input}>
                  <span>Your Name</span>
                  <input type="text" placeholder="Cameron Williamson" />
                </div>
                <div className={styles.input}>
                  <span>Your Email</span>
                  <input type="text" placeholder="Gldcart@mail.com" />
                </div>
                <div className={styles.input}>
                  <span>Subject</span>
                  <input type="text" placeholder="Write your subject" />
                </div>
                <div className={styles.input}>
                  <span>Your Message</span>
                  <textarea />
                </div>
              </div>
              <div className={styles.checkbox}>
                <input type="checkbox" />
                <span>
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </span>
              </div>
              <Link className={styles.button} to="/send-message">
                Send Message
              </Link>
            </div>
            <div className={styles.contacts}>
              <div className={styles.contacts_item}>
                <img src="contact-us/icon1.svg" alt="Icon" />
                <p>contact@Gldcard.com</p>
                <span>(406) 555-0120</span>
              </div>
              <div className={styles.contacts_item}>
                <img src="contact-us/icon2.svg" alt="Icon" />
                <span>6391 Elgin St. Celina, Delaware 10299</span>
              </div>
              <div className={styles.contacts_item}>
                <img src="contact-us/icon3.svg" alt="Icon" />
                <span style={{ margin: "12px 0" }}>Find on social media</span>
                <div className={styles.socials}>
                  <a href="#" className={styles.social}>
                    <img src="contact-us/social1.png" />
                  </a>
                  <a href="#" className={styles.social}>
                    <img src="contact-us/social2.png" />
                  </a>
                  <a href="#" className={styles.social}>
                    <img src="contact-us/social3.png" />
                  </a>
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

export default ContactUsPage;
