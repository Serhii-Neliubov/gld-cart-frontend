import React from 'react';
import styles from './ProductPage.module.scss';
import Footer from '../../../components/Footer/Footer';

export const ProductPage = () => {
    return (
        <React.Fragment>
            <div className='__container'>
                <div className={styles.content}>
                    <div className={styles.label}>
                        <span>Home</span>
                        <span>Earrings</span>
                        <span>Diamond Ear rings</span>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.images}>
                            <div className={styles.smallImages}>
                                <img src='/ProductPage/imageProduct.png' alt=''/>
                                <img src='/ProductPage/imageProduct.png' alt=''/>
                                <img src='/ProductPage/imageProduct.png' alt=''/>
                                <img src='/ProductPage/imageProduct.png' alt=''/>
                            </div>
                            <div className={styles.bigImage}>
                            <img src='/ProductPage/imageProduct.png' alt=''/>
                            </div>
                        </div>
                        <div className={styles.productInfo}>
                            <div className={styles.productTitle}>
                                <span>Earrings</span>
                                <h1>Diamond Ear rings</h1>
                            </div>
                            <div className={styles.inStock}>
                                <div>In-Stock</div>
                                <span>(0 Reviews)</span>
                            </div>
                            <div className={styles.description}>
                                joasdojiqwfuiuwquviquivwojqoasdasda
                                sdasdsadvjiojiwqvoijqiowviqwvwfiuqwvuiuq
                            </div>
                            <div className={styles.price}>
                                <span>$580</span>
                                <span>$550.00</span>
                            </div>
                            <div className={styles.colorsBox}>
                                <p>Color: </p>
                                <div className={styles.colors}>
                                    <div className={styles.colorCircle}/>
                                    <div className={styles.colorCircle}/>
                                    <div className={styles.colorCircle}/>
                                    <div className={styles.colorCircle}/>
                                    <div className={styles.colorCircle}/>
                                </div>
                            </div>
                            <div className={styles.flashSale}>
                                <img src='/ProductPage/fireIcon.png' alt='image'/>
                                <span>Flash Sale: Ends in 5 days</span>
                            </div>
                            <div className={styles.actionButtons}>
                                <span>Quantity</span>
                                <div className={styles.addToCart}>
                                    <input max="9" min='0' type='number' placeholder='1'/>
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                            <button className={styles.buyNow}>Buy Now</button>
                            <div className={styles.addToWishlist}>
                                <span>Add Wishlist</span>
                                <span>Ask a question</span>
                            </div>
                            <div className={styles.productSpecificDetails}>
                                <span>SKU: <p>DEB7SDVX62</p></span>
                                <span>Category: <p>Earrings</p></span>
                                <span>Tag: <p>Earrings</p></span>
                            </div>
                            <div className={styles.socials}>
                                <span>Share:</span>
                                <img src='/ProductPage/social1.png' alt='icon'/>
                                <img src='/ProductPage/social2.png' alt='icon'/>
                                <img src='/ProductPage/social3.png' alt='icon'/>
                                <img src='/ProductPage/social4.png' alt='icon'/>
                            </div>
                            <div className={styles.returnTipText}>
                            <p>30 days easy returns</p>
                                <p>Order yours before 2.30pm for same day dispatch</p>
                            </div>
                            <div className={styles.guaranteedSafe}>
                                <p>Guaranteed safe & secure checkout</p>
                                <img src='/ProductPage/paymentMethods.png' alt='icon'/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.relatedProducts}>
                        <span>Next Day Products</span>
                        <h2>Related Products</h2>

                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>

    )
}