import React from "react";
import styles from "./ItemPublishPage.module.scss";
import { Link } from "react-router-dom";
import RentingStage from "../RentingStage/RentingStage";
import {useDispatch} from "react-redux";
import {
    resetVendorProductInfo,
} from "../../redux/slices/vendorProductInfoSlice.ts";
import axios from "axios";
import {API_URL} from "../../lib/http.ts";
import {IVendorProductData} from "../../models/IVendorProductData.tsx";

type ItemPublishPageProps = {
    category: string,
    formData: IVendorProductData,
}

const ItemPublishPage = ({category, formData}: ItemPublishPageProps) => {
    const dispatch = useDispatch();

    async function sendProductInfoHandler() {
        dispatch(resetVendorProductInfo());
        const images = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            if(key !== 'images'){
                images.append(key, value as string);
            }
        });

        formData.images.filter(value => !!value).forEach(file=> {
            images.append('images', file);
        })

        console.log('images: ', images)

        await axios.post(`${API_URL}/products`, formData, {
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
