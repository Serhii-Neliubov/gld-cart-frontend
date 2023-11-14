import React, { FC } from "react";
import styles from "./BasicInformationPhoto.module.scss";
import { Link } from "react-router-dom";

const BasicInformationPhoto: FC = () => {
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
          <div style={{ backgroundColor: "#02A0A0" }} className={styles.number}>
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
      <h1 className={styles.title}>Vehicles Renting Form </h1>
      <div className={styles.content}>
        <h2 className={styles.content_title}>Photo And Video</h2>
        <div className={styles.content_input}>
          <span style={{ textTransform: "uppercase" }}>
            Upload up 06 photos
          </span>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                padding: "45px",
                border: "2px solid gray",
                width: "140px",
                height: "140px",
              }}
            >
              <img
                src="/PhotoVideoDownload/photo-download-icon.svg"
                alt="Image"
              />
            </div>
            <div
              style={{
                padding: "45px",
                border: "2px solid gray",
                width: "140px",
                height: "140px",
              }}
            >
              <img
                src="/PhotoVideoDownload/photo-download-icon.svg"
                alt="Image"
              />
            </div>
            <div
              style={{
                padding: "45px",
                border: "2px solid gray",
                width: "140px",
                height: "140px",
              }}
            >
              <img
                src="/PhotoVideoDownload/photo-download-icon.svg"
                alt="Image"
              />
            </div>
            <div
              style={{
                padding: "45px",
                border: "2px solid gray",
                width: "140px",
                height: "140px",
              }}
            >
              <img
                src="/PhotoVideoDownload/photo-download-icon.svg"
                alt="Image"
              />
            </div>
            <div
              style={{
                padding: "45px",
                border: "2px solid gray",
                width: "140px",
                height: "140px",
              }}
            >
              <img
                src="/PhotoVideoDownload/photo-download-icon.svg"
                alt="Image"
              />
            </div>
            <div
              style={{
                padding: "45px",
                border: "2px solid gray",
                width: "140px",
                height: "140px",
              }}
            >
              <img
                src="/PhotoVideoDownload/photo-download-icon.svg"
                alt="Image"
              />
            </div>
          </div>
        </div>
        <div className={styles.content_input}>
          <span style={{ textTransform: "uppercase" }}>Promo video</span>

          <input type="text" placeholder="Youtube link here" />
        </div>
      </div>
      <div className={styles.actions}>
        <button
          style={{
            border: "1px solid gray",
            color: "gray",
            padding: "20px 50px",
          }}
        >
          Cancel
        </button>
        <Link to="/renting-category-page/vehicles/photo-and-video/specifications">
          <button
            style={{
              border: "1px solid blue",
              backgroundColor: "blue",
              color: "white",
              padding: "20px 50px",
            }}
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BasicInformationPhoto;
