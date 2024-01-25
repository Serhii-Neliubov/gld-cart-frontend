import React from 'react';
import styles from './SpecificationsFacial.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsFacial = () => {
    return (
        <Layout title='Facial Care PRODUCTS Form' subtitle='Products Specification' stage={4}
                backLink='/products-category-page/bluetooth/basic-information/photo-and-video'
                nextLink='/renting-category-page/vehicle/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputBox}>
                <label>How many product are in stock?</label>
                <input type='number' placeholder='100'/>
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
                <span>Paraben-Free: [Check if the product is paraben-free]</span>
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
                <span>Cruelty-Free: [Check if the product is cruelty-free]</span>
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