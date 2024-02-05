import React from 'react';
import styles from "../NewElectronics.module.scss";

export const SpecificationInformation = () => {
    return (
        <React.Fragment>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Model</label>
                    <input placeholder="Item model" />
                </div>
                <div className={styles.inputBox}>
                    <label>Color</label>
                    <input placeholder="Item color" />
                </div>
            </div>
            <div className={styles.inputsRadio}>
                <span>Item Condition</span>
                <div>
                    <div className={styles.inputRadio}>
                        <input type="radio" />
                        <label>Brand New</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type="radio" />
                        <label>Used</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Size</label>
                <input placeholder="Provide measurements if applicable" />
            </div>
            <div className={styles.subtitle}>
                <span>Fill this for Smartphones, Laptops and Tablets</span>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Operating System</label>
                    <input placeholder="Specify the operating system" />
                </div>
                <div className={styles.inputBox}>
                    <label>Processor</label>
                    <input placeholder="Provide details about the processor e.g.,CPU model & speed" />
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Memory (RAM)</label>
                <input placeholder="Specify the RAM capacity" />
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Storage</label>
                    <input placeholder="Indicate the storage capacity, e.g., SSD/HDD size" />
                </div>
                <div className={styles.inputBox}>
                    <label>Display/Screen</label>
                    <input placeholder="Provide information about the screen size, resolution" />
                </div>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Camera</label>
                    <input placeholder="Specify camera features, including megapixels" />
                </div>
                <div className={styles.inputBox}>
                    <label>Battery Life</label>
                    <input placeholder="Estimate battery life in hours" />
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Connectivity</label>
                <input placeholder="connectivity options such as Wi-Fi, Bluetooth, USB ports, etc." />
            </div>
            <div className={styles.inputBox}>
                <label>Additional Features</label>
                <input placeholder="Mention any unique features or functionalities" />
            </div>
        </React.Fragment>
    )
}