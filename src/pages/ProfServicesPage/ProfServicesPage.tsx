import { FC, useEffect } from "react";
import styles from "./ProfServicesPage.module.scss";
import Header from "../../components/UI/Header";
import Label from "../../components/Home/HomeElements/Label";
import Footer from "../../components/UI/Footer";

const ProfServicesPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Label />
      <div className="__container">
        <h1 className={styles.title}>
          Select <span>PROFESSIONAL SERVICES</span> Category
        </h1>
        <div className={styles.blocks}>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="professional-services/img1.png" alt="Image" />
            </div>

            <span>Cleaning</span>
          </a>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="professional-services/img2.png" alt="Image" />
            </div>

            <span>Repairing</span>
          </a>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="professional-services/img3.png" alt="Image" />
            </div>
            <span>Gardening</span>
          </a>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="professional-services/img4.png" alt="Image" />
            </div>
            <span>Tree Cutting</span>
          </a>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="professional-services/img5.png" alt="Image" />
            </div>
            <span>Lawn Services</span>
          </a>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="professional-services/img6.png" alt="Image" />
            </div>
            <span>Handyman</span>
          </a>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="professional-services/img7.png" alt="Image" />
            </div>
            <span>Snow Removal</span>
          </a>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="professional-services/img8.png" alt="Image" />
            </div>
            <span>Pest Control</span>
          </a>
          <a href="#" className={styles.block}>
            <div className={styles.image}>
              <img src="professional-services/img9.png" alt="Image" />
            </div>
            <span>Electrical</span>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfServicesPage;
