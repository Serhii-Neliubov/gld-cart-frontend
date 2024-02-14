import React from 'react';
import styles from './WishlistWindow.module.scss';
import {wishlistItems} from "../WishlistPage.tsx";
import $api, {API_URL} from "../../../lib/http.ts";
import {useSelector} from "react-redux";
import {userDataSelector} from "../../../redux/slices/userDataSlice.ts";

type WishlistWindowProps = {
    wishlistItems: wishlistItems[]
}

export const WishlistWindow = ({wishlistItems}: WishlistWindowProps) => {
    const user = useSelector(userDataSelector);

    const addToCartHandler = async(id: string) => {
        await $api.post(`${API_URL}/cart/add-item`, {
            userId: user.id,
            item: {
                productId: id,
            }
        });
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
                        return <div key={item.productId._id} className={styles.productContent}>
                            <div className={styles.productInfo}>
                                <img alt='' src='/ShoppingCard/product.png'/>
                                <span>{item.productId.product_name}</span>
                            </div>
                            <span className={styles.productPrice}>$500.00</span>
                            <button onClick={() => addToCartHandler(item.productId._id)} className={styles.addToCart}>Add to Cart</button>
                            <div className={styles.removeProduct}>
                                <button>&times; Remove</button>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}