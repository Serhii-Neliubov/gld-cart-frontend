import React from 'react';
import styles from './SpecificationsClothing.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsClothing = () => {
    return (
        <Layout title='Clothing PRODUCTS Form' subtitle='Products Specification' stage={4}
                backLink='/products-category-page/clothing/basic-information/photo-and-video'
                nextLink='/renting-category-page/clothing/basic-information/photo-and-video/specifications/publish-complete'>
            <span className={styles.tipTitle}>Select the age group for which the clothing item is suitable</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Adult</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Infant</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Teen</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>All Ages</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Child</label>
                    </div>
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
            <span className={styles.tipTitle}>Select the primary material used for the clothing item</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Cotton</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Wool</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Leather</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Polyester</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Silk</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Other</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Linen</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Denim</label>
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