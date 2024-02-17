import React from 'react';
import Footer from "../../components/Footer/Footer.tsx";
import { FaqsData } from "../../data/publicBuyerRules/FaqsData.ts";
import TextSection from "../../components/TextSection/TextSection.tsx";
import styles from "./FaqsPage.module.scss";
import { FC } from "react";
import useDefaultScrollPosition from "../../hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";

const FaqsPage: FC = () => {

    useDefaultScrollPosition();

  return (
    <React.Fragment>
      <div className="__container">
        <div className={styles.body}>
          <h1 className={styles.title}>{FaqsData.title}</h1>
          <div className={styles.text}>
            {FaqsData.items.map((data) => {
              return (
                <TextSection
                  id={data.id}
                  title={data.title}
                  text={data.text.map((text) => text)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default FaqsPage;
