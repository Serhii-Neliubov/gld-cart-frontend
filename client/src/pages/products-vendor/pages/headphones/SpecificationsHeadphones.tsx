import React from 'react';
import styles from './SpecificationsHeadphones.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsHeadphones = () => {
    return (
        <Layout title='Headphones PRODUCTS Form' subtitle='Products Specification' stage={4}
                backLink='/products-category-page/headphones/basic-information/photo-and-video'
                nextLink='/renting-category-page/headphones/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputRadioBox}>
                <span>The range of frequencies the headphones can reproduce (e.g.)</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>20kHz</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>20Hz</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputRadioBox}>
                <span>Describe the charging method.</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>USB-C</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>Wireless</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>micro-USB</label>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>Headphone Type of Property</span>
            <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                    <input type='checkbox'/>
                    <label>Over-ear</label>
                </div>
                <div className={styles.checkboxInputs}>
                    <input type='checkbox'/>
                    <label>On-ear</label>
                </div>
                <div className={styles.checkboxInputs}>
                    <input type='checkbox'/>
                    <label>True wireless</label>
                </div>
                <div className={styles.checkboxInputs}>
                    <input type='checkbox'/>
                    <label>In-ear</label>
                </div>
            </div>
            <div className={styles.inputRadioBox}>
                <span>Types of Colors.</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>Black</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>White</label>
                    </div>
                </div>
            </div>
        </Layout>
    )
}