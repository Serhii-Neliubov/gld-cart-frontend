import React from 'react';
import styles from './WishlistWindow.module.scss';

export const WishlistWindow = ({wishlistItems}) => {
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
                        return <div className={styles.productContent}>
                            <div className={styles.productInfo}>
                                <img alt='' src='/ShoppingCard/product.png'/>
                                <span>{item.productId.product_name}</span>
                            </div>
                            <span className={styles.productPrice}>$500.00</span>
                            <button className={styles.addToCart}>Add to Cart</button>
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