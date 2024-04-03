import React, {FC} from 'react'
import styles from "./WishlistPage.module.scss";
import Footer from "@/components/footer/Footer";
import NoItems from "@/components/no-items-page/NoItems.tsx";
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";
import Wishlist from "services/WishlistService.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import ShoppingCart from "services/ShoppingCartService.ts";
import {WishlistItem} from "@/utils/models/IWishlistItem.ts";

const WishlistPage: FC = () => {
  const user = useSelector(userDataSelector);

  const { data } = useQuery({
    queryKey: ["wishlistItems"],
    queryFn: () => Wishlist.getItems(user).then((res) => res.items),
  });

  const queryClient = useQueryClient()

  const remove = useMutation({
    mutationFn: (itemId: string) => Wishlist.removeItem(itemId, user.id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wishlistItems'] }),
    onError: () => toast.error("Error removing item from wishlist")
  });

  // TODO: Item quantity should be dynamic
  const add = useMutation({
    mutationFn: (itemId: string) => ShoppingCart.addToCart(itemId, user.id, 1),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wishlistItems'] }),
    onError: () => toast.error("Error adding item to cart")
  });

  if(!data?.length) {
    return <NoItems title="No Wishlist Items Found"/>
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
                  {data.map((item: WishlistItem) => {
                    return <div key={item._id} className={styles.productContent}>
                      <div className={styles.productInfo}>
                        <img alt='image' src={item.product.images[0]}/>
                        <span>{item.product.product_name}</span>
                      </div>
                      <span className={styles.productPrice}>$500.00</span>
                      <button onClick={() => {
                        add.mutate(item.product._id);
                      }}
                              className={styles.addToCart}>Add to Cart
                      </button>
                      <div className={styles.removeProduct}>
                        <button onClick={async () => {
                          remove.mutate(item.product._id);
                        }}>&times; Remove</button>
                      </div>
                    </div>
                  })}
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
