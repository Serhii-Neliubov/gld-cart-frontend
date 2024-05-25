import React, { FC } from "react";
import styles from "./PublishSuccessfully.module.scss";
import { Link } from "react-router-dom";
import RentingStage from "@components/renting-stages/RentingStage.tsx";

import imageTick from "@assets/images/PublishedSuccessfully/tick.svg";

const PublishSuccessfully: FC = () => {
  return (
    <div className={`__container ${styles.body}`}>
      <RentingStage coloredStage={6} />
      <div className={styles.border}>
        <img src={imageTick} alt="Image" />
        <h1>Your Product have Successfully Published </h1>
        <Link to="/">
          <button className={styles.button}>Go To Category Page</button>
        </Link>
      </div>
    </div>
  );
};

export default PublishSuccessfully;
