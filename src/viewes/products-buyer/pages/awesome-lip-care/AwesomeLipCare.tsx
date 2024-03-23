import React, {useEffect} from 'react';
import styles from './AwesomeLipCare.module.scss';
import Footer from '@/components/footer/Footer';
import { ProductFilter } from "@/components/product-filter/ProductFilter.tsx";

import imageDefaultIcon from '@/assets/images/TopRatedProducts/defaultIcon.svg';
import imageMenuSort from '@/assets/images/TopRatedProducts/menuSort.svg';
import imageFilterIcon from '@/assets/images/TopRatedProducts/filterIcon.svg';
import {useNavigate} from "react-router-dom";
import $api, {API_URL} from "@/utils/interceptors/interceptors.ts";

type product = {
    "reviews": [],
    "_id": string,
    title: string,
    "product_name": string,
    "category": string,
    "subcategory": string,
    "description": string,
    "images": string[],
    "attributes": object,
}

export const AwesomeLipCare = () => {
    const [products, setProducts] = React.useState([])
    const navigate = useNavigate();
    const getProductsData = async() => {
        const response = await $api.get(`${API_URL}/products/category/awesome`);
        console.log(response.data)
        setProducts(response.data);
    }

    useEffect(() => {
        getProductsData();
    }, []);

    return (
        <React.Fragment>
            <div className='__container'>
                <div className={styles.content}>
                    <ProductFilter />
                    <div className={styles.products}>
                        <span className={styles.productsTitle}>Awesome Lip Care</span>
                        <div className={styles.actionButtons}>
                            <div>
                                <button className={styles.defaultSortButton}>
                                    <img src={imageDefaultIcon} alt='Image'/>
                                </button>
                                <button className={styles.menuSortButton}>
                                    <img src={imageMenuSort} alt='Image'/>
                                </button>
                            </div>
                            <p>Showing 1-12 of 37 results</p>
                            <div>
                                <select className={styles.sortOptionButton}>
                                    <option>Default Sorting</option>
                                </select>
                                <button className={styles.filterButton}>
                                    <img src={imageFilterIcon} alt='Image'/>
                                    Filter
                                </button>
                            </div>
                        </div>
                        <div className={styles.productList}>
                            {products?.map((product: product) => {
                                return <div key={product._id} onClick={() => navigate(`/product-page/${product._id}`)}
                                            className={styles.productItem}>
                                    <div className={styles.productImage}>
                                        <img src={product.images[0]} alt=''/>
                                    </div>
                                    <div className={styles.productInfo}>
                                        <p>{product.product_name}</p>
                                        <span>{product.title}</span>
                                        <div>(rating)</div>
                                        <div className={styles.productPrice}>
                                            <span>${product.price}</span>
                                            <p>$123</p>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}