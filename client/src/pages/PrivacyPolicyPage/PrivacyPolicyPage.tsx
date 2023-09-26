import styles from "./PrivacyPolicyPage.module.scss";
import { useEffect } from "react";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="__container">
        <div className={styles.body}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <span className={styles.desc}>
            Welcome to Gldcart, we prioritize your privacy. This Privacy Policy
            outlines how we collect, use, disclose, and protect your personal
            information when you use our Website. By using the Website, you
            consent to our practices as described in this Policy.
          </span>
          <div className={styles.text}>
            <div className={styles.text_container}>
              <p className={styles.list_item}>1. Information We Collect:</p>
              <ul className={styles.unordered_list}>
                <li>
                  Personal Information: We collect your name, email address,
                  shipping address, and payment details to process your orders
                  and provide support.
                </li>
                <li>
                  Non-Personal Information: We gather non-personal information
                  like IP addresses and browsing patterns for website analytics
                  and improvement.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>2. Use of Information:</p>
              <ul className={styles.unordered_list}>
                <li>
                  Personal Information: We use your information for order
                  processing, customer support, and optional promotional
                  communications.
                </li>
                <li>
                  Non-Personal Information: We utilize non-personal information
                  for website enhancement and marketing purposes.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>3. Disclosure of Information:</p>
              <ul className={styles.unordered_list}>
                <li>
                  Service Providers: We may share your information with trusted
                  third-party service providers to assist in operations and
                  product delivery.
                </li>
                <li>
                  Legal Compliance: We disclose information as required by law
                  or legal processes.
                </li>
                <li>
                  Business Transfers: In the event of a business sale or merger,
                  your information may be transferred to the acquiring entity.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>4. Data Security:</p>
              <ul className={styles.unordered_list}>
                <li>
                  We implement reasonable security measures to protect your
                  information but cannot guarantee absolute security.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>5. Third-Party Websites:</p>
              <ul className={styles.unordered_list}>
                <li>
                  Our Privacy Policy does not apply to third-party websites
                  linked on our Website. Please review their respective privacy
                  policies.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>6. Children's Privacy:</p>
              <ul className={styles.unordered_list}>
                <li>
                  Our Website is not intended for individuals under 18. We do
                  not knowingly collect personal information from children.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                7. Changes to the Privacy Policy:
              </p>
              <ul className={styles.unordered_list}>
                <li>
                  We may update our Privacy Policy periodically. Any changes
                  will be posted on our Website.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>8. Contact Us:</p>
              <ul className={styles.unordered_list}>
                <li>
                  If you have any questions or concerns regarding our Privacy
                  Policy or practices, please contact us using the provided
                  contact information.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                9. This Privacy Policy governs the collection, use, and
                protection of personal information on the GLDCART Ecommerce
                Website. Please review this Policy regularly for updates:
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
