import React from 'react';
import styles from './Faqs.module.scss';
import { FC } from 'react';
import useDefaultScrollPosition from "@hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";
import {FaqsData} from "@assets/data/public-rules/FaqsData.ts";
import TextSection from "@components/text-paragraph/TextSection.tsx";
import Footer from "@components/footer/Footer.tsx";

const Faqs: FC = () => {
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

export default Faqs;
