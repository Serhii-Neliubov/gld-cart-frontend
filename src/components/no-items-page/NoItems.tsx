import { Link } from "react-router-dom";
import styles from "./NoItems.module.scss";
import Footer from "@components/footer/Footer.tsx";

type NoItemsProps = {
  title: string;
};

// Need to refactor

export default function NoItems({ title }: NoItemsProps) {
  return (
    <>
      <div className='__container'>
        <h1>{title}</h1>
        <div className={styles.path}>
          <span>Home</span>
          <span>{title}</span>
        </div>
        <div className={styles.content}>
          <h2>No {title} Items Found</h2>

          <Link className={styles.link} to="/products">
            Continue Shopping
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}
