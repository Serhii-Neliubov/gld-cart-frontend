import React, { FC } from "react";
import styles from "./CleaningServicePublishing.module.scss";
import { Link } from "react-router-dom";

const CleaningServicePublishing: FC = () => {
  return (
    <div
      style={{
        paddingBottom: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
          <div style={{ backgroundColor: "#D9D9D9" }} className={styles.number}>
            6
          </div>
          <span>Publish</span>
        </div>
      </div>
      <div className={styles.content}>
        <Link className={styles.close_button} to="/">
          <img src="/ItemPublishPage/close-button.svg" alt="" />
        </Link>
        <h1 className={styles.title}>
          Your Electronics Renting Form has <br /> been Successfully Completed
        </h1>
        <div className={styles.actions}>
          <button
            style={{
              border: "1px solid gray",
              color: "gray",
              padding: "20px 50px",
            }}
          >
            Save as Draft
          </button>
          <Link to="/successfully-published">
            <button
              style={{
                border: "1px solid blue",
                backgroundColor: "blue",
                color: "white",
                padding: "20px 50px",
              }}
            >
              Publish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CleaningServicePublishing;
