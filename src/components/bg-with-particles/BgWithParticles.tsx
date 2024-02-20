import React from "react";
import styles from "./BgWithParticles.module.scss";

type LoginProps = {
  children: React.ReactNode;
};

import imageDecor1 from "@/assets/images/Login/decor1.png";
import imageDecor2 from "@/assets/images/Login/decor2.png";
import imageDecor3 from "@/assets/images/Login/decor3.png";

const BgWithParticles = ({ children }: LoginProps) => {
  return (
    <div>
      <div className="__container">
        <div className={styles.body}>
          <div className={styles.content}>{children}</div>
          <div className={styles.decoration}>
            <div className={styles.first_elem}>
              <img src={imageDecor1} alt="Icon" />
            </div>
            <div className={styles.second_elem}>
              <img src={imageDecor2} alt="Icon" />
            </div>
            <div className={styles.third_elem}>
              <img src={imageDecor3} alt="Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BgWithParticles;
