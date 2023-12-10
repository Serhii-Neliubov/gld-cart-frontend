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
          <h1 className={styles.title}>Cookie Policy</h1>
          <span className={styles.desc}>
            We use cookies to enhance your browsing experience on our website.
            By continuing to use our website, you consent to the use of cookies.
            This policy explains how we use cookies and how you can manage them.
          </span>
          <div className={styles.text}>
            {CookiePolicyData.map((data) => {
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
            By using our website, you agree to our use of cookies as explained
            in this policy.
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicyPage;
