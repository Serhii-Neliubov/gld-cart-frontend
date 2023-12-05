import React from "react";
import styles from "./RentingForm.module.scss";

type RentingFormProps = {
  children: React.ReactNode;
  title: string;
};

export default function RentingForm({ children, title }: RentingFormProps) {
  return (
    <div style={{ paddingBottom: "50px" }} className="__container">
      <div className={styles.routings}>
        <div className={styles.routing}>
          <div style={{ backgroundColor: "#02A0A0" }} className={styles.number}>
            1
          </div>
          <span>Category</span>
        </div>
        <div className={styles.routing}>
          <div style={{ backgroundColor: "#02A0A0" }} className={styles.number}>
            2
          </div>
          <span>Sub Category</span>
        </div>
        <div className={styles.routing}>
          <div style={{ backgroundColor: "#D9D9D9" }} className={styles.number}>
            3
          </div>
          <span>Information</span>
        </div>
        <div className={styles.routing}>
          <div style={{ backgroundColor: "#D9D9D9" }} className={styles.number}>
            4
          </div>
          <span>Photo & Video</span>
        </div>
        <div className={styles.routing}>
          <div style={{ backgroundColor: "#D9D9D9" }} className={styles.number}>
            5
          </div>
          <span>Specifications</span>
        </div>
        <div className={styles.routing}>
          <div style={{ backgroundColor: "#D9D9D9" }} className={styles.number}>
            6
          </div>
          <span>Publish</span>
        </div>
      </div>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.content}>
        <h2 className={styles.content_title}>Basic Information</h2>
        {children}
      </div>
    </div>
  );
}
