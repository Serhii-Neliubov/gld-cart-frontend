import styles from "./ProductsPage.module.scss";
import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer.tsx";

const categories = [
  { title: "Beauty of Skin", img: "Categories/img1.png", count: "2 products" },
  { title: "bags", img: "Categories/img2.png", count: "2 products" },
  {
    title: "Awesome Lip Care",
    img: "Categories/img3.png",
    count: "2 products",
  },
  { title: "Mobile Tablets", img: "Categories/img4.png", count: "2 products" },
  { title: "Necklaces", img: "Categories/img5.png", count: "2 products" },
  { title: "Clothing", img: "Categories/img6.png", count: "2 products" },
  { title: "Bluetooth", img: "Categories/img7.png", count: "2 products" },
  { title: "Facial Care", img: "Categories/img8.png", count: "2 products" },
  { title: "Shoes", img: "Categories/img9.png", count: "2 products" },
  { title: "CPU", img: "Categories/img10.png", count: "2 products" },
  {
    title: "Discover Skincare",
    img: "Categories/img11.png",
    count: "2 products",
  },
  {
    title: "Headphones",
    img: "Categories/img12.png",
    count: "3 products",
  },
  {
    title: "Bracelets",
    img: "Categories/img13.png",
    count: "3 products",
  },
  {
    title: "Smart Watch",
    img: "Categories/img14.png",
    count: "3 products",
  },
  {
    title: "Earrings",
    img: "Categories/img15.png",
    count: "3 products",
  },
];

const ProductsPage: FC = () => {
  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className={styles.body}>
        <div className="__container">
          <div className={styles.content}>
            <h1 className={styles.title}>Only Categories</h1>
            <div className={styles.path}>
              <span>Home</span>
              <span>Only Categories</span>
            </div>
            <div className={styles.blocks}>
              {categories.map((category) => {
                return (
                  <Link to="#" className={styles.block}>
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
    </>
  );
};

export default ProductsPage;
