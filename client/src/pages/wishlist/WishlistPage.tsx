import React, {useEffect, useState} from 'react'
import styles from "./WishlistPage.module.scss";
import Footer from "../../components/Footer/Footer";
import { FC } from "react";
import NoItems from "../../components/NoItems/NoItems.tsx";
import { WishlistWindow } from './components/WishlistWindow.tsx';
import $api, {API_URL} from "../../lib/http.ts";
import {useSelector} from "react-redux";
import {userDataSelector} from "../../redux/slices/userDataSlice.ts";

export type wishlistItems = {
  "productId": {
    "reviews": string[],
    "_id": string,
    "product_name": string,
    "category": string,
    "subcategory": string,
    "description": string,
    "images": string[],
    "attributes": object,
  },
  "quantity": 1,
  "_id": string,
  "createdAt": string,
  "updatedAt": string
}

const WishlistPage: FC = () => {
  const [wishlistItems, setWishlistItems] = useState<wishlistItems[]>([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector(userDataSelector);

  useEffect(() => {
    getWishlistItems();
  }, []);

  const getWishlistItems = async () => {
    try {
      const response = await $api.get(`${API_URL}/wishlist/${user.id}`);
      setWishlistItems(response.data.items);
      console.log(response.data.items)
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <div className={styles.body}>
        <div className="__container">
          <h1>Wishlist</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Wishlist</span>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : wishlistItems?.length ? (
            <WishlistWindow setWishlistItems={setWishlistItems} wishlistItems={wishlistItems}/>
          ) : (
            <NoItems title="No Cart Items Found" />
          )}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default WishlistPage;
