import styles from "./ProductsCategories.module.scss";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer.tsx";
import useDefaultScrollPosition from "@/hooks/useDefaultScrollPosition.tsx";

import imageCategory1 from "@/assets/images/Categories/img1.png";
import imageCategory2 from "@/assets/images/Categories/img2.png";
import imageCategory3 from "@/assets/images/Categories/img3.png";
import imageCategory4 from "@/assets/images/Categories/img4.png";
import imageCategory5 from "@/assets/images/Categories/img5.png";
import imageCategory6 from "@/assets/images/Categories/img6.png";
import imageCategory7 from "@/assets/images/Categories/img7.png";
import imageCategory8 from "@/assets/images/Categories/img8.png";
import imageCategory9 from "@/assets/images/Categories/img9.png";
import imageCategory10 from "@/assets/images/Categories/img10.png";
import imageCategory11 from "@/assets/images/Categories/img11.png";
import imageCategory12 from "@/assets/images/Categories/img12.png";
import imageCategory13 from "@/assets/images/Categories/img13.png";
import imageCategory14 from "@/assets/images/Categories/img14.png";
import imageCategory15 from "@/assets/images/Categories/img15.png";

const categories = [
  { category: 'beauty', title: "Beauty of Skin", img: imageCategory1, count: "2 products"},
  { category: 'bags', title: "Bags", img: imageCategory2, count: "2 products"},
  { category: 'awesome', title: "Awesome Lip Care", img: imageCategory3, count: "2 products"},
  { category: 'mobileTablets',title: "Mobile Tablets", img: imageCategory4, count: "2 products"},
  { category: 'necklaces',title: "Necklaces", img: imageCategory5, count: "2 products"},
  { category: 'clothing',title: "Clothing", img: imageCategory6, count: "2 products"},
  { category: 'bluetooth',title: "Bluetooth", img: imageCategory7, count: "2 products"},
  { category: 'facial',title: "Facial Care", img: imageCategory8, count: "2 products"},
  { category: 'shoes',title: "Shoes", img: imageCategory9, count: "2 products"},
  { category: 'cpu',title: "CPU", img: imageCategory10, count: "2 products"},
  { category: 'discover', title: "Discover Skincare", img: imageCategory11, count: "2 products"},
  { category: 'headphones', title: "Headphones", img: imageCategory12, count: "3 products"},
  { category: 'bracelets', title: "Bracelets", img: imageCategory13, count: "3 products"},
  { category: 'smartwatch', title: "Smart Watch", img: imageCategory14, count: "3 products"},
  { category: 'earrings', title: "Earrings", img: imageCategory15, count: "3 products"},
];

const ProductsPage: FC = () => {
  useDefaultScrollPosition();

  return (
    <React.Fragment>
      <div className={styles.body}>
        <div className="__container">
          <div className={styles.content}>
            <h1 className={styles.title}>Only Categories</h1>
            <div className={styles.path}>
              <span>Home</span>
              <span>Only Categories</span>
            </div>
            <div className={styles.blocks}>
              {categories.map((category, index) => {
                return (
                  <Link key={index} to={category.category} className={styles.block}>
                    <img
                      className={styles.image}
                      src={category.img}
                      alt="Image"
                    />
                    <h2 className={styles.block_title}>{category.title}</h2>
                    <span className={styles.block_count}>{category.count}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ProductsPage;
