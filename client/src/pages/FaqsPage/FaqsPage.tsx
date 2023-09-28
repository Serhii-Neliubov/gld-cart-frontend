import Footer from "../../components/UI/Footer";
import styles from "./FaqsPage.module.scss";
import { useEffect } from "react";

const FaqsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="__container">
        <div className={styles.body}>
          <h1 className={styles.title}>FAQs</h1>
          <div className={styles.text}>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                1. How long does it take to process an order?
              </p>
              <ul className={styles.unordered_list}>
                <li>
                  Orders are typically processed within [insert number of
                  business days] after payment confirmation.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                2. What are the available shipping options?
              </p>
              <ul className={styles.unordered_list}>
                <li>
                  We offer various shipping options, including standard,
                  expedited, and express shipping. The available options will be
                  presented during the checkout process.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                3. How long does shipping take?
              </p>
              <ul className={styles.unordered_list}>
                <li>
                  Delivery times depend on the selected shipping method and the
                  destination address. Please refer to the estimated delivery
                  time provided during the checkout process.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                4. Do you ship internationally?
              </p>
              <ul className={styles.unordered_list}>
                <li>
                  We currently ship to addresses within [insert countries or
                  regions where shipping is available]. If your shipping address
                  is outside of this area, we apologize for any inconvenience
                  caused.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                5. Are there any additional customs fees or taxes for
                international orders?
              </p>
              <ul className={styles.unordered_list}>
                <li>
                  International orders may be subject to customs duties, taxes,
                  or import fees imposed by the destination country. These
                  charges are the responsibility of the recipient and are not
                  included in the product price or shipping cost.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                6. What should I do if I receive an incorrect or damaged
                product?
              </p>
              <ul className={styles.unordered_list}>
                <li>
                  If you receive an incorrect or damaged product, please contact
                  our customer support team within [insert number of days] days
                  of receiving the order. We will work to resolve the issue
                  promptly.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>7. Can I track my order?</p>
              <ul className={styles.unordered_list}>
                <li>
                  Yes, most orders come with tracking information. You will
                  receive a shipping confirmation email with tracking details
                  once your order is shipped.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                8. How do I update my shipping address?
              </p>
              <ul className={styles.unordered_list}>
                <li>
                  Please ensure to provide an accurate and complete shipping
                  address during the checkout process. If you need to update
                  your shipping address after placing an order, please contact
                  our customer support as soon as possible.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                9. What are the accepted payment methods?
              </p>
              <ul className={styles.unordered_list}>
                <li>
                  We accept various payment methods, including credit cards,
                  debit cards, and online payment platforms. The available
                  options will be displayed during the checkout process.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                10. How can I contact customer support?
              </p>
              <ul className={styles.unordered_list}>
                <li>
                  For any questions or concerns, please contact our customer
                  support team using the provided contact information on our
                  website. We are here to assist you
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FaqsPage;
