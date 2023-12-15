import React from "react";
import styles from "./TrackOrder.module.scss";
import { StatusProps } from "./StatusBar";

type StatusNumberProps = {
  status: StatusProps;
  index: number;
  orderStatus: string;
};

export default function StatusNumber({
  status,
  index,
  orderStatus,
}: StatusNumberProps) {
  return (
    <div className={styles.status}>
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
}
