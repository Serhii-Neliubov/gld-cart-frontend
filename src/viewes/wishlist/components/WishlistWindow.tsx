import React from 'react';
import styles from './WishlistWindow.module.scss';
import {useSelector} from "react-redux";
import {userDataSelector} from "@/store/slices/userDataSlice.ts";
import $api, {API_URL} from "@/utils/interceptors/interceptors.ts";
import {WishlistItem} from "@/viewes/wishlist/WishlistPage.tsx";

type WishlistWindowProps = {
    wishlistItems: WishlistItem[]
    setWishlistItems: (wishlistItems: WishlistItem[]) => void
}

export const WishlistWindow = ({wishlistItems, setWishlistItems}: WishlistWindowProps) => {
    const user = useSelector(userDataSelector);

    const addToCartHandler = async(productId: string) => {
        await $api.post(`${API_URL}/cart/add-item`, {
            userId: user.id,
            item: {
                product: productId,
            }
        });

    }

    const removeWishlistItemHandler = async (itemId: string) => {
        const response = await $api.delete(`${API_URL}/wishlist`, {
            data: {
                userId: user.id,
                product: itemId,
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
                    {wishlistItems.map((item) => {
                        return <div key={item._id} className={styles.productContent}>
                            <div className={styles.productInfo}>
                                <img alt='' src='src/assets/images/ShoppingCard/product.png'/>
                                <span>{item.product.product_name}</span>
                            </div>
                            <span className={styles.productPrice}>$500.00</span>
                            <button onClick={() => addToCartHandler(item.product._id)} className={styles.addToCart}>Add to Cart</button>
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