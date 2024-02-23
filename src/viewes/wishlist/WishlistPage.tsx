import React, { useEffect, useState } from 'react'
import styles from "./WishlistPage.module.scss";
import Footer from "@/components/footer/Footer";
import { FC } from "react";
import NoItems from "@/components/no-items-page/NoItems.tsx";
import { WishlistWindow } from './components/WishlistWindow.tsx';
import { useSelector } from "react-redux";
import { userDataSelector } from "@/store/slices/userDataSlice.ts";
import Wishlist from "services/WishlistService.ts";

export type WishlistItem = {
  product: {
    "reviews": [],
    "_id": string,
    "product_name": string,
    "category": string,
    "subcategory": string,
    "description": string,
    "images": string[],
    "attributes": object,
  },
  _id: string,
  createdAt: string,
  updatedAt: string,
}

const WishlistPage: FC = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector(userDataSelector);

  const getWishlistItems = async () => {
    try {
      const data = await Wishlist.getItems(user);

      setWishlistItems(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching cart items:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getWishlistItems();
  }, []);

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
            <NoItems title="No Wishlist Items Found" />
          )}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default WishlistPage;
