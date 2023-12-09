import React from "react";
import { Link } from "react-router-dom";
import styles from "./NoItems.module.scss";

type NoItemsProps = {
  title: string;
};

export default function NoItems({ title }: NoItemsProps) {
  return (
    <div className={styles.content}>
      <h2>{title}</h2>
      <Link className={styles.link} to="/products">
        Continue Shipping
      </Link>
    </div>
  );
}
