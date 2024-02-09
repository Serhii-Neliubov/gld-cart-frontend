import React from 'react';
import styles from './ShoppingCartWindow.module.scss';

export const ShoppingCartWindow = () => {
    return (
        <div className={styles.content}>
            <div className={styles.productBox}>
                <div className={styles.label}>
                    <span>Product</span>
                    <span>Price</span>
                    <span>Quantity</span>
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
                        <div className={styles.removeProduct}>
                            <button>&times; Remove</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.checkoutMenu}>
                <div className={styles.price}>
                    <span>Subtotal</span>
                    <span>$500</span>
                </div>
                <div className={styles.shipping}>
                    <span>Shipping</span>
                    <div className={styles.shipping_input}>
                        <input type="radio" name="shipping" value="Flat rate"/>
                        <span>Flat rate: <p>$20.00</p></span>
                    </div>
                    <div className={styles.shipping_input}>
                        <input type="radio" name="shipping" value="Local pickup"/>
                        <span>Local pickup: <p>$20.00</p></span>
                    </div>
                    <div className={styles.shipping_input}>
                        <input type="radio" name="shipping" value="Free shipping"/>
                        <span>Free shipping</span>
                    </div>
                </div>
                <div className={styles.price}>
                    <span>Total</span>
                    <span>$500.00</span>
                </div>
                <button>Proceed to checkout</button>
            </div>
        </div>
    )
}