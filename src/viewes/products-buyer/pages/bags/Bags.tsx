import React, {useEffect} from 'react';
import styles from './Bags.module.scss';
import Footer from '@/components/footer/Footer';
import { ProductFilter } from "@/components/product-filter/ProductFilter.tsx";
import imageDefaultIcon from '@/assets/images/TopRatedProducts/defaultIcon.svg';
import imageMenuSort from '@/assets/images/TopRatedProducts/menuSort.svg';
import imageFilterIcon from '@/assets/images/TopRatedProducts/filterIcon.svg';
import $api, {API_URL} from "@/utils/interceptors/interceptors.ts";
import {useNavigate} from "react-router-dom";

type product = {
    "reviews": [],
    "_id": string,
    "product_name": string,
    "category": string,
    "subcategory": string,
    "description": string,
    "images": string[],
    "attributes": object,
}
export const Bags = () => {
    const [products, setProducts] = React.useState([])
    const navigate = useNavigate();

    const getProductsData = async() => {
        const response = await $api.get(`${API_URL}/products/category/bags`);
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
                        <span className={styles.productsTitle}>Bags</span>
                        <div className={styles.actionButtons}>
                            <div>
                                <button className={styles.defaultSortButton}>
                                    <img src={imageDefaultIcon} alt=''/>
                                </button>
                                <button className={styles.menuSortButton}>
                                    <img src={imageMenuSort} alt=''/>
                                </button>
                            </div>
                            <p>Showing 1-12 of 37 results</p>
                            <div>
                                <select className={styles.sortOptionButton}>
                                    <option>Default Sorting</option>
                                </select>
                                <button className={styles.filterButton}>
                                    <img src={imageFilterIcon} alt=''/>
                                    Filter
                                </button>
                            </div>
                        </div>
                        {products?.map((product: product) => {
                            return <div key={product._id} onClick={() => navigate(`/product-page/${product._id}`)} className={styles.productItem}>
                                <div className={styles.productImage}>
                                    <img src={product.images[0]} alt=''/>
                                </div>
                                <div className={styles.productInfo}>
                                    <p>Product Tag</p>
                                    <span>{product.product_name}</span>
                                    <div>(rating)</div>
                                    <div className={styles.productPrice}>
                                        <span>${product.price}</span>
                                        <p>$123.50</p>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}