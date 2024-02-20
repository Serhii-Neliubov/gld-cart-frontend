import React, { FC } from "react";
import styles from "./SnowRemovalServiceSpecifications.module.scss";
import { Link } from "react-router-dom";

const SnowRemovalServiceSpecifications: FC = () => {
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
          <div style={{ backgroundColor: "#02A0A0" }} className={styles.number}>
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
      <h1 className={styles.title}>Snow Removal SERVICES Form </h1>
      <div className={styles.content}>
        <h2 className={styles.content_title}>Snow Removal Specification</h2>

        <div>
          <span className={styles.content_driver}>
            Need Instrument for Snow Removal Service
          </span>
          <div
            style={{ display: "flex", gap: "20px", margin: "10px 0px 50px 0" }}
          >
            <div style={{ display: "flex", gap: "5px" }}>
              <input style={{ width: "20px" }} type="radio" />
              <p>Yes</p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <input style={{ width: "20px" }} type="radio" />
              <p>No</p>
            </div>
          </div>
        </div>
        <div>
          <span className={styles.content_driver}>
            You have all the safety Instrument for Snow Removal Service
          </span>
          <div
            style={{ display: "flex", gap: "20px", margin: "10px 0px 50px 0" }}
          >
            <div style={{ display: "flex", gap: "5px" }}>
              <input style={{ width: "20px" }} type="radio" />
              <p>Yes</p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <input style={{ width: "20px" }} type="radio" />
              <p>No</p>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <span style={{ fontWeight: 600 }}>Select Type of Service</span>
          <div style={{ display: "flex", gap: "10px" }}>
            <input style={{ height: "15px", width: "15px" }} type="checkbox" />
            <label style={{ fontWeight: 600 }} htmlFor="input">
              Driveway snow removal
            </label>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <input style={{ height: "15px", width: "15px" }} type="checkbox" />
            <label style={{ fontWeight: 600 }} htmlFor="input">
              Walkway snow clearing
            </label>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <input style={{ height: "15px", width: "15px" }} type="checkbox" />
            <label style={{ fontWeight: 600 }} htmlFor="input">
              Roof snow removal
            </label>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <span style={{ fontWeight: 600 }}>Select Type of Property</span>
          <div style={{ display: "flex", gap: "10px" }}>
            <input style={{ height: "15px", width: "15px" }} type="checkbox" />
            <label style={{ fontWeight: 600 }} htmlFor="input">
              Residential
            </label>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <input style={{ height: "15px", width: "15px" }} type="checkbox" />
            <label style={{ fontWeight: 600 }} htmlFor="input">
              Commercial
            </label>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <input style={{ height: "15px", width: "15px" }} type="checkbox" />
            <label style={{ fontWeight: 600 }} htmlFor="input">
              Industrial
            </label>
          </div>
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
        <Link to="/renting-category-page/snow-removal/photo-and-video/specifications/publishing">
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

export default SnowRemovalServiceSpecifications;
