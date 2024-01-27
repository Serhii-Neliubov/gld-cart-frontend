import React from 'react';
import styles from './SpecificationsBracelets.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsBracelets = () => {
    return (
        <Layout title='Shoes PRODUCTS Form' subtitle='Products Specification' stage={4}
                backLink='/products-category-page/bracelets/basic-information/photo-and-video'
                nextLink='/renting-category-page/bracelets/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.areaBox}>
                <label>Material</label>
                <textarea placeholder='Write about the primary material used for the bracelets'/>
            </div>
            <div className={styles.choosingColor}>
                <span>Select the Colour of your product</span>
                <div>
                    <button className={styles.choosingColorItem} style={{backgroundColor: '#9302A0'}}/>
                    <button className={styles.choosingColorItem} style={{backgroundColor: '#318834'}}/>
                    <button className={styles.choosingColorItem} style={{backgroundColor: '#000000'}}/>
                    <button className={styles.choosingColorItem} style={{backgroundColor: '#282684'}}/>
                    <button className={styles.choosingColorItem} style={{backgroundColor: '#EC0000'}}/>
                    <button className={styles.addingColor}>+</button>
                </div>
            </div>
            <span className={styles.tipTitle}>Select Size of products</span>
            <div className={styles.checkboxInputColumn}>
                <div className={styles.checkboxInputs}>
                    <input type='checkbox'/>
                    <label>Medium</label>
                </div>
                <div className={styles.checkboxInputs}>
                    <input type='checkbox'/>
                    <label>Small</label>
                </div>
                <div className={styles.checkboxInputs}>
                    <input type='checkbox'/>
                    <label>Large</label>
                </div>
            </div>
            <span className={styles.tipTitle}>Select the Metal type of bracelets</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Sterling Silver</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>White Gold</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Stainless Steel</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Gold</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Platinum</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Copper</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Rose Gold</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Titanium</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Other</label>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>Select the type of closure for the Bracelets</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Lobster Clasp</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Magnetic Clasp</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Buckle</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Toggle Clasp</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Box Clasp</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Other</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Spring Ring Clasp</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Slide Clasp</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>How many product are in stock?</label>
                <input type='number' placeholder='200'/>
            </div>
        </Layout>
    )
}