import React from 'react';
import styles from './SpecificationsSmartWatch.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsSmartWatch = () => {
    return (
        <Layout title='Smart Watch PRODUCTS Form' subtitle='Products Specification' stage={4}
                backLink='/products-category-page/smart-watch/basic-information/photo-and-video'
                nextLink='/renting-category-page/smart-watch/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputRadioBox}>
                <span>Compatibility of Smartwatch</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>Android</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>iOS</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>Other</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputRadioBox}>
                <span>Describe the charging method.</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>Yes</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>No</label>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>Connectivity of Smartwatch</span>
            <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                    <input type='checkbox'/>
                    <label>Bluetooth</label>
                </div>
                <div className={styles.checkboxInputs}>
                    <input type='checkbox'/>
                    <label>Wi-Fi</label>
                </div>
                <div className={styles.checkboxInputs}>
                    <input type='checkbox'/>
                    <label>GPS</label>
                </div>
                <div className={styles.checkboxInputs}>
                    <input type='checkbox'/>
                    <label>NFC</label>
                </div>
            </div>
        </Layout>
    )
}