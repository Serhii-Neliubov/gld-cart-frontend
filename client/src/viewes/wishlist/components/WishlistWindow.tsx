import React from 'react';
import styles from './WishlistWindow.module.scss';
import {wishlistItems} from "../WishlistPage.tsx";
import {useSelector} from "react-redux";
import {userDataSelector} from "../../../store/slices/userDataSlice.ts";
import $api, {API_URL} from "../../../lib/interceptors.ts";

type WishlistWindowProps = {
    wishlistItems: wishlistItems[]
    setWishlistItems: (wishlistItems: wishlistItems[]) => void
}

export const WishlistWindow = ({wishlistItems, setWishlistItems}: WishlistWindowProps) => {
    const user = useSelector(userDataSelector);

    const addToCartHandler = async(id: string) => {
        await $api.post(`${API_URL}/cart/add-item`, {
            userId: user.id,
            item: {
                productId: id,
            }
        });
    }

    const removeWishlistItemHandler = async (itemId: string) => {
        const response = await $api.delete(`${API_URL}/wishlist`, {
            data: {
                userId: user.id,
                productId: itemId,
            }
        });

        setWishlistItems(response.data.items);
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
                    {wishlistItems.map((item: wishlistItems) => {
                        return <div key={item._id} className={styles.productContent}>
                            <div className={styles.productInfo}>
                                <img alt='' src='/ShoppingCard/product.png'/>
                                <span>{item.productId.product_name}</span>
                            </div>
                            <span className={styles.productPrice}>$500.00</span>
                            <button onClick={() => addToCartHandler(item.productId._id)} className={styles.addToCart}>Add to Cart</button>
                            <div className={styles.removeProduct}>
                                <button onClick={() => removeWishlistItemHandler(item.productId._id)}>&times; Remove</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}