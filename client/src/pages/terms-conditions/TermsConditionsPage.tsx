import Footer from "../../components/UI/Footer";
import { TermsConditionsData } from "../../utils/TermsConditionsData";
import TextSection from "../cookie-policy/TextSection";
import styles from "./TermsConditionsPage.module.scss";
import { FC, useEffect } from "react";

const TermsConditionsPage: FC = () => {
  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="__container">
        <div className={styles.body}>
          <h1 className={styles.title}>Terms and Conditions</h1>
          <span className={styles.desc}>
            By using Gldcart.com , you agree to the terms and conditions,
            privacy policy, and returns/refund policy of the Site. Please read
            the Terms and Conditions carefully before using Gldcart.com.
          </span>
          <div className={styles.text}>
            {TermsConditionsData.map((data) => {
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
            These Terms and Conditions outline the rules and guidelines for
            using the GLDCART Ecommerce Website. By accessing and using the
            Website, users agree to comply with these terms.
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditionsPage;
