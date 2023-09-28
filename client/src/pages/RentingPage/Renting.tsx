import { FC, useEffect } from "react";
import "./Renting.module.scss";
import styles from "./Renting.module.scss";

const Renting: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="__container">
        <h1 className={styles.title}>
          Select <span>renting</span> Category
        </h1>
        <div className={styles.blocks}>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="RentingPage/img1.png" alt="Image" />
            </div>

            <span>Vehicles</span>
          </a>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="RentingPage/img2.png" alt="Image" />
            </div>

            <span>Houses</span>
          </a>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="RentingPage/img3.png" alt="Image" />
            </div>
            <span>Electronics</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Renting;
