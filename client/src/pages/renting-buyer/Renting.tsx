import { FC, useEffect } from "react";
import "./Renting.module.scss";
import styles from "./Renting.module.scss";
import Footer from "../../components/UI/Footer";
import { Link } from "react-router-dom";

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
          <Link to="/renting-car" className={styles.block}>
            <div className={styles.image}>
              <img src="RentingPage/img1.png" alt="Image" />
            </div>

            <span>Vehicles</span>
          </Link>
          <Link to="/renting-house" className={styles.block}>
            <div className={styles.image}>
              <img src="RentingPage/img2.png" alt="Image" />
            </div>

            <span>Houses</span>
          </Link>
          <Link to="/renting-electronics" className={styles.block}>
            <div className={styles.image}>
              <img src="RentingPage/img3.png" alt="Image" />
            </div>
            <span>Electronics</span>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Renting;
