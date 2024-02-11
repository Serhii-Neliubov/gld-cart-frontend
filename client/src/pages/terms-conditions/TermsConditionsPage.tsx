import React from 'react';
import Footer from "../../components/Footer/Footer.tsx";
import { TermsConditions } from "../../data/publicBuyerRules/TermsConditionsData.ts";
import TextSection from "../../components/TextSection/TextSection.tsx";
import styles from "./TermsConditionsPage.module.scss";
import { FC } from "react";
import useDefaultScrollPosition from "../../hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

const TermsConditionsPage: FC = () => {
  useDefaultScrollPosition();

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default TermsConditionsPage;
