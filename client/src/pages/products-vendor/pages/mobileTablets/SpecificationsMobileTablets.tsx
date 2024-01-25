import React from 'react';
import styles from './SpecificationsMobileTablets.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsMobileTablets = () => {
    return (
        <Layout title='Awesome Lip Care PRODUCT Form' subtitle='Products Specification' stage={4}
                backLink='/products-category-page/mobile-tablets/basic-information/photo-and-video'
                nextLink='/renting-category-page/vehicle/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Operating System</label>
                    <input type='text' placeholder='Specify the operating system'/>
                </div>
                <div className={styles.inputBox}>
                    <label>Processor</label>
                    <input type='text' placeholder='Provide details about the processor'/>
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Memory (RAM)</label>
                <input type='text' placeholder='Specify the RAM capacity'/>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Storage</label>
                    <input type='text' placeholder='Indicate the storage capacity, e.g., SSD/HDD size'/>
                </div>
                <div className={styles.inputBox}>
                    <label>Screen/Display</label>
                    <input type='text' placeholder='Provide information about the screen size, resolution'/>
                </div>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Camera</label>
                    <input type='text' placeholder='Specify camera features, including megapixels'/>
                </div>
                <div className={styles.inputBox}>
                    <label>Battery Life</label>
                    <input type='text' placeholder='Estimate battery life in hours'/>
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Connectivity</label>
                <input type='text' placeholder='connectivity options such as Wi-Fi, Bluetooth, USB ports, etc.'/>
            </div>
            <span className={styles.tipTitle}>Select the Additional Features of your product</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Fingerprint Sensor</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Expandable Storage</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Dust Resistance</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Other</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Face Recognition</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Multi-Window Mode</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Keyboard Compatibility</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Stylus Support</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Water Resistance</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Case/Accessory Options</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>How many product are in stock?</label>
                <input type='number' placeholder='100'/>
            </div>
        </Layout>
    )
}