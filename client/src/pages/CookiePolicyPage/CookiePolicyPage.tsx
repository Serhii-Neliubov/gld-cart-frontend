import Footer from "../../components/UI/Footer";
import styles from "./CookiePolicyPage.module.scss";
import { useEffect } from "react";

const CookiePolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="__container">
        <div className={styles.body}>
          <h1 className={styles.title}>Cookie Policy</h1>
          <span className={styles.desc}>
            We use cookies to enhance your browsing experience on our website.
            By continuing to use our website, you consent to the use of cookies.
            This policy explains how we use cookies and how you can manage them.
          </span>
          <div className={styles.text}>
            <div className={styles.text_container}>
              <p className={styles.list_item}>1. What are Cookies?</p>
              <ul className={styles.unordered_list}>
                <li>
                  Cookies are small text files stored on your device when you
                  visit our website. They help us improve website functionality
                  and provide a personalized experience.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>2. How We Use Cookies:</p>
              <ul className={styles.unordered_list}>
                <li>
                  Essential Cookies: Necessary for website operation and
                  functionality.
                </li>
                <li>
                  Analytics Cookies: Collect anonymous data to analyze website
                  usage.
                </li>
                <li>
                  Advertising and Marketing Cookies: Deliver personalized ads
                  based on your interests.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>3. Third-Party Cookies:</p>
              <ul className={styles.unordered_list}>
                <li>
                  We may allow third-party service providers to place cookies on
                  your device for analytics or advertising purposes.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>4. Cookie Management:</p>
              <ul className={styles.unordered_list}>
                <li>
                  You can modify your browser settings to control or delete
                  cookies. However, disabling cookies may limit website
                  functionality.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>5. Updates to this Policy:</p>
              <ul className={styles.unordered_list}>
                <li>
                  We may update this Cookie Policy as needed. Please check for
                  the latest version on our website.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>6. Contact Us:</p>
              <ul className={styles.unordered_list}>
                <li>
                  If you have any questions or concerns about our use of
                  cookies, please contact us using the provided contact
                  information.
                </li>
              </ul>
            </div>
          </div>
          <span className={styles.desc}>
            By using our website, you agree to our use of cookies as explained
            in this policy.
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicyPage;
