import React, { FC } from "react";
import styles from "./BasicInformationPage.module.scss";

const BasicInformationPage: FC = () => {
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
      </div>
      <h1 className={styles.title}>Vehicles Renting Form </h1>
      <div className={styles.content}>
        <h2 className={styles.content_title}>Basic Information</h2>
        <div className={styles.content_input}>
          <span>Title</span>
          <input type="text" placeholder="70 words max" />
        </div>
        <div className={styles.content_input}>
          <span>Description</span>
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
        <div>
          <span className={styles.content_driver}>
            You want to rent your car
          </span>
          <div
            style={{ display: "flex", gap: "20px", margin: "10px 0px 50px 0" }}
          >
            <div style={{ display: "flex", gap: "5px" }}>
              <input style={{ width: "20px" }} type="radio" />
              <p>Without Driver</p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <input style={{ width: "20px" }} type="radio" />
              <p>With Driver</p>
            </div>
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
                  Renting Packages For Days
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <input style={{ width: "20px" }} type="checkbox" />
                <span style={{ fontWeight: "600" }}>
                  Renting Packages For Days
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <input style={{ width: "20px" }} type="checkbox" />
                <span style={{ fontWeight: "600" }}>
                  Renting Packages For Days
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
                    Rent Price
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
                    <option value="volvo">02 Day</option>
                    <option value="volvo">03 Day</option>
                    <option value="volvo">05 Days</option>
                    <option value="volvo">07 Days</option>
                    <option value="volvo">10 Days</option>
                    <option value="volvo">12 Days</option>
                    <option value="volvo">14 Days</option>
                    <option value="volvo">20 Days</option>
                    <option value="volvo">24 Days</option>
                    <option value="volvo">28 Days</option>
                    <option value="volvo">30 Days</option>
                    <option value="volvo">60 Days</option>
                  </select>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontWeight: "600", marginBottom: "5px" }}>
                    Rent Price
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
                    <option value="volvo">02 Week</option>
                    <option value="volvo">03 Week</option>
                    <option value="volvo">05 Weeks</option>
                    <option value="volvo">07 Weeks</option>
                    <option value="volvo">10 Weeks</option>
                    <option value="volvo">12 Weeks</option>
                    <option value="volvo">14 Weeks</option>
                    <option value="volvo">20 Weeks</option>
                    <option value="volvo">24 Weeks</option>
                    <option value="volvo">28 Weeks</option>
                    <option value="volvo">30 Weeks</option>
                    <option value="volvo">60 Weeks</option>
                  </select>
                </div>
              </div>
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontWeight: "600", marginBottom: "5px" }}>
                    Rent Price
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
      </div>
    </div>
  );
};

export default BasicInformationPage;
