import React, { useEffect, useState } from 'react'
import styles from "./WishlistPage.module.scss";
import Footer from "@/components/footer/Footer";
import { FC } from "react";
import NoItems from "@/components/no-items-page/NoItems.tsx";
import { useSelector } from "react-redux";
import { userDataSelector } from "@/store/slices/userDataSlice.ts";
import Wishlist from "services/WishlistService.ts";
import ShoppingCart from "services/ShoppingCartService.ts";

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
  const user = useSelector(userDataSelector);

  const removeWishlistItemHandler = async (itemId: string | undefined) => {
    const data = await Wishlist.removeItem(itemId, user.id);
    setWishlistItems(data);
  };

  const addItemToCartHandler = async (productId: string | undefined) => {
    await ShoppingCart.addToCart(productId, user.id);
    await removeWishlistItemHandler(productId);
  }

  useEffect(() => {
    const getWishlistItems = async () => {
      const data = await Wishlist.getItems(user);
      console.log(data);
      setWishlistItems(data);
    };

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
          {wishlistItems?.length ? (
            <div className={styles.content}>
              <div className={styles.productBox}>
                <div className={styles.label}>
                  <span>Product</span>
                  <span>Price</span>
                  <span>Action</span>
                  <span></span>
                </div>
                <div className={styles.productList}>
                  {wishlistItems.map((item) => {
                    return <div key={item._id} className={styles.productContent}>
                      <div className={styles.productInfo}>
                        <img alt='' src={item.product.images[0]}/>
                        <span>{item.product.product_name}</span>
                      </div>
                      <span className={styles.productPrice}>$500.00</span>
                      <button onClick={() => addItemToCartHandler(item.product._id)}
                              className={styles.addToCart}>Add to Cart
                      </button>
                      <div className={styles.removeProduct}>
                        <button onClick={() => removeWishlistItemHandler(item.product._id)}>&times; Remove</button>
                      </div>
                    </div>
                  })}
                </div>
              </div>
            </div>
          ) : (
            <NoItems title="No Wishlist Items Found"/>
          )}
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default WishlistPage;
