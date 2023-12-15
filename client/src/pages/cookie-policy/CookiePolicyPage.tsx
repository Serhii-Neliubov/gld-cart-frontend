import Footer from "../../components/UI/Footer";
import TextSection from "./TextSection";
import styles from "./CookiePolicyPage.module.scss";
import { FC, useEffect } from "react";
import { CookiePolicyData } from "../../utils/CookiePolicyData";

const CookiePolicyPage: FC = () => {
  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="__container">
        <div className={styles.body}>
          <h1 className={styles.title}>{CookiePolicyData.title}</h1>
          <span className={styles.desc}>
            {CookiePolicyData.description_top}
          </span>
          <div className={styles.text}>
            {CookiePolicyData.items.map((data) => {
              return (
                <TextSection
                  id={data.id}
                  title={data.title}
                  text={data.text.map((text) => text)}
                />
              );
            })}
          </div>
          <span className={styles.desc}>
            {CookiePolicyData.description_bottom}
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicyPage;
