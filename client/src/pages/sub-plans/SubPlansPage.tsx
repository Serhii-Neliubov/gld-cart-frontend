import { FC, useEffect } from "react";
import styles from "./SubPlansPage.module.scss";
import Footer from "../../components/Footer/Footer.tsx";
import SubPlanList from "./SubPlanList";

const SubPlansPage: FC = () => {
  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="__container">
        <div className={styles.body}>
          <h1 className={styles.title}>
            Get Extra Features with our Subscription Plans
          </h1>
          <SubPlanList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SubPlansPage;
