import React from "react";
import { Link } from "react-router-dom";
import styles from "./NoItems.module.scss";
import Footer from "@/components/footer/Footer.tsx";

type NoItemsProps = {
  title: string;
};

export default function NoItems({ title }: NoItemsProps) {
  return (
    <React.Fragment>
      <div className='__container'>
        <h1>Wishlist</h1>
        <div className={styles.path}>
          <span>Home</span>
          <span>Wishlist</span>
        </div>
        <div className={styles.content}>
          <h2>{title}</h2>
          <Link className={styles.link} to="/products">
            Continue Shopping
          </Link>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
}
