import styles from "./ItemPublishPage.module.scss";
import { Link } from "react-router-dom";
import RentingStage from "../renting-stages/RentingStage";
// import {useDispatch} from "react-redux";
import {IVendorProductData} from "@models/IVendorProductData.tsx";
import $api, {API_URL} from "@utils/interceptors.ts";

import imageCloseButton from "@assets/images/ItemPublishPage/close-button.svg";

type ItemPublishPageProps = {
    category: string,
    formData: IVendorProductData,
    link: string,
}

// TODO: Need refactor

const ItemPublishPage = ({category, formData, link}: ItemPublishPageProps) => {
    // const dispatch = useDispatch();

    async function sendProductInfoHandler() {
        // dispatch(resetVendorProductInfo());
        const images = new FormData();

        Object.entries(formData).forEach(([key, value]) => {
            if(key !== 'images'){
                images.append(key, value as string);
            }
        });

        formData.images.filter(value => !!value).forEach(file=> {
            images.append('images', file);
        })
        console.log(formData);
        await $api.post(`${API_URL}/${link}`, formData, {
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
          <img src={imageCloseButton} alt="" />
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
          <Link to="/">
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
