import React from 'react';
import Footer from "../../components/Footer/Footer.tsx";
import TextSection from "../../components/TextSection/TextSection.tsx";
import styles from "./FaqsPage.module.scss";
import { FC } from "react";
import useDefaultScrollPosition from "../../hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";
import {FaqsData} from "../../assets/data/publicBuyerRules/FaqsData.ts";

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
