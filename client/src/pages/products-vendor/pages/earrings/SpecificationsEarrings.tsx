import React from 'react';
import styles from './SpecificationsEarrings.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const SpecificationsEarrings = () => {
    return (
        <Layout title='Earrings PRODUCTS Form' subtitle='Products Specification' stage={4}
                backLink='/products-category-page/earrings/basic-information/photo-and-video'
                nextLink='/renting-category-page/earrings/basic-information/photo-and-video/specifications/publish-complete'>
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
            <span className={styles.tipTitle}>Select the type of closure for the shoes</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Stud Earrings</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Chandelier Earrings</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Ear Climbers</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Hoop Earrings</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Drop Earrings</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Ear Cuffs</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Dangle Earrings</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Stud Earrings with Jacket</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Other</label>
                    </div>
                </div>
            </div>
            <span className={styles.tipTitle}>Select the type of closure for the shoes</span>
            <div className={styles.checkboxInputsBox}>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Butterfly Back</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Fishhook</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Ear Wire</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Screw Back</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Latch Back</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Other</label>
                    </div>
                </div>
                <div className={styles.checkboxInputColumn}>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Leverback</label>
                    </div>
                    <div className={styles.checkboxInputs}>
                        <input type='checkbox'/>
                        <label>Clip-On</label>
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