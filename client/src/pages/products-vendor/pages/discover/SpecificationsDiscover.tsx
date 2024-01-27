import React from 'react';
import styles from './SpecificationsDiscover.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsDiscover = () => {
    return (
        <Layout title='Discover Skincare PRODUCTS Form' subtitle='Products Specification' stage={4}
                backLink='/products-category-page/discover-skincare/basic-information/photo-and-video'
                nextLink='/renting-category-page/discover-skincare/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputBox}>
                <label>How many product are in stock?</label>
                <input type='number' placeholder='400'/>
            </div>
            <div className={styles.inputRadioBox}>
                <span>The product  you want to sell is ?</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>Branded</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>Local</label>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>Select Size of products</span>
            <div className={styles.checkboxInputColumn}>
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
            </div>
            <span className={styles.tipTitle}>Select  the category of the facial care product</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Cleanser</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Serum</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Mask</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Toner</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Sunscreen</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Eye Cream</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Moisturizer</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Mask</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Other</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputRadioBox}>
                <span>Specify how often they are willing to use the recommended products</span>
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
            <div className={styles.inputRadioBox}>
                <span>Indicate their budget range for skincare products</span>
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
        </Layout>
    )
}