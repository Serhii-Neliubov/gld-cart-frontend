import React from "react";
import styles from "./BgWithParticles.module.scss";

type LoginProps = {
  children: React.ReactNode;
};

const BgWithParticles = ({ children }: LoginProps) => {
  return (
    <div>
      <div className="__container">
        <div className={styles.body}>
          <div className={styles.content}>{children}</div>
          <div className={styles.decoration}>
            <div className={styles.first_elem}>
              <img src="../../assets/images/Login/decor1.png" alt="Icon" />
            </div>
            <div className={styles.second_elem}>
              <img src="../../assets/images/Login/decor2.png" alt="Icon" />
            </div>
            <div className={styles.third_elem}>
              <img src="../../assets/images/Login/decor3.png" alt="Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgWithParticles;
