import styles from "@/viewes/shopping-cart/ShoppingCartPage.module.scss";
import React from "react";
import {TypeCartItem} from "@/utils/models/ICartItem.ts";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";
import ShoppingCart from "services/ShoppingCartService.ts";

export const CartItem = ({item}: {item: TypeCartItem}) => {
  const user = useSelector(userDataSelector);
  const queryClient = useQueryClient();

  const itemRemove = useMutation({
    mutationFn: (itemId: string) => ShoppingCart.removeItem(itemId, user.id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cartItems'] }),
    onError: () => toast.error("Error removing item from wishlist")
  });

  return (
    <div key={item._id} className={styles.productContent}>
      <div className={styles.productInfo}>
        <img alt="image" src={item.product.images[0]}/>
        <span>{item.product.product_name}</span>
      </div>
      <span className={styles.productPrice}>${item.product.price}</span>
      <div className={styles.productQuantity}>
        <button>-</button>
        <span>{item.quantity}</span>
        <button>+</button>
      </div>
      <div className={styles.removeProduct}>
        <button onClick={() => itemRemove.mutate(item.product._id)}>
          &times; Remove
        </button>
      </div>
    </div>
  );
}