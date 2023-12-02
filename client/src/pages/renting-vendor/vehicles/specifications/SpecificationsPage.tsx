import React, { FC, useState } from "react";
import styles from "./SpecificationsPage.module.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateVehicle } from "../../../../redux/Slices/vehiclesItemSlice";

const SpecificationsPage: FC = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    manufacture_year: "",
    vehicle_number: "",
    specification: "",
    specification_details: "",
    fuel_type: "",
    engine_capacity: "",
    seat_capacity: "",
    storage_bag_capacity: "",
    air_bags: "",
  });
  const [selectedVehicleType, setSelectedVehicleType] = useState<string | null>(
    null
  );

  const handleFieldChange = (fieldName: string, value: string) => {
    setData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleButtonClick = () => {
    const keys = [
      "manufacture_year",
      "vehicle_number",
      "specification",
      "specification_details",
      "fuel_type",
      "engine_capacity",
      "seat_capacity",
      "storage_bag_capacity",
      "air_bags",
    ];

    keys.forEach((key) => {
      dispatch(updateVehicle({ key, value: data[key] }));
    });
  };

  const handleRadioChange = (vehicleType: string) => {
    setSelectedVehicleType(vehicleType);
  };
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
      <h1 className={styles.title}>Vehicles Renting Form </h1>
      <div className={styles.content}>
        <h2 className={styles.content_title}>Vehicle Specification</h2>
        <div style={{ display: "flex", gap: "20px", width: "100%" }}>
          <div className={styles.content_input}>
            <span>Year of Manufacture</span>
            <input
              onChange={(e) =>
                handleFieldChange("manufacture_year", e.target.value)
              }
              value={data.manufacture_year}
              type="text"
              placeholder="Car Manufacture year"
            />
          </div>
          <div className={styles.content_input}>
            <span>Vehicle Plate Number</span>
            <input
              onChange={(e) => {
                setData({ ...data, vehicle_number: e.target.value });
              }}
              value={data.vehicle_number}
              type="text"
              placeholder="AAA-123"
            />
          </div>
        </div>
        <div>
          <span className={styles.content_driver}>Vehicle Condition</span>
          <div
            style={{ display: "flex", gap: "20px", margin: "10px 0px 50px 0" }}
          >
            <div style={{ display: "flex", gap: "5px" }}>
              <input
                style={{ width: "20px" }}
                type="radio"
                name="vehicleType"
                onChange={() => handleRadioChange("new")}
                checked={selectedVehicleType === "new"}
              />
              <p>New Vehicle</p>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <input
                style={{ width: "20px" }}
                type="radio"
                name="vehicleType"
                onChange={() => handleRadioChange("used")}
                checked={selectedVehicleType === "used"}
              />
              <p>Used Vehicle</p>
            </div>
          </div>
        </div>
        <div>
          <div style={{ display: "flex", gap: "20px", width: "100%" }}>
            <div className={styles.content_input}>
              <span>Custom specification*</span>
              <input
                onChange={(e) => {
                  setData({ ...data, specification: e.target.value });
                }}
                value={data.specification}
                style={{ padding: "10px" }}
                type="text"
                placeholder="Transmission"
              />
            </div>
            <div className={styles.content_input}>
              <span>Specification details*</span>
              <input
                onChange={(e) => {
                  setData({ ...data, specification_details: e.target.value });
                }}
                value={data.specification_details}
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
                onChange={(e) => {
                  setData({ ...data, fuel_type: e.target.value });
                }}
                value={data.fuel_type}
                style={{ padding: "10px" }}
                type="text"
                placeholder="Diesel"
              />
            </div>
            <div className={styles.content_input}>
              <span>Engine copacity*</span>
              <input
                onChange={(e) => {
                  setData({ ...data, engine_capacity: e.target.value });
                }}
                value={data.engine_capacity}
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
              <input
                onChange={(e) => {
                  setData({ ...data, seat_capacity: e.target.value });
                }}
                value={data.seat_capacity}
                style={{ padding: "10px" }}
                type="text"
                placeholder="04"
              />
            </div>
            <div className={styles.content_input}>
              <span>Storage Bag copacity</span>
              <input
                onChange={(e) => {
                  setData({ ...data, storage_bag_capacity: e.target.value });
                }}
                value={data.storage_bag_capacity}
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
              <input
                onChange={(e) => {
                  setData({ ...data, air_bags: e.target.value });
                }}
                value={data.air_bags}
                style={{ padding: "10px" }}
                type="text"
                placeholder="02"
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
        <Link to="/renting-category-page/vehicles/photo-and-video/publishing">
          <button
            onClick={handleButtonClick}
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
