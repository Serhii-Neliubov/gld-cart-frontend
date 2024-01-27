import React from 'react';
import styles from './SpecificationsAwesome.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsAwesome = () => {
    return (
        <Layout title='Awesome Lip Care PRODUCT Form' subtitle='Products Specification' stage={4}
                backLink='/products-category-page/awesome/basic-information/photo-and-video'
                nextLink='/renting-category-page/awesome/basic-information/photo-and-video/specifications/publish-complete'>
            <span className={styles.tipTitle}>Select the Flavor of your product</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Original</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Strawberry</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Citrus</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Other</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Cherry</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Coconut</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Watermelon</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Mint</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Vanilla</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Berry</label>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>Select the Ingredients used in your product</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Beeswax</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Jojoba Oil</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Lanolin</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Other</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Shea Butter</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Vitamin E</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Castor Seed Oil</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Coconut Oil</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Sunflower Seed Oil</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Olive Oil</label>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>Select the Features of your product</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>SPF Protection</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Tinted</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Long-Lasting</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Hydrating Formula</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Vegan</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Exfoliating</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Natural Ingredients</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Dermatologist-Tested</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Other</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>How many product are in stock?</label>
                <input type='number' placeholder='100'/>
            </div>
            <div className={styles.areaBox}>
                <label>Care Instructions</label>
                <textarea placeholder='Provide care and maintenance instructions for the bag'/>
            </div>
        </Layout>
    )
}