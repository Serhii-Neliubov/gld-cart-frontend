import React from 'react';
import styles from './FacialCare.module.scss';
import Footer from '../../../../components/Footer/Footer';

export const FacialCare = () => {
    return (
        <React.Fragment>
            <div className='__container'>
                <div className={styles.content}>
                    <div className={styles.filter}>
                        <div className={styles.filterTitle}>
                            <h1>Shop Grid</h1>
                            <span>Home . Shop Grid</span>
                        </div>
                        <div className={styles.filterParams}>
                            <div className={styles.filter_price}>
                                <h2 className={styles.filterCategoryTitle}>Price Filter</h2>
                                <div className={styles.filter_label}/>
                                <div>
                                    <div className={styles.filter_price_text}>
                                        <p>$0 - $1199</p>
                                    </div>
                                    <button>Filter</button>
                                </div>
                            </div>
                            <div className={styles.productStatus}>
                            <h3 className={styles.filterCategoryTitle}>Product Status</h3>
                                <div className={styles.productStatusItems}>
                                    <div className={styles.productStatusItem}>
                                        <input type='checkbox'/>
                                        <label>On sale</label>
                                    </div>
                                    <div className={styles.productStatusItem}>
                                        <input type='checkbox'/>
                                        <label>In Stock</label>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.categories}>
                                <h3 className={styles.filterCategoryTitle}>Categories</h3>
                                <div className={styles.categoriesItems}>
                                    <div className={styles.categoriesItem}>
                                        <label>Beauty of Skin</label>
                                        <div>2</div>
                                    </div>
                                    <div className={styles.categoriesItem}>
                                        <label>Bags</label>
                                        <div>2</div>
                                    </div>
                                    <div className={styles.categoriesItem}>
                                        <label>Awesome Lip Care</label>
                                        <div>2</div>
                                    </div>
                                    <div className={styles.categoriesItem}>
                                        <label>Mobile Tablets</label>
                                        <div>2</div>
                                    </div>
                                    <div className={styles.categoriesItem}>
                                        <label>Bluetooth</label>
                                        <div>2</div>
                                    </div>
                                    <div className={styles.categoriesItem}>
                                        <label>Facial Care</label>
                                        <div>2</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.filterByColor}>
                                <h4 className={styles.filterCategoryTitle}>Filter by Color</h4>
                                <div className={styles.filterByColorItems}>
                                    <div className={styles.filterByColorItem}>
                                        <span className={`${styles.colorCircle} ${styles.colorCircle_sand}`}/>
                                        <label className={styles.colorSand}>Burning Sand</label>
                                        <div>1</div>
                                    </div>
                                    <div className={styles.filterByColorItem}>
                                        <span className={`${styles.colorCircle} ${styles.colorCircle_antiqueBrass}`}/>
                                        <label>Antique Brass</label>
                                        <div>2</div>
                                    </div>
                                    <div className={styles.filterByColorItem}>
                                        <span className={`${styles.colorCircle} ${styles.colorCircle_pishkinTan}`}/>
                                        <label>Pinkish Tan</label>
                                        <div>1</div>
                                    </div>
                                    <div className={styles.filterByColorItem}>
                                        <span className={`${styles.colorCircle} ${styles.colorCircle_iridium}`}/>
                                        <label>Iridium</label>
                                        <div>3</div>
                                    </div>
                                    <div className={styles.filterByColorItem}>
                                        <span className={`${styles.colorCircle} ${styles.colorCircle_purpleBlue}`}/>
                                        <label>Purple Blue</label>
                                        <div>1</div>
                                    </div>
                                    <div className={styles.filterByColorItem}>
                                        <span className={`${styles.colorCircle} ${styles.colorCircle_lightGrey}`}/>
                                        <label>Light Grey</label>
                                        <div>1</div>
                                    </div>
                                    <div className={styles.filterByColorItem}>
                                        <span className={`${styles.colorCircle} ${styles.colorCircle_babyPink}`}/>
                                        <label>Baby Pink</label>
                                        <div>1</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.topRatedProducts}>
                                <h5 className={styles.filterCategoryTitle}>Top Rated Products</h5>
                                <div className={styles.topRatedProductsItems}>
                                    <div className={styles.topRatedProductsItem}>
                                        <img src='../../../../assets/TopRatedProducts/headphones.png' alt='img'/>
                                        <div>
                                            <div className={styles.rating}>(rating)</div>
                                            <span>Headphones Wireless</span>
                                            <p>$120.00</p>
                                        </div>
                                    </div>
                                    <div className={styles.topRatedProductsItem}>
                                        <img src='../../../../assets/TopRatedProducts/iphone12.png' alt='img'/>
                                        <div>
                                            <div className={styles.rating}>(rating)</div>
                                            <span>Iphone 12 pro</span>
                                            <p>$1199.00</p>
                                        </div>
                                    </div>
                                    <div className={styles.topRatedProductsItem}>
                                        <img src='../../../../assets/TopRatedProducts/appleWatch.png' alt='img'/>
                                        <div>
                                            <div className={styles.rating}>(rating)</div>
                                            <span>Apple Watch Sport</span>
                                            <p>$449.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.popularBrands}>
                                <h6 className={styles.filterCategoryTitle}>Popular Brands</h6>
                                <div className={styles.popularBrandsItems}>
                                    <div className={styles.popularBrandsColumn}>
                                        <img src='../../../../assets/TopRatedProducts/img1.png' alt=''/>
                                        <img src='../../../../assets/TopRatedProducts/img2.png' alt=''/>
                                        <img src='../../../../assets/TopRatedProducts/img3.png' alt=''/>
                                    </div>
                                    <div className={styles.popularBrandsColumn}>
                                        <img src='../../../../assets/TopRatedProducts/img4.png' alt=''/>
                                        <img src='../../../../assets/TopRatedProducts/img5.png' alt=''/>
                                        <img src='../../../../assets/TopRatedProducts/img6.png' alt=''/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.resetFilter}>
                                <span className={styles.filterCategoryTitle}>Reset Filter</span>
                                <button>Reset Filter</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.products}>
                        <span className={styles.productsTitle}>Facial Care</span>
                        <div className={styles.actionButtons}>
                            <div>
                                <button className={styles.defaultSortButton}>
                                    <img src='../../../../assets/TopRatedProducts/defaultIcon.svg' alt=''/>
                                </button>
                                <button className={styles.menuSortButton}>
                                    <img src='../../../../assets/TopRatedProducts/menuSort.svg' alt=''/>
                                </button>
                            </div>
                            <p>Showing 1-12 of 37 results</p>
                            <div>
                                <select className={styles.sortOptionButton}>
                                    <option>Default Sorting</option>
                                </select>
                                <button className={styles.filterButton}>
                                    <img src='../../../../assets/TopRatedProducts/filterIcon.svg' alt=''/>
                                    Filter
                                </button>
                            </div>
                        </div>
                        <div className={styles.productList}>
                            <div className={styles.productItem}>
                                <div className={styles.productImage}>
                                    <img src='../../../../assets/TopRatedProducts/productImage.png' alt=''/>
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
                                    <img src='../../../../assets/TopRatedProducts/productImage.png' alt=''/>
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
                                    <img src='../../../../assets/TopRatedProducts/productImage.png' alt=''/>
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
                                    <img src='../../../../assets/TopRatedProducts/productImage.png' alt=''/>
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