import React from 'react';
import styles from './ProductFilter.module.scss';

import imageHeadphones from '@assets/images/TopRatedProducts/headphones.png';
import imageIphone12 from '@assets/images/TopRatedProducts/iphone12.png';
import imageAppleWatch from '@assets/images/TopRatedProducts/appleWatch.png';
import image1 from '@assets/images/TopRatedProducts/img1.png';
import image2 from '@assets/images/TopRatedProducts/img2.png';
import image3 from '@assets/images/TopRatedProducts/img3.png';
import image4 from '@assets/images/TopRatedProducts/img4.png';
import image5 from '@assets/images/TopRatedProducts/img5.png';
import image6 from '@assets/images/TopRatedProducts/img6.png';

export const ProductFilter = () => {
  return (
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
              <img src={imageHeadphones} alt='Image'/>
              <div>
                <div className={styles.rating}>(rating)</div>
                <span>Headphones Wireless</span>
                <p>$120.00</p>
              </div>
            </div>
            <div className={styles.topRatedProductsItem}>
              <img src={imageIphone12} alt='Image'/>
              <div>
                <div className={styles.rating}>(rating)</div>
                <span>Iphone 12 pro</span>
                <p>$1199.00</p>
              </div>
            </div>
            <div className={styles.topRatedProductsItem}>
              <img src={imageAppleWatch} alt='Image'/>
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
              <img src={image1} alt='Image'/>
              <img src={image2} alt='Image'/>
              <img src={image3} alt='Image'/>
            </div>
            <div className={styles.popularBrandsColumn}>
              <img src={image4} alt='Image'/>
              <img src={image5} alt='Image'/>
              <img src={image6} alt='Image'/>
            </div>
          </div>
        </div>
        <div className={styles.resetFilter}>
          <span className={styles.filterCategoryTitle}>Reset Filter</span>
          <button>Reset Filter</button>
        </div>
      </div>
    </div>
  );
};