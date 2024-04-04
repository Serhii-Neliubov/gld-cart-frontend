import React from 'react';
import styles from "@/viewes/wishlist/WishlistPage.module.scss";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import Wishlist from "services/WishlistService.ts";
import toast from "react-hot-toast";
import ShoppingCart from "services/ShoppingCartService.ts";
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";
import {TypeWishlistItem} from "@/utils/models/IWishlistItem.ts";

export const WishlistItem = ({item}: {item: TypeWishlistItem}) => {
  const user = useSelector(userDataSelector);

  const queryClient = useQueryClient()

  const itemRemove = useMutation({
    mutationFn: (itemId: string) => Wishlist.removeItem(itemId, user.id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wishlistItems'] }),
    onError: () => toast.error("Error removing item from wishlist")
  });

  // TODO: Item quantity should be dynamic
  const itemAddToCart = useMutation({
    mutationFn: (itemId: string) => ShoppingCart.addToCart(itemId, user.id, 1),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['wishlistItems'] }),
    onError: () => toast.error("Error adding item to cart")
  });

  return (
    <div key={item._id} className={styles.productContent}>
      <div className={styles.productInfo}>
        <img alt='image' src={item.product.images[0]}/>
        <span>{item.product.product_name}</span>
      </div>
      <span className={styles.productPrice}>$500.00</span>
      <button
        onClick={() => itemAddToCart.mutate(item.product._id)}
        className={styles.addToCart}
      >
        Add to Cart
      </button>
      <div className={styles.removeProduct}>
        <button onClick={() => itemRemove.mutate(item.product._id)}>
          &times; Remove
        </button>
      </div>
    </div>
  );
};