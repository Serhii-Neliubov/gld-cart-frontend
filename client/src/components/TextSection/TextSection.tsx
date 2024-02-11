import React from "react";
import styles from './TextSection.module.scss'
import {TextSectionProps} from "../../models/ITextSection.ts";

export default function TextSection({ title, text, id }: TextSectionProps) {
  return (
    <div className={styles.text_container}>
      <p>
        {id}. {title}
      </p>
      <ul>
        {text.map((text) => {
          return <li>{text}</li>;
        })}
      </ul>
    </div>
  );
}
