import React from 'react';
import styles from './WishlistWindow.module.scss';
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";
import {WishlistItem} from "@/viewes/wishlist/WishlistPage.tsx";
import ShoppingCart from "services/ShoppingCartService.ts";
import Wishlist from "services/WishlistService.ts";

type WishlistWindowProps = {
    wishlistItems: WishlistItem[]
    setWishlistItems: (wishlistItems: WishlistItem[]) => void
}

export const WishlistWindow = ({wishlistItems, setWishlistItems}: WishlistWindowProps) => {
    const user = useSelector(userDataSelector);

    const removeWishlistItemHandler = async (itemId: string) => {
        const data = await Wishlist.removeItem(itemId, user.id);
        setWishlistItems(data);
    }

    return (
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
                                <img alt='' src='src/assets/images/ShoppingCard/product.png'/>
                                <span>{item.product.product_name}</span>
                            </div>
                            <span className={styles.productPrice}>$500.00</span>
                            <button onClick={() => ShoppingCart.addToCart(item.product._id, user.id)} className={styles.addToCart}>Add to Cart</button>
                            <div className={styles.removeProduct}>
                                <button onClick={() => removeWishlistItemHandler(item.product._id)}>&times; Remove</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}