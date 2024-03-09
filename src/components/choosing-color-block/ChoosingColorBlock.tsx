import React from 'react';
import styles from "./ChoosingColorBlock.module.scss";

const basicColours = [
  "#9302A0",
  "#318834",
  "#000000",
  "#282684",
  "#EC0000"
];

export const ChoosingColorBlock = () => {
    const [colors, setColors] = React.useState<string[]>(basicColours);
    const [selectedColours, setSelectedColours] = React.useState<string[]>([]);
    console.log(selectedColours, 'colors');

    const selectColorHandler = (color: string, event:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();

      if(selectedColours.includes(color)) {
        setSelectedColours(selectedColours.filter((item) => item !== color));
      } else {
        setSelectedColours([...selectedColours, color]);
      }
    }

    const addColorHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();

      setColors([...colors, `#${Math.floor(Math.random()*16777215).toString(16)}`]);
    }

    return (
      <div className={styles.choosingColor}>
        <span>Select the colour of your product</span>
        <div className={styles.choosingColorBlock}>
          {colors.map((color, index) => {
            return (
              <button
                onClick={(event) => selectColorHandler(color, event)}
                key={index}
                className={`${(selectedColours.includes(color)) ? styles.choosingColorItem_active : ''} ${styles.choosingColorItem}`}
                style={{backgroundColor: color}}
              />
            );
          })}
          <button onClick={(event) => {
            addColorHandler(event);
          }} className={styles.addingColor}>+</button>
        </div>
      </div>
    )
}