import Footer from "../../components/UI/Footer";
import styles from "./TermsConditionsPage.module.scss";
import { useEffect } from "react";

const TermsConditionsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="__container">
        <div className={styles.body}>
          <h1 className={styles.title}>Terms and Conditions</h1>
          <span className={styles.desc}>
            By using Gldcart.com , you agree to the terms and conditions,
            privacy policy, and returns/refund policy of the Site. Please read
            the Terms and Conditions carefully before using Gldcart.com.
          </span>
          <div className={styles.text}>
            <div className={styles.text_container}>
              <p className={styles.list_item}>1. Account Registration:</p>
              <ul className={styles.unordered_list}>
                <li>
                  Users must be at least 18 years old or the age of majority in
                  their jurisdiction to create an account.
                </li>
                <li>
                  Users are responsible for maintaining the confidentiality of
                  their account login information.
                </li>
                <li>
                  Users agree to provide accurate and complete information
                  during registration.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>2. User Conduct:</p>
              <ul className={styles.unordered_list}>
                <li>
                  Users must comply with all applicable laws and regulations.
                </li>
                <li>
                  Prohibited activities include impersonation, disruption of the
                  Website's functioning, collecting personal information, and
                  engaging in fraudulent or deceptive behavior.
                </li>
                <li>
                  GLDCART reserves the right to suspend or terminate accounts
                  for violation of these Terms.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                3. Intellectual Property Rights:
              </p>
              <ul className={styles.unordered_list}>
                <li>
                  The Website and its content are owned by GLDCART or its
                  licensors and are protected by intellectual property laws.
                </li>
                <li>
                  Users may not reproduce, distribute, modify, or publicly
                  display the Website's material without permission.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                4. Product Listings and Orders:
              </p>
              <ul className={styles.unordered_list}>
                <li>
                  GLDCART strives to provide accurate product information but
                  does not guarantee its accuracy.
                </li>
                <li>
                  Users represent that their order information is accurate and
                  complete.
                </li>
                <li>
                  GLDCART reserves the right to refuse or cancel orders for
                  various reasons.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>5. Limitation of Liability:</p>
              <ul className={styles.unordered_list}>
                <li>
                  GLDCART is not liable for any direct or indirect damages
                  arising from the use of the Website.
                </li>
                <li>Users use the Website at their own risk.</li>
              </ul>
            </div>
          </div>
          <span className={styles.desc}>
            These Terms and Conditions outline the rules and guidelines for
            using the GLDCART Ecommerce Website. By accessing and using the
            Website, users agree to comply with these terms.
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditionsPage;
