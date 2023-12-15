import Footer from "../../components/UI/Footer";
import { FaqsData } from "../../utils/FaqsData";
import TextSection from "../cookie-policy/TextSection";
import styles from "./FaqsPage.module.scss";
import { FC, useEffect } from "react";

const FaqsPage: FC = () => {
  useEffect((): void => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
    </>
  );
};

export default FaqsPage;
