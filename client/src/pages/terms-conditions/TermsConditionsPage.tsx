import Footer from "../../components/Footer/Footer.tsx";
import { TermsConditions } from "../../utils/TermsConditionsData";
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
          <h1 className={styles.title}>{TermsConditions.title}</h1>
          <span className={styles.desc}>{TermsConditions.description_top}</span>
          <div className={styles.text}>
            {TermsConditions.list_text.map((li) => {
              return (
                <TextSection
                  id={li.id}
                  title={li.title}
                  text={li.text.map((text) => text)}
                />
              );
            })}
          </div>
          <span className={styles.desc}>
            {TermsConditions.description_bottom}
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TermsConditionsPage;
