import React, { FC } from "react";
import styles from "./HouseRentingSpecifications.module.scss";
import { Link } from "react-router-dom";

const HouseRentingSpecifications: FC = () => {
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
      <h1 className={styles.title}>House Renting Form </h1>
      <div className={styles.content}>
        <h2 className={styles.content_title}>House Specification</h2>
        <div className={styles.content_inputs}>
          <div className={styles.content_input}>
            <div>
              <span>Bedrooms</span>
              <input type="text" placeholder="write number of bedrooms" />
            </div>
          </div>
          <div className={styles.content_input}>
            <div>
              <span>Washrooms</span>
              <input type="text" placeholder="write number of washrooms" />
            </div>
          </div>
        </div>
        <div>
          <span className={styles.content_driver}>House Condition</span>
          <div
            style={{ display: "flex", gap: "20px", margin: "10px 0px 50px 0" }}
          >
            <div style={{ display: "flex", gap: "5px" }}>
              <input style={{ width: "20px" }} type="radio" />
              <p>Brand New</p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <input style={{ width: "20px" }} type="radio" />
              <p>Old House</p>
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <span style={{ fontWeight: 600 }}>No of storeys</span>
          <div style={{ display: "flex", gap: "15px" }}>
            <div
              style={{
                marginTop: "10px",
                width: "80px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              1
            </div>
            <div
              style={{
                marginTop: "10px",
                width: "80px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              2
            </div>
            <div
              style={{
                marginTop: "10px",
                width: "80px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              3
            </div>
            <div
              style={{
                marginTop: "10px",
                width: "80px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              4+
            </div>
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <span style={{ fontWeight: 600 }}>Area unit</span>
          <div style={{ display: "flex", gap: "15px" }}>
            <div
              style={{
                marginTop: "10px",
                width: "80px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              Kanal
            </div>
            <div
              style={{
                marginTop: "10px",
                width: "80px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              Maria
            </div>
            <div
              style={{
                marginTop: "10px",
                width: "120px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              Square Feet
            </div>
            <div
              style={{
                marginTop: "10px",
                width: "120px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              Square Meter
            </div>
            <div
              style={{
                marginTop: "10px",
                width: "120px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              Square Yards
            </div>
          </div>
        </div>

        <div className={styles.content_input}>
          <span>Area</span>
          <textarea
            style={{
              height: "60px",
              border: "1px solid gray",
              outline: "none",
              padding: "5px",
              resize: "none",
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <span style={{ fontWeight: 600 }}>Features</span>
          <div style={{ display: "flex", gap: "15px" }}>
            <div
              style={{
                marginTop: "10px",
                width: "140px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              Servant Quarters
            </div>
            <div
              style={{
                marginTop: "10px",
                width: "120px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              Drawing Room
            </div>
            <div
              style={{
                marginTop: "10px",
                width: "120px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              Dining Room
            </div>
            <div
              style={{
                marginTop: "10px",
                width: "120px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              Kitchen
            </div>
            <div
              style={{
                marginTop: "10px",
                width: "120px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              Study Room
            </div>
            <div
              style={{
                marginTop: "10px",
                width: "120px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              Prayer Room
            </div>
            <div
              style={{
                marginTop: "10px",
                width: "120px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              Powder Room
            </div>
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
        <Link to="/renting-category-page/houses/photo-and-video/specifications/publishing">
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

export default HouseRentingSpecifications;
