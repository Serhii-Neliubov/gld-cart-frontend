import React from 'react';
import styles from './BasicInformationEarrings.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const BasicInformationEarrings = () => {
    return(
        <Layout title='Earrings PRODUCTS Form' subtitle='Basic information' stage={2}
                backLink='/products-category-page'
                nextLink='/products-category-page/earrings/basic-information/photo-and-video'>
            <div className={styles.inputTextBox}>
                <label>Service Title</label>
                <input placeholder='70 words max' maxLength={70}/>
            </div>
            <div className={styles.inputAreaBox}>
                <label>Products Description</label>
                <textarea minLength={160} maxLength={9000} placeholder='Minimum 160 and maximum 9000 characters'/>
            </div>
            <div className={styles.inputRadioBox}>
                <span>The Product you want to sell is for</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>Men</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>Women</label>
                    </div>
                </div>
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
            <div className={styles.packageDetails}>
                <span>Packages Details</span>
                <div className={styles.inputsCheckbox}>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type='checkbox'/>
                            <label>Full Price</label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Price</span>
                                    <input placeholder='450$'/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type='checkbox'/>
                            <label>Discount Price</label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Discount Price</span>
                                    <input placeholder='450$'/>
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Discount</span>
                                    <select>
                                        <option value='10%'>10%</option>
                                        <option value='20%'>20%</option>
                                        <option value='30%'>30%</option>
                                        <option value='40%'>40%</option>
                                        <option value='50%'>50%</option>
                                        <option value='60%'>60%</option>
                                        <option value='70%'>70%</option>
                                        <option value='80%'>80%</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}