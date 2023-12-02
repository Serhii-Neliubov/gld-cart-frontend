import React, { ChangeEvent, FC, useState } from "react";
import styles from "./BasicInformationPage.module.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { updateVehicle } from "../../redux/Slices/vehiclesItemSlice";

const BasicInformationPage: FC = () => {
  const vehicleData = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const [selectedRentingPackage, setSelectedRentingPackage] = useState<
    string | null
  >(null);
  const [selectedDriverType, setSelectedDriverType] = useState("");

  const handleCheckboxChange = (packageType: string) => {
    setSelectedRentingPackage((prevSelected) =>
      prevSelected === packageType ? null : packageType
    );
    dispatch(
      updateVehicle({
        key: "renting_packages",
        value: packageType,
      })
    );
  };
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    dispatch(
      updateVehicle({
        key: "driver_choice",
        value: event.target.value,
      })
    );
    setSelectedDriverType(event.target.value);
  };

  console.log(vehicleData.vehicleDataSlice.vehicle);
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
        <div className={styles.routing}>
          <div style={{ backgroundColor: "#D9D9D9" }} className={styles.number}>
            6
          </div>
          <span>Publish</span>
        </div>
      </div>
      <h1 className={styles.title}>Vehicles Renting Form </h1>
      <div className={styles.content}>
        <h2 className={styles.content_title}>Basic Information</h2>
        <div className={styles.content_input}>
          <span>Title</span>
          <input
            onChange={(e) =>
              dispatch(
                updateVehicle({
                  key: "title",
                  value: e.target.value,
                })
              )
            }
            value={vehicleData.vehicleDataSlice.vehicle.title}
            type="text"
            placeholder="70 words max"
          />
        </div>
        <div className={styles.content_input}>
          <span>Description</span>
          <textarea
            onChange={(e) =>
              dispatch(
                updateVehicle({
                  key: "description",
                  value: e.target.value,
                })
              )
            }
            value={vehicleData.vehicleDataSlice.vehicle.description}
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
              <input
                style={{ width: "20px" }}
                type="radio"
                name="driverType"
                value="withoutDriver"
                onChange={handleRadioChange}
                checked={selectedDriverType === "withoutDriver"}
              />
              <p>Without Driver</p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <input
                style={{ width: "20px" }}
                type="radio"
                name="driverType"
                value="withDriver"
                onChange={handleRadioChange}
                checked={selectedDriverType === "withDriver"}
              />
              <p>With Driver</p>
            </div>
          </div>
        </div>
        <div>
          <span style={{ fontWeight: "600", fontSize: "20px" }}>
            Packages Details
          </span>
          <div style={{ marginTop: "35px" }}>
            <div style={{ display: "flex", gap: "170px" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  style={{ width: "20px" }}
                  type="checkbox"
                  onChange={() => handleCheckboxChange("days")}
                  checked={selectedRentingPackage === "days"}
                />
                <span style={{ fontWeight: "600" }}>
                  Renting Packages For Days
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  style={{ width: "20px" }}
                  type="checkbox"
                  onChange={() => handleCheckboxChange("weeks")}
                  checked={selectedRentingPackage === "weeks"}
                />
                <span style={{ fontWeight: "600" }}>
                  Renting Packages For Weeks
                </span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  style={{ width: "20px" }}
                  type="checkbox"
                  onChange={() => handleCheckboxChange("months")}
                  checked={selectedRentingPackage === "months"}
                />
                <span style={{ fontWeight: "600" }}>
                  Renting Packages For Months
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
                    onChange={(event) => {
                      dispatch(
                        updateVehicle({
                          key: "rent_price",
                          value: event.target.value,
                        })
                      );
                    }}
                    value={vehicleData.vehicleDataSlice.vehicle.rent_price}
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
                    onChange={(e) => {
                      dispatch(
                        updateVehicle({
                          key: "time",
                          value: e.target.value,
                        })
                      );
                    }}
                  >
                    <option value="1 day">01 Day</option>
                    <option value="2 days">02 Day</option>
                    <option value="3 days">03 Day</option>
                    <option value="6 days">05 Days</option>
                    <option value="7 days">07 Days</option>
                    <option value="10 days">10 Days</option>
                    <option value="12 days">12 Days</option>
                    <option value="14 days">14 Days</option>
                    <option value="20 days">20 Days</option>
                    <option value="24 days">24 Days</option>
                    <option value="28 days">28 Days</option>
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
                    onChange={(event) => {
                      dispatch(
                        updateVehicle({
                          key: "rent_price",
                          value: event.target.value,
                        })
                      );
                    }}
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
                    id="weeks"
                    name="weeks"
                    style={{
                      border: "1px solid black",
                      width: "100px",
                      height: "45px",
                      fontFamily: "Poppins",
                      padding: "5px",
                      outline: "none",
                    }}
                    onChange={(e) => {
                      dispatch(
                        updateVehicle({
                          key: "time",
                          value: e.target.value,
                        })
                      );
                    }}
                  >
                    <option value="1 week">01 Week</option>
                    <option value="2 weeks">02 Week</option>
                    <option value="3 weeks">03 Week</option>
                    <option value="5 weeks">05 Weeks</option>
                    <option value="7 weeks">07 Weeks</option>
                    <option value="10 weeks">10 Weeks</option>
                    <option value="12 weeks">12 Weeks</option>
                    <option value="14 weeks">14 Weeks</option>
                    <option value="20 weeks">20 Weeks</option>
                    <option value="24 weeks">24 Weeks</option>
                    <option value="28 weeks">28 Weeks</option>
                    <option value="30 weeks">30 Weeks</option>
                    <option value="60 weeks">60 Weeks</option>
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
                    onChange={(e) => {
                      dispatch(
                        updateVehicle({
                          key: "time",
                          value: e.target.value,
                        })
                      );
                    }}
                  >
                    <option value="1 Month">01 Month</option>
                    <option value="2 Months">02 Months</option>
                    <option value="3 Months">03 Months</option>
                    <option value="5 Months">05 Months</option>
                    <option value="7 Months">07 Months</option>
                    <option value="10 Months">10 Months</option>
                    <option value="12 Months">12 Months</option>
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
        <Link to="/renting-category-page/vehicles/photo-and-video">
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

export default BasicInformationPage;
