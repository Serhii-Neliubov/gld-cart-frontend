import React from 'react';
import styles from './SpecificationsShoes.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsShoes = () => {
    return (
        <Layout title='Shoes PRODUCTS Form' subtitle='Products Specification' stage={4}
                backLink='/products-category-page/shoes/basic-information/photo-and-video'
                nextLink='/renting-category-page/vehicle/basic-information/photo-and-video/specifications/publish-complete'>
            <span className={styles.tipTitle}>Select the age group for which the Shoes item is suitable</span>
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
            <span className={styles.tipTitle}>Select the type of closure for the shoes</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Lace-Up</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Zipper</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Velcro</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Buckle</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Slip-On</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Other</label>
                    </div>
                </div>
            </div>
            <div className={styles.inputBox}>
                <label>Write the weight of the shoes</label>
                <input type='text' placeholder='0.5 kg'/>
            </div>
            <div className={styles.inputBox}>
                <label>Specify the material of the shoe soles</label>
                <input type='text'/>
            </div>
            <div className={styles.inputBox}>
                <label>How many product are in stock?</label>
                <input type='number' placeholder='100'/>
            </div>
        </Layout>
    )
}