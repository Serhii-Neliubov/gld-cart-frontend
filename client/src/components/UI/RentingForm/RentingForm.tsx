import React from "react";
import styles from "./RentingForm.module.scss";
import RentingStage from "../RentingStage/RentingStage";

type RentingFormProps = {
  children: React.ReactNode;
  title: string;
  coloredStage: number;
};

export default function RentingForm({
  children,
  title,
  coloredStage,
  return (
    <div style={{ paddingBottom: "50px" }} className="__container">
      <RentingStage coloredStage={coloredStage} />
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.content}>
        <h2 className={styles.content_title}>Basic Information</h2>
        {children}
      </div>
    </div>
  );
}
