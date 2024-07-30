import React, {useEffect, useState} from 'react';
import styles from './ProductsList.module.scss';
import Footer from '@/components/Footer.tsx';
import { ProductFilter } from "@/components/product-filter/ProductFilter.tsx";

import imageDefaultIcon from '@/assets/images/TopRatedProducts/defaultIcon.svg';
import imageMenuSort from '@/assets/images/TopRatedProducts/menuSort.svg';
import imageFilterIcon from '@/assets/images/TopRatedProducts/filterIcon.svg';
import {useNavigate, useParams} from "react-router-dom";
import $api from "@/utils/interceptors/interceptors.ts";

type Product = {
  "reviews": [],
  "_id": string,
  price: number,
  title: string,
  "product_name": string,
  "category": string,
  "subcategory": string,
  "description": string,
  "images": string[],
  "attributes": object,
}
export const ProductsList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await $api.get(`/products/category/${category}`);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <React.Fragment>
      <div className='__container'>
        <div className={styles.content}>
          <ProductFilter />
          <div className={styles.products}>
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
              {loading ? (
                <div>Loading...</div>
              ) : (
                products.map((product: Product) => {
                    return (
                      <div key={product._id} onClick={() => navigate(`/product-page/${product._id}`)}
                           className={styles.productItem}>
                        <div className={styles.productImage}>
                          <img src={product.images[0]} alt='product image'/>
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
                    )
                })
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  )
}