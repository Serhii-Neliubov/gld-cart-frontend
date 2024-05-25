import Footer from "@components/footer/Footer.tsx";
import TextSection from "@components/text-paragraph/TextSection.tsx";
import styles from "./TermsConditions.module.scss";
import useDefaultScrollPosition from "@hooks/useDefaultScrollPosition/useDefaultScrollPosition.tsx";
import {TermsConditionsData} from "@assets/data/public-rules/TermsConditionsData.ts";

export default function TermsConditions() {
  useDefaultScrollPosition();

  return (
    <>
      <div className="__container">
        <div className={styles.body}>
          <h1 className={styles.title}>{TermsConditionsData.title}</h1>
          <span className={styles.desc}>{TermsConditionsData.description_top}</span>
          <div className={styles.text}>
            {TermsConditionsData.list_text.map(li => (
                    <TextSection
                        key={li.id}
                        id={li.id}
                        title={li.title}
                        text={li.text.map((text) => text)}
                    />
                )
            )}
          </div>
          <span className={styles.desc}>
            {TermsConditionsData.description_bottom}
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}