import React, { FC } from "react";
import styles from "./ElectronicsRentingSpecifications.module.scss";
import { Link } from "react-router-dom";

const ElectronicsRentingSpecifications: FC = () => {
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
      <h1 className={styles.title}>Electronics Renting Form </h1>
      <div className={styles.content}>
        <h2 className={styles.content_title}>House Specification</h2>
        <div className={styles.content_inputs}>
          <div className={styles.content_input}>
            <div>
              <span>Model</span>
              <input type="text" placeholder="Item model" />
            </div>
          </div>
          <div className={styles.content_input}>
            <div>
              <span>Color</span>
              <input type="text" placeholder="Item color" />
            </div>
          </div>
        </div>
        <div>
          <span className={styles.content_driver}>Item Condition</span>
          <div
            style={{ display: "flex", gap: "20px", margin: "10px 0px 50px 0" }}
          >
            <div style={{ display: "flex", gap: "5px" }}>
              <input style={{ width: "20px" }} type="radio" />
              <p>Brand New</p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <input style={{ width: "20px" }} type="radio" />
              <p>Used</p>
            </div>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <div className={styles.content_input}>
            <div>
              <span>Size</span>
              <input
                type="text"
                placeholder="Provide measurements if applicable"
              />
            </div>
          </div>
        </div>
        <h2 style={{ marginBottom: "20px", fontWeight: 700, fontSize: "20px" }}>
          Fill this for Smartphones, Laptops and Tabletss
        </h2>
        <div className={styles.content_inputs}>
          <div className={styles.content_input}>
            <div>
              <span>Operating System</span>
              <input type="text" placeholder="Specify the operating system" />
            </div>
          </div>
          <div className={styles.content_input}>
            <div>
              <span>Processor</span>
              <input
                type="text"
                placeholder="Provide details about the processor e.g."
              />
            </div>
          </div>
        </div>
        <div className={styles.content_inputs}>
          <div className={styles.content_input}>
            <div>
              <span>Memory (RAM)</span>
              <input type="text" placeholder="Specify the RAM capacity" />
            </div>
          </div>
        </div>
        <div className={styles.content_inputs}>
          <div className={styles.content_input}>
            <div>
              <span>Storage</span>
              <input
                type="text"
                placeholder="Indicate the storage capacity, e.g."
              />
            </div>
          </div>
          <div className={styles.content_input}>
            <div>
              <span>Screen/Display</span>
              <input
                type="text"
                placeholder="Provide information about the screen size, resolution"
              />
            </div>
          </div>
        </div>
        <div className={styles.content_inputs}>
          <div className={styles.content_input}>
            <div>
              <span>Camera</span>
              <input
                type="text"
                placeholder="Specify camera features, including megapixels"
              />
            </div>
          </div>
          <div className={styles.content_input}>
            <div>
              <span>Battery Life</span>
              <input type="text" placeholder="Estimate battery life in hours" />
            </div>
          </div>
        </div>
        <div className={styles.content_inputs}>
          <div className={styles.content_input}>
            <div>
              <span>Connectivity</span>
              <input
                type="text"
                placeholder="connectivity options such as Wi-Fi, Bluetooth, USB ports, etc."
              />
            </div>
          </div>
        </div>
        <div className={styles.content_inputs}>
          <div className={styles.content_input}>
            <div>
              <span>Additional Features</span>
              <input
                type="text"
                placeholder="Mention any unique features or functionalities"
              />
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
        <Link to="/renting-category-page/electronics/photo-and-video/specifications/publishing">
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

export default ElectronicsRentingSpecifications;
