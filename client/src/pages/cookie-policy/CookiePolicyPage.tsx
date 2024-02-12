import React from 'react';
import Footer from "../../components/Footer/Footer.tsx";
import TextSection from "../../components/TextSection/TextSection.tsx";
import styles from "./CookiePolicyPage.module.scss";
import { FC } from "react";
import { CookiePolicyData } from "../../data/publicBuyerRules/CookiePolicyData.ts";
import useDefaultScrollPosition from "../../hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

const CookiePolicyPage: FC = () => {
  useDefaultScrollPosition();

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default CookiePolicyPage;
