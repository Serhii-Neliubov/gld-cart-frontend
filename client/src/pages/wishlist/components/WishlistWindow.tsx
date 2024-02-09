import React from 'react';
import styles from './WishlistWindow.module.scss';

export const WishlistWindow = () => {
    return (
        <div className={styles.content}>
            <div className={styles.productBox}>
                <div className={styles.label}>
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
                    <span>Action</span>
                    <span></span>
                </div>
                <div className={styles.productList}>
                    <div className={styles.productContent}>
                        <div className={styles.productInfo}>
                            <img alt='' src='/ShoppingCard/product.png'/>
                            <span>Cool Headphones</span>
                        </div>
                        <span className={styles.productPrice}>$500.00</span>
                        <div className={styles.productQuantity}>
                            <button>-</button>
                            <span>2</span>
                            <button>+</button>
                        </div>
                        <button className={styles.addToCart}>Add to Cart</button>
                        <div className={styles.removeProduct}>
                            <button>&times; Remove</button>
                        </div>
                    </div>
                    <div className={styles.productContent}>
                        <div className={styles.productInfo}>
                            <img alt='' src='/ShoppingCard/product.png'/>
                            <span>Cool Headphones</span>
                        </div>
                        <span className={styles.productPrice}>$500.00</span>
                        <div className={styles.productQuantity}>
                            <button>-</button>
                            <span>2</span>
                            <button>+</button>
                        </div>
                        <button className={styles.addToCart}>Add to Cart</button>
                        <div className={styles.removeProduct}>
                            <button>&times; Remove</button>
                        </div>
                    </div>
                    <div className={styles.productContent}>
                        <div className={styles.productInfo}>
                            <img alt='' src='/ShoppingCard/product.png'/>
                            <span>Cool Headphones</span>
                        </div>
                        <span className={styles.productPrice}>$500.00</span>
                        <div className={styles.productQuantity}>
                            <button>-</button>
                            <span>2</span>
                            <button>+</button>
                        </div>
                        <button className={styles.addToCart}>Add to Cart</button>
                        <div className={styles.removeProduct}>
                            <button>&times; Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}