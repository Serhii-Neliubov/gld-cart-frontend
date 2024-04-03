import React, {FC} from 'react'
import styles from "./WishlistPage.module.scss";
import Footer from "@/components/footer/Footer";
import NoItems from "@/components/no-items-page/NoItems.tsx";
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";
import Wishlist from "services/WishlistService.ts";
import {useQuery} from "@tanstack/react-query";
import {WishlistItem} from "@/viewes/wishlist/components/WishlistItem.tsx";
import {TypeWishlistItem} from "@/utils/models/IWishlistItem.ts";

const WishlistPage: FC = () => {
  const user = useSelector(userDataSelector);

  const { data } = useQuery({
    queryKey: ["wishlistItems"],
    queryFn: () => Wishlist.getItems(user).then((res) => res.items),
  });

  if(!data?.length) {
    return <NoItems title="Wishlist"/>
  }

  return (
    <React.Fragment>
      <div className={styles.body}>
        <div className="__container">
          <h1>Wishlist</h1>
          <div className={styles.path}>
            <span>Home</span>
            <span>Wishlist</span>
          </div>
          <div className={styles.content}>
              <div className={styles.productBox}>
                <div className={styles.label}>
                  <span>Product</span>
                  <span>Price</span>
                  <span>Action</span>
                  <span></span>
                </div>
                <div className={styles.productList}>
                  {data.map((item: TypeWishlistItem) => <WishlistItem item={item} key={item._id}/>)}
                </div>
              </div>
            </div>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
};

export default WishlistPage;
