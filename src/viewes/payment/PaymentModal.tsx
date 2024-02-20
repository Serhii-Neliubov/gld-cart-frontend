import { FC } from "react";
import styles from "./PaymentModal.module.scss";

import imageQR from "@/assets/images/Payment/qr.png";

interface PaymentModalProps {
  title: string;
  secondInput?: string;
  secondInputTitle?: string;
}

const PaymentModal: FC<PaymentModalProps> = ({
  title,
  secondInput = "Enter your password",
  secondInputTitle = "Password",
}) => {
  const maxlength = 5;

  return (
    <div>
      <div className={styles.body}>
        <div className={styles.content}>
          <div className={styles.input}>
            <h2>
              <span>*</span> Enter Your {title}
            </h2>
            <input type="email" placeholder="Enter your email here " />
          </div>
          <div className={styles.input}>
            <h2>
              <span>*</span> {secondInputTitle}
            </h2>
            <input type={secondInput} placeholder={secondInput} />
          </div>
          <div className={styles.inputs}>
            <div className={styles.input}>
              <h2>Valid Thru</h2>
              <input type="date" placeholder="12/25" />
            </div>
            <div className={styles.input}>
              <h2>CVC</h2>
              <input type="number" maxLength={maxlength} placeholder="12345" />
            </div>
          </div>

          <a href="#">Pay Now</a>
        </div>
        <img src={imageQR} alt="Image" />
      </div>
    </div>
  );
};

export default PaymentModal;
