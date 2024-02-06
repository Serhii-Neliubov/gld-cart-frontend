import React from "react";
import styles from "./ItemPublishPage.module.scss";
import { Link } from "react-router-dom";
import RentingStage from "../RentingStage/RentingStage";
import {useDispatch, useSelector} from "react-redux";
import {
    resetVendorProductInfo,
    vendorProductInfo,
} from "../../redux/slices/vendorProductInfoSlice.ts";
import axios from "axios";
import {API_URL} from "../../lib/http.ts";

type ItemPublishPageProps = {
    category: string,
}

const ItemPublishPage = ({category}: ItemPublishPageProps) => {
    const dispatch = useDispatch();
    const data = useSelector(vendorProductInfo);

    async function sendProductInfoHandler() {
        dispatch(resetVendorProductInfo())

        await axios.post(`${API_URL}/products`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    }

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
          Your {category} Renting Form has <br /> been Successfully Completed
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
                onClick={sendProductInfoHandler}
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
