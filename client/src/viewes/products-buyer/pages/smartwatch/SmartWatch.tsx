import React from 'react';
import styles from './SmartWatch.module.scss';
import Footer from '@/components/footer/Footer';
import { ProductFilter } from "@/components/product-filter/ProductFilter.tsx";

export const SmartWatch = () => {
    return (
        <React.Fragment>
            <div className='__container'>
                <div className={styles.content}>
                    <ProductFilter />
                    <div className={styles.products}>
                        <span className={styles.productsTitle}>Smart Watch</span>
                        <div className={styles.actionButtons}>
                            <div>
                                <button className={styles.defaultSortButton}>
                                    <img src='src/assets/images/TopRatedProducts/defaultIcon.svg' alt=''/>
                                </button>
                                <button className={styles.menuSortButton}>
                                    <img src='src/assets/images/TopRatedProducts/menuSort.svg' alt=''/>
                                </button>
                            </div>
                            <p>Showing 1-12 of 37 results</p>
                            <div>
                                <select className={styles.sortOptionButton}>
                                    <option>Default Sorting</option>
                                </select>
                                <button className={styles.filterButton}>
                                    <img src='src/assets/images/TopRatedProducts/filterIcon.svg' alt=''/>
                                    Filter
                                </button>
                            </div>
                        </div>
                        <div className={styles.productList}>
                            <div className={styles.productItem}>
                                <div className={styles.productImage}>
                                    <img src='src/assets/images/TopRatedProducts/productImage.png' alt=''/>
                                </div>
                                <div className={styles.productInfo}>
                                    <p>Product Tag</p>
                                    <span>Product Name</span>
                                    <div>(rating)</div>
                                    <div className={styles.productPrice}>
                                        <span>$130.00</span>
                                        <p>$123.50</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.productItem}>
                                <div className={styles.productImage}>
                                    <img src='src/assets/images/TopRatedProducts/productImage.png' alt=''/>
                                </div>
                                <div className={styles.productInfo}>
                                    <p>Product Tag</p>
                                    <span>Product Name</span>
                                    <div>(rating)</div>
                                    <div className={styles.productPrice}>
                                        <span>$130.00</span>
                                        <p>$123.50</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.productItem}>
                                <div className={styles.productImage}>
                                    <img src='src/assets/images/TopRatedProducts/productImage.png' alt=''/>
                                </div>
                                <div className={styles.productInfo}>
                                    <p>Product Tag</p>
                                    <span>Product Name</span>
                                    <div>(rating)</div>
                                    <div className={styles.productPrice}>
                                        <span>$130.00</span>
                                        <p>$123.50</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.productItem}>
                                <div className={styles.productImage}>
                                    <img src='src/assets/images/TopRatedProducts/productImage.png' alt=''/>
                                </div>
                                <div className={styles.productInfo}>
                                    <p>Product Tag</p>
                                    <span>Product Name</span>
                                    <div>(rating)</div>
                                    <div className={styles.productPrice}>
                                        <span>$130.00</span>
                                        <p>$123.50</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}