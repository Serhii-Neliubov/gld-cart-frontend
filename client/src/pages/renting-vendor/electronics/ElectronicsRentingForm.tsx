import React, { FC } from "react";
import styles from "./ElectronicsRentingForm.module.scss";
import RentingForm from "../../../components/UI/RentingForm/RentingForm";
import RentingActions from "../../../components/UI/RentingActions/RentingActions";

const packageBlocks = [{ time: "Days" }, { time: "Weeks" }, { time: "Months" }];

const ElectronicsRentingForm: FC = () => {
  return (
    <RentingForm coloredStage={2} title="Electronics Renting Form">
      <div className={styles.content_input}>
        <span>Title</span>
        <input type="text" placeholder="70 words max" />
      </div>
      <div className={styles.content_input}>
        <span>Description</span>
        <textarea placeholder="Minimum 160 and maximum 9000 characters" />
      </div>
      <div>
        <span className={styles.package_title}>Packages Details</span>
        <div className={styles.package_content}>
          <div className={styles.package_blocks}>
            {packageBlocks.map((packageBlock) => {
              return (
                <div style={{ display: "flex", gap: "10px" }}>
                  <input style={{ width: "20px" }} type="checkbox" />
                  <span style={{ fontWeight: "600" }}>
                    Renting Packages For {packageBlock.time}
                  </span>
                </div>
              );
            })}
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
                  <option value="volvo">14 Months</option>
                  <option value="volvo">20 Months</option>
                  <option value="volvo">24 Months</option>
                  <option value="volvo">28 Months</option>
                  <option value="volvo">30 Months</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RentingActions nextPageLink="/renting-category-page/electronics/photo-and-video" />
    </RentingForm>
  );
};

export default ElectronicsRentingForm;
