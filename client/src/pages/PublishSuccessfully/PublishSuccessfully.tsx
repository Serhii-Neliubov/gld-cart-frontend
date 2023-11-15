import React, { FC } from "react";
import styles from "./PublishSuccessfully.module.scss";
import { Link } from "react-router-dom";

const PublishSuccessfully: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "180px",
      }}
      className="__container"
    >
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
          <div style={{ backgroundColor: "#02A0A0" }} className={styles.number}>
            3
          </div>
          <span>Information</span>
        </div>
        <div className={styles.routing}>
          <div style={{ backgroundColor: "#02A0A0" }} className={styles.number}>
            4
          </div>
          <span>Photo & Video</span>
        </div>
        <div className={styles.routing}>
          <div style={{ backgroundColor: "#02A0A0" }} className={styles.number}>
            5
          </div>
          <span>Specifications</span>
        </div>
        <div className={styles.routing}>
          <div style={{ backgroundColor: "#02A0A0" }} className={styles.number}>
            6
          </div>
          <span>Publish</span>
        </div>
      </div>
      <div className={styles.border}>
        <img src="/PublishedSuccessfully/tick.svg" alt="Image" />
        <h1>Your Product have Successfully Published </h1>
        <Link to="/">
          <button className={styles.button}>Go To Category Page</button>
        </Link>
      </div>
    </div>
  );
};

export default PublishSuccessfully;
