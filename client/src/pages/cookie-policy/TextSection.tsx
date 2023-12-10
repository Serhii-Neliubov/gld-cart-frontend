import React from "react";
import styles from "./CookiePolicyPage.module.scss";

type TextSectionProps = {
  id: number;
  title: string;
  text: React.ReactNode[];
};

export default function TextSection({ title, text, id }: TextSectionProps) {
  return (
    <div className={styles.text_container}>
      <p className={styles.list_item}>
        {id}. {title}
      </p>
      <ul className={styles.unordered_list}>
        {text.map((text) => {
          return <li>{text}</li>;
        })}
      </ul>
    </div>
  );
}
