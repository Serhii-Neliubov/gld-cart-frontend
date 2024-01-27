import React from 'react';
import styles from './SpecificationsCpu.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsCpu = () => {
    return (
        <Layout title='CPU PRODUCTS Form' subtitle='Product Specification' stage={4}
                backLink='/products-category-page/cpu/basic-information/photo-and-video'
                nextLink='/renting-category-page/cpu/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>CPU Model</label>
                    <input placeholder='Specify the model or series of the CPU'/>
                </div>
                <div className={styles.inputBox}>
                    <label>Socket Type</label>
                    <input placeholder='Indicate the socket type for compatibility'/>
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Core Count</label>
                <input placeholder='Enter the number of CPU cores'/>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Clock Speed</label>
                    <input placeholder='Specify the base and boost clock speeds'/>
                </div>
                <div className={styles.inputBox}>
                    <label>Cache</label>
                    <input placeholder='Specify the CPU cache size'/>
                </div>
            </div>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>TDP (Thermal Design Power)</label>
                    <input placeholder='Enter the TDP rating of the CPU in watts'/>
                </div>
                <div className={styles.inputBox}>
                    <label>Architecture</label>
                    <input placeholder='Specify the CPU architecture (e.g., AMD Ryzen, Intel Core)'/>
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Compatibility</label>
                <input placeholder='compatible motherboards or platforms if known'/>
            </div>
            <div className={styles.inputRadioBox}>
                <span>Integrated Graphics</span>
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
            <div className={styles.inputBox}>
                <label>How many product are in stock?</label>
                <input type='number' placeholder='100'/>
            </div>
        </Layout>
    )
}