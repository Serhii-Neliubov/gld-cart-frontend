import React from 'react';
import styles from './SpecificationsNecklaces.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsNecklaces = () => {
    return (
        <Layout title='Necklaces PRODUCTS Form' subtitle='Products Specification' stage={4}
                backLink='/products-category-page/necklaces/basic-information/photo-and-video'
                nextLink='/renting-category-page/necklaces/basic-information/photo-and-video/specifications/publish-complete'>
            <div className={styles.inputsBox}>
                <div className={styles.inputBox}>
                    <label>Material</label>
                    <textarea placeholder='Specify the operating system'/>
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
            <span className={styles.tipTitle}>Select the type of chain for the necklace</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Cable Chain</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Box Chain</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Singapore Chain</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Rolo Chain</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Snake Chain</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Curb Chain</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Figaro Chain</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Rope Chain</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Other</label>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>Select the type of closure for the necklace</span>
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
                        <label>Barrel Clasp</label>
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
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Other</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Toggle Clasp</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Hook Clasp</label>
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