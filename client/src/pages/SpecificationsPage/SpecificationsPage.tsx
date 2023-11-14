import React, { FC } from "react";
import styles from "./SpecificationsPage.module.scss";
import { Link } from "react-router-dom";

const SpecificationsPage: FC = () => {
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
      </div>
      <h1 className={styles.title}>Vehicles Renting Form </h1>
      <div className={styles.content}>
        <h2 className={styles.content_title}>Vehicle Specification</h2>
        <div style={{ display: "flex", gap: "20px", width: "100%" }}>
          <div className={styles.content_input}>
            <span>Year of Manufacture</span>
            <input type="text" placeholder="Car Manufacture year" />
          </div>
          <div className={styles.content_input}>
            <span>Vehicle Plate Number</span>
            <input type="text" placeholder="AAA-123" />
          </div>
        </div>
        <div>
          <span className={styles.content_driver}>Vehicle Condition</span>
          <div
            style={{ display: "flex", gap: "20px", margin: "10px 0px 50px 0" }}
          >
            <div style={{ display: "flex", gap: "5px" }}>
              <input style={{ width: "20px" }} type="radio" />
              <p>New Vehicle</p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <input style={{ width: "20px" }} type="radio" />
              <p>Used Vehicle</p>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", gap: "20px", width: "100%" }}>
            <div className={styles.content_input}>
              <span>Custom specification*</span>
              <input
                style={{ padding: "10px" }}
                type="text"
                placeholder="Transmission"
              />
            </div>
            <div className={styles.content_input}>
              <span>Specification details*</span>
              <input
                style={{ padding: "10px" }}
                type="text"
                placeholder="Automatic"
              />
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", gap: "20px", width: "100%" }}>
            <div className={styles.content_input}>
              <span>Fuel type*</span>
              <input
                style={{ padding: "10px" }}
                type="text"
                placeholder="Diesel"
              />
            </div>
            <div className={styles.content_input}>
              <span>Engine copacity*</span>
              <input
                style={{ padding: "10px" }}
                type="text"
                placeholder="1000 CC"
              />
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", gap: "20px", width: "100%" }}>
            <div className={styles.content_input}>
              <span>Seat capacity</span>
              <input style={{ padding: "10px" }} type="text" placeholder="04" />
            </div>
            <div className={styles.content_input}>
              <span>Storage Bag copacity</span>
              <input
                style={{ padding: "10px" }}
                type="text"
                placeholder="1 big bag and one small bag"
              />
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", gap: "20px", width: "49%" }}>
            <div className={styles.content_input}>
              <span>Air bags</span>
              <input style={{ padding: "10px" }} type="text" placeholder="02" />
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
        <Link to="/renting-category-page/vehicles/photo-and-video/published-successfully">
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

export default SpecificationsPage;
