import React, { FC } from "react";
import styles from "./ItemPublishPage.module.scss";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import RentingStage from "../RentingStage/RentingStage";

const ItemPublishPage: FC = () => {
  const vehicleData = useSelector((state: RootState) => state);
  console.log(vehicleData.vehicleDataSlice.vehicle);
  return (
    <div
      style={{
        paddingBottom: "300px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="__container"
    >
      <RentingStage coloredStage={5} />
      <div className={styles.content}>
        <Link className={styles.close_button} to="/">
          <img src="/ItemPublishPage/close-button.svg" alt="" />
        </Link>
        <h1 className={styles.title}>
          Your Vehicles Renting Form has <br /> been Successfully Completed
        </h1>
        <div className={styles.actions}>
          <button
            style={{
              border: "1px solid gray",
              color: "gray",
              padding: "20px 50px",
            }}
          >
            Save as Draft
          </button>
          <Link to="/successfully-published">
            <button
              style={{
                border: "1px solid blue",
                backgroundColor: "blue",
                color: "white",
                padding: "20px 50px",
              }}
            >
              Publish
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemPublishPage;
