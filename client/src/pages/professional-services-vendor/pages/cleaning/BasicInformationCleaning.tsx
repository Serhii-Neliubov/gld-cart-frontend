import React from 'react';
import styles from './BasicInformationCleaning.module.scss'
import {Layout} from "../../../../components/Vendor/Layout.tsx";

export const BasicInformationCleaning = () => {
    return(
        <Layout title='Cleaning SERVICES Form' subtitle='Basic information' stage={2} backLink='/personal-services' nextLink='/professional-services/cleaning/basic-information/photo-and-video'>
            <div className={styles.inputTextBox}>
                <label>Title</label>
                <input placeholder='70 words max' maxLength={70}/>
            </div>
            <div className={styles.inputAreaBox}>
                <label>Description</label>
                <textarea minLength={160} maxLength={9000} placeholder='Minimum 160 and maximum 9000 characters'/>
            </div>
            <div className={styles.inputRadioBox}>
                <span>You want to give your professional service in </span>
                <div className={styles.radioInputs}>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>Day</label>
                    </div>
                    <div className={styles.inputRadio}>
                        <input type='radio'/>
                        <label>Night</label>
                    </div>
                </div>
            </div>
            <div className={styles.packageDetails}>
                <span>Packages Details</span>
                <div className={styles.inputsCheckbox}>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type='checkbox'/>
                            <label>Renting Packages For Days </label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Rent Price</span>
                                    <input placeholder='450$'/>
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Day</span>
                                    <select>
                                        <option value='1 Day'>01 Day</option>
                                        <option value='2 Days'>02 Days</option>
                                        <option value='3 Days'>03 Days</option>
                                        <option value='4 Days'>04 Days</option>
                                        <option value='5 Days'>05 Days</option>
                                        <option value='10 Days'>10 Days</option>
                                        <option value='15 Days'>15 Days</option>
                                        <option value='20 Days'>20 Days</option>
                                        <option value='25 Days'>25 Days</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type='checkbox'/>
                            <label>Renting Packages For Weeks </label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Rent Price</span>
                                    <input placeholder='450$'/>
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Week</span>
                                    <select>
                                        <option value='1 Day'>01 Week</option>
                                        <option value='2 Weeks'>02 Weeks</option>
                                        <option value='3 Weeks'>03 Weeks</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.inputCheckbox}>
                        <div>
                            <input type='checkbox'/>
                            <label>Renting Packages For Months </label>
                        </div>
                        <div className={styles.inputsBox}>
                            <div>
                                <div className={styles.inputBox}>
                                    <span>Rent Price</span>
                                    <input placeholder='450$'/>
                                </div>
                                <div className={styles.inputBox}>
                                    <span>Month</span>
                                    <select>
                                        <option value='1 Month'>01 Month</option>
                                        <option value='2 Months'>02 Months</option>
                                        <option value='3 Months'>03 Months</option>
                                        <option value='4 Months'>04 Months</option>
                                        <option value='5 Months'>05 Months</option>
                                        <option value='10 Months'>10 Months</option>
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