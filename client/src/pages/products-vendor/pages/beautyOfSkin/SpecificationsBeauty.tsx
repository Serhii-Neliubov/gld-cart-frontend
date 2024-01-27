import React from 'react';
import styles from './SpecificationsBeauty.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsBeauty = () => {
    return (
        <Layout title='Beauty Skin Care PRODUCT Form ' subtitle='Products Specification' stage={4}
                backLink='/products-category-page/beauty/basic-information/photo-and-video'
                nextLink='/products-category-page/beauty/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputBox}>
                <label>How many product are in stock?</label>
                <input type='number' placeholder='100'/>
            </div>
            <div className={styles.inputsRadio}>
                <span>The product  you want to sell is ?</span>
                <div>
                    <div className={styles.inputRadioBox}>
                        <label>Branded</label>
                        <input type='radio'/>
                    </div>
                    <div className={styles.inputRadioBox}>
                        <label>Local</label>
                        <input type='radio'/>
                    </div>
                </div>
            </div>
            <div className={styles.subtitle}>
                <span>Select the appropriate skin type for which the product is suitable</span>
            </div>
            <div className={styles.checkboxInputs}>
                <input type='checkbox'/>
                <label>Normal</label>
            </div>
            <div className={styles.checkboxInputs}>
                <input type='checkbox'/>
                <label>Oily</label>
            </div>
            <div className={styles.checkboxInputs}>
                <input type='checkbox'/>
                <label>Dry</label>
            </div>
            <div className={styles.checkboxInputs}>
                <input type='checkbox'/>
                <label>Combination</label>
            </div>
            <div className={styles.checkboxInputs}>
                <input type='checkbox'/>
                <label>Sensitive</label>
            </div>
            <div className={styles.inputsRadio}>
                <span>Paraben-Free: [Check if the product is paraben-free]</span>
                <div>
                    <div className={styles.inputRadioBox}>
                        <label>Yes</label>
                        <input type='radio'/>
                    </div>
                    <div className={styles.inputRadioBox}>
                        <label>No</label>
                        <input type='radio'/>
                    </div>
                </div>
            </div>
            <div className={styles.inputsRadio}>
                <span>Cruelty-Free: [Check if the product is cruelty-free]</span>
                <div>
                    <div className={styles.inputRadioBox}>
                        <label>Yes</label>
                        <input type='radio'/>
                    </div>
                    <div className={styles.inputRadioBox}>
                        <label>No</label>
                        <input type='radio'/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}