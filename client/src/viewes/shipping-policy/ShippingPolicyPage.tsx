import React from 'react';
import Footer from "../../components/Footer/Footer.tsx";
import styles from "./ShippingPolicyPage.module.scss";
import { FC } from "react";
import useDefaultScrollPosition from "../../hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

const ShippingPolicyPage: FC = () => {
  useDefaultScrollPosition();

  return (
    <React.Fragment>
      <div className="__container">
        <div className={styles.body}>
          <h1 className={styles.title}>Shipping Policy</h1>
          <span className={styles.desc}>
            Thank you for shopping at GLDCART! This Shipping Policy outlines
            important information regarding the shipping of products purchased
            on our website (the "Website"). By placing an order, you agree to
            the terms and conditions set forth in this policy.
          </span>
          <div className={styles.text}>
            <div className={styles.text_container}>
              <p className={styles.list_item}>1. Order Processing Time:</p>
              <ul className={styles.unordered_list}>
                <li>
                  Orders are typically processed within [insert number of
                  business days] business days after payment is confirmed.
                </li>
                <li>
                  Please note that order processing time may be longer during
                  peak seasons or promotional periods.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                2. Shipping Methods and Delivery:
              </p>
              <ul className={styles.unordered_list}>
                <li>
                  We offer various shipping methods, including standard
                  shipping, expedited shipping, and express shipping. The
                  available options will be presented during the checkout
                  process.
                </li>
                <li>
                  Delivery times and shipping costs depend on the selected
                  shipping method and the destination address.
                </li>
                <li>
                  Once your order has been shipped, you will receive a shipping
                  confirmation email with tracking information.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>3. Shipping Restrictions:</p>
              <ul className={styles.unordered_list}>
                <li>
                  We currently ship to addresses within [insert countries or
                  regions where shipping is available]. If your shipping address
                  is outside of this area, we apologize for any inconvenience
                  caused.
                </li>
                <li>
                  Some products may have specific shipping restrictions due to
                  legal or logistical reasons. These restrictions will be
                  communicated on the product page if applicable.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>4. Customs and Duties:</p>
              <ul className={styles.unordered_list}>
                <li>
                  International orders may be subject to customs duties, taxes,
                  or import fees imposed by the destination country. These
                  charges are the responsibility of the recipient and are not
                  included in the product price or shipping cost.
                </li>
                <li>
                  GLDCART is not responsible for any delays, additional charges,
                  or issues arising from customs clearance processes.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>5. Shipping Errors and Issues:</p>
              <ul className={styles.unordered_list}>
                <li>
                  If you receive an incorrect or damaged product, please contact
                  our customer support team within [insert number of days] days
                  of receiving the order.
                </li>
                <li>
                  We will work to resolve the issue promptly by arranging a
                  replacement or refund, depending on the circumstances.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>6. Address Accuracy:</p>
              <ul className={styles.unordered_list}>
                <li>
                  It is your responsibility to provide an accurate and complete
                  shipping address. GLDCART will not be held liable for delays
                  or delivery issues caused by incorrect or incomplete address
                  information provided by the customer.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>7. Shipment Tracking:</p>
              <ul className={styles.unordered_list}>
                <li>
                  Tracking information will be provided for most orders to allow
                  you to monitor the status of your shipment.
                </li>
                <li>
                  Please note that tracking information may take some time to
                  update after the package is shipped.
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>8. Shipping Fees:</p>
              <ul className={styles.unordered_list}>
                <li>
                  Shipping fees are calculated based on the selected shipping
                  method, the destination address, and the total weight and
                  dimensions of the package. The applicable shipping fee will be
                  displayed during the checkout process
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>
                9. Changes to the Shipping Policy:
              </p>
              <ul className={styles.unordered_list}>
                <li>
                  We reserve the right to update or modify this Shipping Policy
                  at any time. The revised policy will be posted on the Website
                  with the updated effective date
                </li>
              </ul>
            </div>
            <div className={styles.text_container}>
              <p className={styles.list_item}>10. Contact Us:</p>
              <ul className={styles.unordered_list}>
                <li>
                  If you have any questions or concerns regarding our Shipping
                  Policy, please contact our customer support team using the
                  provided contact information
                </li>
              </ul>
            </div>
            <span className={styles.desc}>
              By placing an order on our Website, you acknowledge and agree to
              comply with the terms and conditions outlined in this Shipping
              Policy
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ShippingPolicyPage;
