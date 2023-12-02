import React, { FC } from "react";
import styles from "./GardeningServiceForm.module.scss";
import { Link } from "react-router-dom";

const GardeningServiceForm: FC = () => {
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
          <span>Basic Information</span>
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
      <h1 className={styles.title}>Gardening SERVICES Form </h1>
      <div className={styles.content}>
        <h2 className={styles.content_title}>Basic Information</h2>
        <div className={styles.content_input}>
          <span>Service Title</span>
          <input type="text" placeholder="70 words max" />
        </div>

        <div className={styles.content_input}>
          <span>Service Description</span>
          <textarea
            style={{
              height: "107px",
              border: "1px solid gray",
              outline: "none",
              padding: "5px",
              resize: "none",
            }}
            placeholder="Minimum 160 and maximum 9000 characters"
          />
        </div>
        <div className={styles.content_input_radio}>
          <span style={{ fontWeight: 600 }}>
            You want to give your Gardening service Per
          </span>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <input style={{ width: "20px", height: "20px" }} type="radio" />
            <label htmlFor="input">Hour</label>
            <input style={{ width: "20px", height: "20px" }} type="radio" />
            <label htmlFor="input">Day</label>
          </div>
        </div>
        <div>
          <span style={{ fontWeight: "600", fontSize: "20px" }}>
            Packages Details
          </span>
          <div style={{ marginTop: "35px" }}>
            <div style={{ display: "flex", gap: "100px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <input style={{ width: "20px" }} type="checkbox" />
                <span style={{ fontWeight: "600" }}>
                  Gardening Packages For Hour
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <input style={{ width: "20px" }} type="checkbox" />
                <span style={{ fontWeight: "600" }}>
                  Gardening Packages For Day
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <input style={{ width: "20px" }} type="checkbox" />
                <span style={{ fontWeight: "600" }}>
                  Gardening Packages For week
                </span>
              </div>
            </div>
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontWeight: "600", marginBottom: "5px" }}>
                    Price
                  </span>
                  <input
                    type="number"
                    style={{
                      width: "100px",
                      height: "45px",
                      border: "1px solid black",
                      padding: "10px",
                      outline: "none",
                    }}
                    placeholder="450$"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label
                    style={{ fontWeight: "600", marginBottom: "5px" }}
                    htmlFor="cars"
                  >
                    Hour:
                  </label>
                  <select
                    id="cars"
                    name="cars"
                    style={{
                      border: "1px solid black",
                      width: "100px",
                      height: "45px",
                      fontFamily: "Poppins",
                      padding: "5px",
                      outline: "none",
                    }}
                  >
                    <option value="volvo">01 Hour</option>
                    <option value="volvo">02 Hours</option>
                    <option value="volvo">03 Hours</option>
                    <option value="volvo">05 Hours</option>
                    <option value="volvo">07 Hours</option>
                    <option value="volvo">10 Hours</option>
                    <option value="volvo">12 Hours</option>
                    <option value="volvo">14 Hours</option>
                    <option value="volvo">20 Hours</option>
                    <option value="volvo">24 Hours</option>
                  </select>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontWeight: "600", marginBottom: "5px" }}>
                    Price
                  </span>
                  <input
                    type="number"
                    style={{
                      width: "100px",
                      height: "45px",
                      border: "1px solid black",
                      padding: "10px",
                      outline: "none",
                    }}
                    placeholder="450$"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label
                    style={{ fontWeight: "600", marginBottom: "5px" }}
                    htmlFor="cars"
                  >
                    Day:
                  </label>
                  <select
                    id="cars"
                    name="cars"
                    style={{
                      border: "1px solid black",
                      width: "100px",
                      height: "45px",
                      fontFamily: "Poppins",
                      padding: "5px",
                      outline: "none",
                    }}
                  >
                    <option value="volvo">01 Day</option>
                    <option value="volvo">02 Days</option>
                    <option value="volvo">03 Days</option>
                    <option value="volvo">05 Days</option>
                    <option value="volvo">07 Days</option>
                    <option value="volvo">10 Days</option>
                    <option value="volvo">12 Days</option>
                    <option value="volvo">14 Days</option>
                    <option value="volvo">20 Days</option>
                    <option value="volvo">24 Days</option>
                    <option value="volvo">28 Days</option>
                    <option value="volvo">30 Days</option>
                  </select>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontWeight: "600", marginBottom: "5px" }}>
                    Price
                  </span>
                  <input
                    type="number"
                    style={{
                      width: "100px",
                      height: "45px",
                      border: "1px solid black",
                      padding: "10px",
                      outline: "none",
                    }}
                    placeholder="450$"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label
                    style={{ fontWeight: "600", marginBottom: "5px" }}
                    htmlFor="cars"
                  >
                    Week:
                  </label>
                  <select
                    id="cars"
                    name="cars"
                    style={{
                      border: "1px solid black",
                      width: "100px",
                      height: "45px",
                      fontFamily: "Poppins",
                      padding: "5px",
                      outline: "none",
                    }}
                  >
                    <option value="volvo">01 Month</option>
                    <option value="volvo">02 Month</option>
                    <option value="volvo">03 Month</option>
                    <option value="volvo">05 Months</option>
                    <option value="volvo">07 Months</option>
                    <option value="volvo">10 Months</option>
                    <option value="volvo">12 Months</option>
                  </select>
                </div>
              </div>
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
        <Link to="/personal-services/gardening/photo-and-video">
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

export default GardeningServiceForm;
