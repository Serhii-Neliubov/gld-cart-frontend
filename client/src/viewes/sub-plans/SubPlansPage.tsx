import React, { FC } from "react";
import styles from "./SubPlansPage.module.scss";
import Footer from "../../components/Footer/Footer.tsx";
import SubPlanList from "./SubPlanList";
import useDefaultScrollPosition from "../../hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

const SubPlansPage: FC = () => {
  useDefaultScrollPosition();

  return (
    <React.Fragment>
      <div className="__container">
        <div className={styles.body}>
          <h1 className={styles.title}>
            Get Extra Features with our Subscription Plans
          </h1>
          <SubPlanList />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default SubPlansPage;
