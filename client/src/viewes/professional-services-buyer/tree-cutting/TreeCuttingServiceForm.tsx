import React, { FC } from "react";
import styles from "./TreeCuttingServiceForm.module.scss";
import { Link } from "react-router-dom";
import RentingStage from "../../../components/RentingStage/RentingStage";

const TreeCuttingServiceForm: FC = () => {
  return (
    <div style={{ paddingBottom: "50px" }} className="__container">
      <RentingStage coloredStage={2} />
      <h1 className={styles.title}>Tree Cutting SERVICES Form </h1>
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
            <label htmlFor="input">DAY</label>
            <input style={{ width: "20px", height: "20px" }} type="radio" />
            <label htmlFor="input">NIGHT</label>
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
                  Tree Cutting Packages For Days
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <input style={{ width: "20px" }} type="checkbox" />
                <span style={{ fontWeight: "600" }}>
                  Tree Cutting Packages For Weeks
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <input style={{ width: "20px" }} type="checkbox" />
                <span style={{ fontWeight: "600" }}>
                  Tree Cutting Packages For Hours
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
                    <option value="volvo">01 Week</option>
                    <option value="volvo">02 Weeks</option>
                    <option value="volvo">03 Weeks</option>
                    <option value="volvo">05 Weeks</option>
                    <option value="volvo">07 Weeks</option>
                    <option value="volvo">10 Weeks</option>
                    <option value="volvo">12 Weeks</option>
                    <option value="volvo">14 Weeks</option>
                    <option value="volvo">20 Weeks</option>
                    <option value="volvo">24 Weeks</option>
                    <option value="volvo">28 Weeks</option>
                    <option value="volvo">30 Weeks</option>
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
                    Month:
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
        <Link to="/personal-services/tree-cutting/photo-and-video">
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

export default TreeCuttingServiceForm;
