import React from 'react';
import styles from './BasicInformationRepairing.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const BasicInformationRepairing = () => {
    return(
        <Layout title='Repairing SERVICES Form' subtitle='Basic information' stage={2} backLink='/personal-services' nextLink='/professional-services/repairing/basic-information/photo-and-video'>
            <div className={styles.inputTextBox}>
                <label>Service Title</label>
                <input placeholder='70 words max' maxLength={70}/>
            </div>
            <div className={styles.inputAreaBox}>
                <label>Description</label>
                <textarea minLength={160} maxLength={9000} placeholder='Minimum 160 and maximum 9000 characters'/>
            </div>
            <div className={styles.inputRadioBox}>
                <span>You want to give your professional service in</span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>At Home</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>At Shop</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>At Office</label>
                    </div>
                </div>
            </div>
            <div className={styles.packageDetails}>
                <span>Packages Details</span>
                <div className={styles.inputsCheckbox}>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type='checkbox'/>
                            <label>Repairing Packages For Product</label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Rent Price</span>
                                    <input placeholder='450$'/>
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Hours</span>
                                    <select>
                                        <option value='1 Hour'>01 Hour</option>
                                        <option value='2 Hours'>02 Hours</option>
                                        <option value='3 Hours'>03 Hours</option>
                                        <option value='4 Hours'>04 Hours</option>
                                        <option value='5 Hours'>05 Hours</option>
                                        <option value='8 Hours'>08 Hours</option>
                                        <option value='12 Hours'>12 Hours</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type='checkbox'/>
                            <label>Fix Price Repairing </label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Rent Price</span>
                                    <input placeholder='450$'/>
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Fix</span>
                                    <input placeholder='Per product'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}