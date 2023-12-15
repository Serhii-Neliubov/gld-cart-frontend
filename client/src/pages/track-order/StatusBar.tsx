import React from "react";
import styles from "./TrackOrder.module.scss";

export type StatusProps = {
  img: string;
  status: string;
  text: string;
};

type StatusBarProps = {
  status: StatusProps;
};

export default function StatusBar({ status }: StatusBarProps) {
  return (
    <div className={styles.order_status_bar}>
      <div>
        <img src={status.img} alt="tick" />
        <span>Status : {status.status}</span>
      </div>
      <p>{status.text}</p>
    </div>
  );
}
